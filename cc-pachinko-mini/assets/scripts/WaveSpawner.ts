import { _decorator, Component, Node, Prefab, instantiate, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WaveSpawner')
export class WaveSpawner extends Component {
    @property(Prefab)
    enemyPrefab: Prefab | null = null;

    @property([Node])
    spawnPoints: Node[] = [];

    @property
    spawnInterval: number = 1.2;

    @property
    enemiesPerWave: number = 10;

    @property
    maxConcurrent: number = 6;

    private aliveCount: number = 0;
    private spawnedInWave: number = 0;

    start() {
        this.schedule(this.tickSpawn, this.spawnInterval);
    }

    private tickSpawn() {
        if (!this.enemyPrefab || this.spawnPoints.length === 0) return;
        if (this.aliveCount >= this.maxConcurrent) return;
        if (this.spawnedInWave >= this.enemiesPerWave) {
            // reset wave counter; give a short break (skip one interval)
            this.spawnedInWave = 0;
            return;
        }
        const idx = math.randomRangeInt(0, this.spawnPoints.length);
        const sp = this.spawnPoints[idx];
        const node = instantiate(this.enemyPrefab);
        sp.scene?.addChild(node);
        node.setWorldPosition(sp.worldPosition);
        this.aliveCount += 1;
        this.spawnedInWave += 1;
        node.on('dead', () => {
            this.aliveCount = Math.max(0, this.aliveCount - 1);
        });
    }
}

