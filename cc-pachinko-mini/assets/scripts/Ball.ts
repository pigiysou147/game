import { _decorator, Component, RigidBody2D, Collider2D, Contact2DType, IPhysics2DContact, Vec2, Node, Color, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ball')
export class Ball extends Component {
    @property
    damage: number = 1;

    @property({ tooltip: 'Auto-despawn after N seconds to avoid leaks' })
    autoDespawnSeconds: number = 15;

    @property({ tooltip: 'World boundary for auto-despawn' })
    despawnBoundary: number = 4000;

    private rigidBody: RigidBody2D | null = null;
    private collider: Collider2D | null = null;
    private despawnCallback: ((ball: Node) => void) | null = null;
    private sprite: Sprite | null = null;
    private remainingBounces: number = 0;
    private baseDamage: number = 1;

    onLoad() {
        this.rigidBody = this.getComponent(RigidBody2D);
        this.collider = this.getComponent(Collider2D);
        this.sprite = this.getComponent(Sprite);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onEnable() {
        if (this.autoDespawnSeconds > 0) {
            this.scheduleOnce(() => this.despawn(), this.autoDespawnSeconds);
        }
    }

    onDisable() {
        this.unscheduleAllCallbacks();
    }

    public setDespawnCallback(cb: (ball: Node) => void) {
        this.despawnCallback = cb;
    }

    public launch(velocity: Vec2) {
        if (!this.rigidBody) return;
        this.rigidBody.linearVelocity = velocity;
        this.rigidBody.wakeUp();
    }

    public applyShotParams(color: Color, damage: number, maxBounces: number) {
        if (this.sprite) this.sprite.color = color;
        this.baseDamage = Math.max(1, damage);
        this.remainingBounces = maxBounces > 0 ? maxBounces : Number.MAX_SAFE_INTEGER;
    }

    private onBeginContact(self: Collider2D, other: Collider2D, contact: IPhysics2DContact | null) {
        const enemy = other.getComponent('Enemy') as any;
        if (enemy && typeof enemy.applyDamage === 'function') {
            enemy.applyDamage(this.baseDamage);
        }
        // decrement bounces only when we hit non-enemy collider (e.g., walls) or regardless? Here: any contact counts
        this.remainingBounces -= 1;
        if (this.remainingBounces <= 0) {
            this.despawn();
        }
    }

    update(dt: number) {
        const p = this.node.worldPosition;
        if (Math.abs(p.x) > this.despawnBoundary || Math.abs(p.y) > this.despawnBoundary) {
            this.despawn();
        }
    }

    public reset() {
        if (this.rigidBody) {
            this.rigidBody.linearVelocity = new Vec2(0, 0);
            this.rigidBody.angularVelocity = 0;
            this.rigidBody.sleep();
        }
    }

    public despawn() {
        this.reset();
        if (this.despawnCallback) {
            this.despawnCallback(this.node);
        } else {
            this.node.active = false;
        }
    }
}

