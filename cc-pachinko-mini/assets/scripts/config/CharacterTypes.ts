export interface CharacterConfig {
\tid: string;
\tname: string;
\tcolorHex: string; // e.g. #FF6B6B
\tdamage: number; // base damage per hit
\tspeedScale: number; // velocity multiplier for this character
\tmaxBounces: number; // 0 for unlimited
}

export interface CharactersFile {
\torder: string[]; // lineup order of character ids
\tcharacters: CharacterConfig[];
}

export interface ShotStats {
\tdamage: number;
\tspeedScale: number;
\tmaxBounces: number;
\tcolorHex: string;
}

