import { _decorator, Component, Node, UITransform, Vec2, Vec3 } from 'cc';
import { GameManager } from './GameManager';
import { AimLine } from './UI/AimLine';
const { ccclass, property } = _decorator;

@ccclass('LaunchController')
export class LaunchController extends Component {
    @property(Node)
    ballSpawnPoint: Node | null = null;

    @property
    ballSpeedScale: number = 14;

    @property
    maxPullDistance: number = 300;

    @property(Node)
    aimLineNode: Node | null = null;

    private uiTransform: UITransform | null = null;
    private isDragging: boolean = false;
    private startLocal: Vec3 = new Vec3();
    private currentLocal: Vec3 = new Vec3();
    private aimLine: AimLine | null = null;

    onLoad() {
        this.uiTransform = this.getComponent(UITransform);
        if (this.aimLineNode) {
            this.aimLine = this.aimLineNode.getComponent(AimLine);
        }
    }

    onEnable() {
        this.node.on(Node.EventType.TOUCH_START as any, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE as any, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END as any, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL as any, this.onTouchCancel, this);
    }

    onDisable() {
        this.node.off(Node.EventType.TOUCH_START as any, this.onTouchStart, this);
        this.node.off(Node.EventType.TOUCH_MOVE as any, this.onTouchMove, this);
        this.node.off(Node.EventType.TOUCH_END as any, this.onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_CANCEL as any, this.onTouchCancel, this);
    }

    private uiToLocal(x: number, y: number): Vec3 {
        if (!this.uiTransform) return new Vec3(x, y, 0);
        return this.uiTransform.convertToNodeSpaceAR(new Vec3(x, y, 0));
    }

    private onTouchStart(event: any) {
        const p = event.getUILocation();
        this.startLocal = this.uiToLocal(p.x, p.y);
        this.currentLocal.set(this.startLocal);
        this.isDragging = true;
        this.updateAimLine();
    }

    private onTouchMove(event: any) {
        if (!this.isDragging) return;
        const p = event.getUILocation();
        this.currentLocal = this.uiToLocal(p.x, p.y);
        this.updateAimLine();
    }

    private onTouchEnd() {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.fireBall();
        this.clearAimLine();
    }

    private onTouchCancel() {
        this.isDragging = false;
        this.clearAimLine();
    }

    private updateAimLine() {
        if (!this.aimLine || !this.ballSpawnPoint) return;
        // Clamp pull distance
        const spawnLocal = this.uiToLocal(this.ballSpawnPoint.worldPosition.x, this.ballSpawnPoint.worldPosition.y);
        const drag = new Vec3(this.startLocal.x - this.currentLocal.x, this.startLocal.y - this.currentLocal.y, 0);
        const len = Math.sqrt(drag.x * drag.x + drag.y * drag.y);
        let endLocal: Vec3;
        if (len > this.maxPullDistance) {
            const scale = this.maxPullDistance / len;
            endLocal = new Vec3(this.startLocal.x - drag.x * scale, this.startLocal.y - drag.y * scale, 0);
        } else {
            endLocal = this.currentLocal.clone();
        }
        this.aimLine.drawLocal(spawnLocal, endLocal);
    }

    private clearAimLine() {
        if (this.aimLine) this.aimLine.clear();
    }

    private fireBall() {
        if (!this.ballSpawnPoint) return;
        const spawnWorld = this.ballSpawnPoint.worldPosition.clone();
        const drag = new Vec3(this.startLocal.x - this.currentLocal.x, this.startLocal.y - this.currentLocal.y, 0);
        // velocity opposite to drag direction
        const velocity = new Vec2(drag.x * this.ballSpeedScale, drag.y * this.ballSpeedScale);
        GameManager.instance?.spawnBall(spawnWorld, velocity);
    }
}

