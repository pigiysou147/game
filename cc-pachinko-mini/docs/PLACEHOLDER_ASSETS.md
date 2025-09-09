### 用色块与文字占位快速做 Demo（后续可统一换美术）

本方案让你在无美术的情况下先搭出可玩 Demo。后续替换时只需把 `Sprite` 的 `spriteFrame`/Prefab 指向真实资源即可，无需改逻辑。

#### 组件
- `placeholder/BlockRenderer.ts`：自动添加/配置 `Sprite` 与 `UITransform`，可指定颜色与尺寸。
- `placeholder/LabelTag.ts`：简单文字标签，用于在方块上标识类型/数值。
- `placeholder/PrefabFactory.ts`：示例工厂，快速在父节点下生成“色块+文字”。

#### 使用方法
1. 在场景/预制上添加 `BlockRenderer`，设置颜色和尺寸；在其子节点添加 `LabelTag` 设置文本。
2. 或在代码中：
```ts
import { PrefabFactory } from 'db://assets/scripts/placeholder/PrefabFactory';
import { Color } from 'cc';
// 假设 this.node 是父节点
PrefabFactory.spawnBlockWithText(this.node, null, 'ENEMY', new Color(255, 120, 120, 255));
```

#### 后续替换美术
- 将 `BlockRenderer` 所在节点替换为带有真实 `Sprite`/`Spine`/`DragonBones` 的预制，保留同名挂点（脚本依赖的节点）。
- 或直接在该节点 `Sprite` 上设置新的 `spriteFrame`，色块将被覆盖。

#### 注意
- 这些占位组件仅用于开发期；发布前建议清理或关闭调试外观。
- 若使用图集/自动图集，请在替换真实资源前配置好图集与压缩格式。

