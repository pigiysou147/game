import { _decorator, Component, Node, Prefab, instantiate, NodePool, Vec2, Vec3, Color } from 'cc';
import { Ball } from './Ball';
import { CharacterManager } from './characters/CharacterManager';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    public static instance: GameManager | null = null;

    @property(Prefab)
    ballPrefab: Prefab | null = null;

    @property(Node)
    ballParent: Node | null = null;

    @property(CharacterManager)
    characterManager: CharacterManager | null = null;

    private ballPool: NodePool = new NodePool('Ball');

    private _score: number = 0;
    public get score(): number { return this._score; }

    onLoad() {
        GameManager.instance = this;
    }

    onDestroy() {
        if (GameManager.instance === this) GameManager.instance = null;
    }

    public spawnBall(worldPos: Vec3, velocity: Vec2) {
        if (!this.ballPrefab || !this.ballParent) return;
        let node = this.ballPool.get();
        if (!node) {
            node = instantiate(this.ballPrefab);
        }
        this.ballParent.addChild(node);
        node.setWorldPosition(worldPos);
        node.active = true;
        const ball = node.getComponent(Ball);
        if (ball) {
            ball.setDespawnCallback(this.recycleBall.bind(this));
            // apply per-character shot params
            let color = new Color(255, 255, 255, 255);
            let damage = 1;
            let bounces = 10;
            let speedScale = 1.0;
            if (this.characterManager && this.characterManager.isReady()) {
                const stats = this.characterManager.getShotStats();
                color = Color.fromHEX(new Color(), stats.colorHex);
                damage = stats.damage;
                bounces = stats.maxBounces;
                speedScale = stats.speedScale;
            }
            ball.applyShotParams(color, damage, bounces);
            ball.launch(new Vec2(velocity.x * speedScale, velocity.y * speedScale));
        }
        // advance turn after firing
        this.characterManager?.advanceTurn();
    }

    private recycleBall(node: Node) {
        node.active = false;
        this.ballPool.put(node);
    }

    public addScore(v: number) {
        this._score += v;
        // Hook to UI here if needed
    }
}

