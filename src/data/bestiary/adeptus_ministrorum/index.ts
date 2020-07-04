import ModelDescription from '../../../datastructures/bestiary/model-description';
import UnitDescription from '../../../datastructures/bestiary/unit-description';
export const AdeptusMinistrorumModels: ModelDescription[] = [
    {
        name: 'Battle Sister',
        description: '',
        sprite: 'BATTLE_SISTER',
        radius: 1,
        profile: {
            M: 6,
            WS: 4,
            BS: 3,
            S: 3,
            T: 3,
            W: 1,
            I: 4,
            A: 1,
            Ld: 7,
            Sv: 3,
        },
        wargear: ['BOLT_PISTOL', 'BOLTGUN', 'FRAG_GRENADE', 'KRAK_GRENADE'],
        abilities: ['AB_ACTS_OF_FAITH', 'AB_SHIELD_OF_FAITH'],
        wargear_options: [
            {
                from_wargear: ['BOLTGUN'],
                to_wargear: ['CAT_ADEPTUS_SPECIAL_WEAPON'],
                max: 1,
            },
            {
                from_wargear: ['BOLTGUN'],
                to_wargear: ['CAT_ADEPTUS_HEAVY_WEAPON'],
                max: 1,
            },
        ],
    },
    {
        name: 'Sister superior',
        description: '',
        sprite: 'SISTER_SUPERIOR',
        radius: 1,
        profile: {
            M: 6,
            WS: 4,
            BS: 3,
            S: 3,
            T: 3,
            W: 1,
            I: 4,
            A: 2,
            Ld: 8,
            Sv: 3,
        },
        wargear: ['BOLT_PISTOL', 'BOLTGUN', 'FRAG_GRENADE', 'KRAK_GRENADE'],
        abilities: ['AB_ACTS_OF_FAITH', 'AB_SHIELD_OF_FAITH'],
        wargear_options: [
            {
                from_wargear: ['BOLT_PISTOL'],
                to_wargear: ['CAT_ADEPTUS_PISTOLS'],
            },
            {
                from_wargear: [],
                to_wargear: ['CAT_ADEPTUS_MELEE'],
            },
            {
                from_wargear: ['BOLTGUN'],
                to_wargear: ['CAT_ADEPTUS_MELEE'],
            },
            {
                from_wargear: ['BOLTGUN'],
                to_wargear: ['CAT_ADEPTUS_RANGE'],
            },
        ],
    },
];

export const AdeptusMinistrorumUnits: UnitDescription[] = [
    {
        name: 'Battle sisters Squad',
        description: 'Battle sisters Squad',
        composition: [
            {
                min: 4,
                max: 14,
                points: 4,
                model: 'Battle Sister',
            },
            {
                min: 1,
                max: 1,
                points: 5,
                model: 'Sister superior',
            },
        ],
        abilities: [],
        unitType: 'INFANTRY', // IE Infantry
    },
];
