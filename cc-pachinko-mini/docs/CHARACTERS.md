### 角色配置与回合轮换（《晴空双子》风格弹射）

本Demo支持从 `assets/resources/config/characters.json` 读取编队与角色参数，每次发射按顺序轮换角色，改变弹射球的颜色、速度、伤害与弹跳上限。

#### 配置文件
路径：`assets/resources/config/characters.json`
字段：
- `order`: 角色 `id` 的数组，决定出手顺序
- `characters`: 角色具体参数
  - `id`: 唯一标识
  - `name`: 显示名
  - `colorHex`: 弹射球颜色（如 `#FF6B6B`）
  - `damage`: 每次命中的基础伤害
  - `speedScale`: 发射速度倍率（基于拉伸向量）
  - `maxBounces`: 最大弹跳次数（`0` 表示不限）

示例：
```json
{
  "order": ["hero_sword", "hero_gunner", "hero_priest"],
  "characters": [
    { "id": "hero_sword",  "name": "剑姬",     "colorHex": "#FF6B6B", "damage": 2, "speedScale": 1.0, "maxBounces": 8 },
    { "id": "hero_gunner", "name": "炮术公主", "colorHex": "#4DABF7", "damage": 1, "speedScale": 1.2, "maxBounces": 10 },
    { "id": "hero_priest", "name": "修女",     "colorHex": "#51CF66", "damage": 1, "speedScale": 0.9, "maxBounces": 9 }
  ]
}
```

#### 挂载说明
- 在场景中创建 `CharacterManager` 组件，`configPath` 保持默认 `config/characters`。
- 将 `GameManager.characterManager` 赋值为该组件。
- 发射逻辑由 `GameManager.spawnBall` 读取当前角色参数并施加给 `Ball`。

#### 扩展方向
- 为角色添加被动/UB：可在 `CharacterConfig` 增加字段，再在 `GameManager` 或战斗系统具体实现。
- UI 展示：根据 `CharacterManager.getCurrent()` 显示当前出手的头像/名称。

