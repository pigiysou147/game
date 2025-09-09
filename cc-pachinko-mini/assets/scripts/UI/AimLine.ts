import { _decorator, Component, Graphics, Vec3, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AimLine')
export class AimLine extends Component {
    @property
    lineWidth: number = 4;

    @property({ tooltip: 'RGBA hex, e.g., #00FFFF' })
    lineColorHex: string = '#00FFFF';

    private g: Graphics | null = null;

    onLoad() {
        this.g = this.getComponent(Graphics);
    }

    public drawLocal(from: Vec3, to: Vec3) {
        if (!this.g) return;
        const color = Color.fromHEX(new Color(), this.lineColorHex);
        this.g.clear();
        this.g.lineWidth = this.lineWidth;
        this.g.strokeColor = color;
        this.g.moveTo(from.x, from.y);
        this.g.lineTo(to.x, to.y);
        this.g.stroke();
    }

    public clear() {
        if (this.g) this.g.clear();
    }
}

