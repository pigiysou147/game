import { _decorator, Component } from 'cc';
import { CharacterConfig, CharactersFile, ShotStats } from '../config/CharacterTypes';
import { ConfigLoader } from '../services/ConfigLoader';
const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {
\t@property({ tooltip: 'Path under resources/ without extension, e.g., config/characters' })
\tconfigPath: string = 'config/characters';

\tprivate idToConfig: Map<string, CharacterConfig> = new Map();
\tprivate order: string[] = [];
\tprivate index: number = 0;
\tprivate loaded: boolean = false;

\tasync onLoad() {
\t\ttry {
\t\t\tconst file = await ConfigLoader.loadJSON<CharactersFile>(this.configPath);
\t\t\tthis.applyFile(file);
\t\t} catch (e) {
\t\t\t// fallback defaults
\t\t\tconst fallback: CharactersFile = {
\t\t\t\torder: ['hero_sword', 'hero_gunner', 'hero_priest'],
\t\t\t\tcharacters: [
\t\t\t\t\t{ id: 'hero_sword', name: '剑姬', colorHex: '#FF6B6B', damage: 2, speedScale: 1.0, maxBounces: 8 },
\t\t\t\t\t{ id: 'hero_gunner', name: '炮术公主', colorHex: '#4DABF7', damage: 1, speedScale: 1.2, maxBounces: 10 },
\t\t\t\t\t{ id: 'hero_priest', name: '修女', colorHex: '#51CF66', damage: 1, speedScale: 0.9, maxBounces: 9 },
\t\t\t\t],
\t\t\t};
\t\t\tthis.applyFile(fallback);
\t\t}
\t}

\tprivate applyFile(file: CharactersFile) {
\t\tthis.idToConfig.clear();
\t\tfor (const c of file.characters) this.idToConfig.set(c.id, c);
\t\tthis.order = file.order.filter(id => this.idToConfig.has(id));
\t\tthis.index = 0;
\t\tthis.loaded = true;
\t}

\tisReady(): boolean { return this.loaded && this.order.length > 0; }

\tgetCurrent(): CharacterConfig {
\t\tif (!this.isReady()) {
\t\t\treturn { id: 'default', name: '默认', colorHex: '#FFFFFF', damage: 1, speedScale: 1.0, maxBounces: 8 };
\t\t}
\t\tconst id = this.order[this.index % this.order.length];
\t\treturn this.idToConfig.get(id)!;
\t}

\tgetShotStats(): ShotStats {
\t\tconst c = this.getCurrent();
\t\treturn { damage: c.damage, speedScale: c.speedScale, maxBounces: c.maxBounces, colorHex: c.colorHex };
\t}

\tadvanceTurn() { if (this.isReady()) this.index = (this.index + 1) % this.order.length; }
}

