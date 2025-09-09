import { _decorator, Component, Sprite, Color, UITransform, Size, SpriteFrame, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BlockRenderer')
export class BlockRenderer extends Component {
    @property({ tooltip: 'Block color' })
    color: Color = new Color(80, 160, 255, 255);

    @property({ tooltip: 'Size in pixels' })
    size: Size = new Size(120, 60);

    private sprite: Sprite | null = null;
    private ui: UITransform | null = null;

    onLoad() {
        this.sprite = this.getComponent(Sprite);
        this.ui = this.getComponent(UITransform);
        if (!this.sprite) {
            this.sprite = this.addComponent(Sprite);
        }
        if (!this.ui) {
            this.ui = this.addComponent(UITransform);
        }
        this.apply();
    }

    public setColor(color: Color) {
        this.color = color;
        this.apply();
    }

    public setSize(width: number, height: number) {
        this.size.width = width;
        this.size.height = height;
        this.apply();
    }

    private apply() {
        if (this.ui) {
            this.ui.setContentSize(this.size);
        }
        if (this.sprite) {
            // ensure we have a default white spriteframe to tint
            if (!this.sprite.spriteFrame) {
                resources.load('internal/default_sprite_splash/spriteFrame', SpriteFrame, (err, sf) => {
                    if (!err && this.sprite) this.sprite.spriteFrame = sf;
                });
            }
            this.sprite.color = this.color;
        }
    }
}

