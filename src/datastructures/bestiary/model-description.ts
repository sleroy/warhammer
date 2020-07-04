import Wargear from './wargear';

export default interface ModelDescription {
    name: string;
    sprite: string;
    radius: number;
    description: string;
    profile: Profile;
    wargear: string[]; // Array of string
    abilities: string[];
    wargear_options: WargearOption[];
}

export interface WargearOption {
    from_wargear: string[];
    to_wargear: string[];
    max?: number;
}

export interface Profile {
    M: number;
    WS: number;
    BS: number;
    S: number;
    T: number;
    W: number;
    I: number;
    A: number;
    Ld: number;
    Sv: number;
}
