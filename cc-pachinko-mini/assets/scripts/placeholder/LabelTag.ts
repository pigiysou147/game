import { _decorator, Component, Label, Color, UITransform, Size } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LabelTag')
export class LabelTag extends Component {
    @property
    text: string = 'PLACEHOLDER';

    @property
    fontSize: number = 26;

    @property
    color: Color = new Color(0, 0, 0, 255);

    @property
    outline: boolean = false;

    private label: Label | null = null;
    private ui: UITransform | null = null;

    onLoad() {
        this.label = this.getComponent(Label);
        if (!this.label) this.label = this.addComponent(Label);
        this.ui = this.getComponent(UITransform) || this.addComponent(UITransform);
        this.apply();
    }

    public setText(t: string) {
        this.text = t;
        this.apply();
    }

    public setStyle(size: number, color: Color) {
        this.fontSize = size;
        this.color = color;
        this.apply();
    }

    private apply() {
        if (!this.label) return;
        this.label.string = this.text;
        this.label.fontSize = this.fontSize;
        this.label.color = this.color;
        this.label.lineHeight = Math.max(this.fontSize + 2, this.label.lineHeight);
        const contentSize = new Size(this.label.actualFontSize * this.text.length * 0.6, this.label.lineHeight);
        if (this.ui) this.ui.setContentSize(contentSize);
    }
}

