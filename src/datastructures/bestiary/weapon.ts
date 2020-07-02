export default class Weapon {
    constructor(
        public name: string,
        public range: Range,
        public type: string,
        public strength: StrengthModifier,
        public ap: number,
        public damage: DamageModifier,
        public specialAbilities: string[],
    ) {}
}

export interface Range {
    min: number;
    max: number;
}

export interface DamageModifier {
    base: number; // 6 for 1D6
    modifier: number; // +2
}

export interface StrengthModifier {
    base?: number; // Basic strength
    multiplier: number; // Multiplier own model strength
    modifier: number; // Added to the own model strength
}
