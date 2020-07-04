import ModelDescription from '../../../datastructures/bestiary/model-description';
import UnitDescription from '../../../datastructures/bestiary/unit-description';
export const TyranidModels: ModelDescription[] = [
    {
        name: 'Genestealer',
        description: 'A Genestealer is a swift and powerful warrior',
        sprite: 'GENESTEALER',
        radius: 1,
        profile: {
            M: 8,
            WS: 3,
            BS: 3,
            S: 4,
            T: 4,
            W: 1,
            I: 6,
            A: 3,
            Ld: 9,
            Sv: 5,
        },
        wargear: ['W_RENDING_CLAWS'],
        abilities: ['AB_FLURRY_OF_CLAWS', 'AB_LIGHTNING_REFLEXES', 'SWIFT_AND_DEADLY'],
        wargear_options: [
            {
                from_wargear: [''],
                to_wargear: ['W_SCYTHING_TALONS'],
            },
            {
                from_wargear: [''],
                to_wargear: ['W_TOXIN_SACS'],
            },
        ],
    },
];

export const TyranidUnits: UnitDescription[] = [
    {
        name: 'Genestealers',
        description: 'Genestealers',
        composition: [
            {
                min: 5,
                max: 15,
                points: 4,
                model: 'Genestealer',
            },
        ],
        abilities: [],
        unitType: 'INFANTRY', // IE Infantry
    },
];
