### Cocos Creator 弹射小游戏（微信小游戏）快速搭建指引

本工程提供脚本与指引，帮助你用 Cocos Creator 3.x 快速做出“弹射×防守”的最小可玩版本，并能构建到微信小游戏。

#### 1. 创建项目与基础设置
- 打开 Cocos Creator 3.x，新建 2D 项目（任意目录）。
- 将本仓库的 `assets/scripts` 目录拷贝到你项目的 `assets/scripts` 下。
- 项目设置：
  - 项目 → 功能裁剪：启用 2D 物理（Box2D）。
  - 项目 → 物理 2D：重力 Y 设为 `-980`；调试阶段可打开“可视化调试绘制”。
  - 项目 → 分辨率：设计分辨率（示例）`1080x1920`，Fit Height.

#### 2. 资源与预制体
- 创建预制体 `Ball.prefab`：
  - 节点添加组件：`RigidBody2D`（Dynamic）、`CircleCollider2D`（半径按贴图）、`Sprite`（占位贴图），再挂 `scripts/Ball.ts`。
  - `Ball` 组件参数：`damage=1`。
- 创建预制体 `Enemy.prefab`：
  - 组件：`RigidBody2D`（Kinematic 或 Dynamic, 根据需求）、`BoxCollider2D`、`Sprite`，再挂 `scripts/Enemy.ts`。
  - `Enemy` 组件参数：`maxHp=5`。

#### 3. 场景搭建（Game.scene）
- 在场景根下创建：
  - `Canvas`：添加 `LaunchController.ts`（见参数），子节点 `AimLine` 添加 `Graphics` 组件并挂 `UI/AimLine.ts`。
  - `GameManager` 空节点：挂 `GameManager.ts`，并拖入引用（Ball Prefab、Enemy Prefab、WaveSpawner 等）。
  - `WaveSpawner` 空节点：挂 `WaveSpawner.ts`，设置 `spawnPoints`（可在场景中放 2~3 个空节点作为出生点）。
  - 地形/墙体：添加若干静态刚体（`RigidBody2D` 设置为 Static）+ 碰撞器，形成边界与弹射墙。

示例参数建议（可按需调整）：
- `LaunchController`：
  - `ballPrefab`：拖入 `Ball.prefab`
  - `ballSpawnPoint`：在角色或发射器位置创建空节点并拖入
  - `ballSpeedScale=12~18`
  - `maxPullDistance=300`
  - `aimLine`：拖入子节点 `AimLine`
- `WaveSpawner`：
  - `enemyPrefab`：拖入 `Enemy.prefab`
  - `spawnInterval=1.2`
  - `enemiesPerWave=10`
  - `maxConcurrent=6`

#### 4. 运行逻辑
- 按下并拖拽屏幕，松手后按拖拽向量发射小球；`AimLine` 显示瞄准线。
- 小球碰撞敌人造成伤害；敌人血量为 0 时销毁并计分。
- `WaveSpawner` 定时生成敌人。

#### 5. 微信小游戏构建
- 打开「构建发布」：选择平台「微信小游戏」，配置小游戏 AppID、发布目录。
- 若使用广告：
  - 在 `scripts/services/WxAdService.ts` 填入 `adUnitId`，在大厅或结算调用展示。
  - 审核前关闭频繁弹出，遵守平台策略。

#### 6. 常见问题
- 物理无反应：确认启用 Box2D，`RigidBody2D` 类型正确，碰撞器层级允许碰撞。
- 弹射力度异常：检查 `ballSpeedScale`、设计分辨率、坐标转换（`UITransform`）。
- 构建到微信黑屏：确保使用 3.x 最新稳定版；删除 `temp`/`library` 重新导入；检查系统权限。

#### 7. 下一步可扩展
- 多球技能/连锁反应（见 `AbilitySystem.ts`）。
- 简易关卡曲线与敌人种类（护盾/飞行/分裂）。
- 数据埋点与激励视频奖励（`WxAdService.ts`）。

