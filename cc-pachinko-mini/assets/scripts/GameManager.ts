import { _decorator, Component, Node, Prefab, instantiate, NodePool, Vec2, Vec3 } from 'cc';
import { Ball } from './Ball';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    public static instance: GameManager | null = null;

    @property(Prefab)
    ballPrefab: Prefab | null = null;

    @property(Node)
    ballParent: Node | null = null;

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
            ball.launch(velocity);
        }
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

