import Wargear from './wargear';

export enum WeaponType {
    Assault,
    Heavy,
    Rapid_Fire,
    Grenade,
    Pistol,
    Melee,
}

export interface WeaponTypeCharacteristics {
    type: WeaponType;
    base?: number;
    random?: number;
}

export default interface Weapon extends Wargear {
    name: string;
    range?: Range;
    type: WeaponTypeCharacteristics;
    strength: StrengthModifier;
    ap?: number;
    damage: DamageModifier;
    specialAbilities?: string[];
    categories?: string[];
}

export interface Range {
    min?: number;
    max?: number;
}

export interface DamageModifier {
    base: number; // 6 for 1D6
    modifier?: number; // +2
}

export interface StrengthModifier {
    base?: number; // Basic strength
    multiplier?: number; // Multiplier own model strength
    modifier?: number; // Added to the own model strength
}
