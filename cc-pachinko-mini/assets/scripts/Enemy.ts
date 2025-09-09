import { _decorator, Component, RigidBody2D, Vec2, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {
    @property
    maxHp: number = 5;

    @property
    speed: number = 100;

    @property
    scoreValue: number = 1;

    private currentHp: number = 0;
    private rigidBody: RigidBody2D | null = null;

    onLoad() {
        this.rigidBody = this.getComponent(RigidBody2D);
        this.currentHp = this.maxHp;
    }

    start() {
        if (this.rigidBody) {
            this.rigidBody.linearVelocity = new Vec2(-this.speed, 0);
        }
    }

    update(dt: number) {
        if (!this.rigidBody) {
            const wp = this.node.worldPosition;
            this.node.setWorldPosition(wp.x - this.speed * dt, wp.y, wp.z);
        }

        // Despawn if far out of bounds to avoid leaking
        const x = this.node.worldPosition.x;
        if (x < -5000 || x > 5000) {
            this.node.destroy();
        }
    }

    public applyDamage(amount: number) {
        this.currentHp -= amount;
        if (this.currentHp <= 0) {
            this.die();
        }
    }

    private die() {
        if (GameManager.instance) {
            GameManager.instance.addScore(this.scoreValue);
        }
        // notify spawner if listening
        this.node.emit('dead');
        this.node.destroy();
    }
}

