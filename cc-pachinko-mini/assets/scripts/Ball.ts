import { _decorator, Component, RigidBody2D, Collider2D, Contact2DType, IPhysics2DContact, Vec2, Node } from 'cc';
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

    onLoad() {
        this.rigidBody = this.getComponent(RigidBody2D);
        this.collider = this.getComponent(Collider2D);
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

    private onBeginContact(self: Collider2D, other: Collider2D, contact: IPhysics2DContact | null) {
        const enemy = other.getComponent('Enemy') as any;
        if (enemy && typeof enemy.applyDamage === 'function') {
            enemy.applyDamage(this.damage);
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

