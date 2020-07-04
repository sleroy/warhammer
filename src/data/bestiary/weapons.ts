import Weapon, { WeaponType } from '../../datastructures/bestiary/weapon';
export const Weapon: Weapon[] = [
    {
        name: 'BOLT_PISTOL',
        range: {
            min: 0,
            max: 12,
        },
        type: {
            type: WeaponType.Pistol,
            base: 1,
        },
        strength: { base: 4 },
        damage: {
            base: 1,
        },
    },
    {
        name: 'BOLTGUN',
        range: {
            min: 0,
            max: 24,
        },
        type: {
            type: WeaponType.Rapid_Fire,
            base: 1,
        },
        strength: { base: 4 },
        damage: {
            base: 1,
        },
    },
    {
        name: 'FRAG_GRENADE',
        range: {
            min: 0,
            max: 6,
        },
        type: {
            type: WeaponType.Grenade,
            random: 6,
        },
        strength: { base: 3 },
        damage: {
            base: 1,
        },
    },
    {
        name: 'KRAK_GRENADE',
        range: {
            min: 0,
            max: 6,
        },
        type: {
            type: WeaponType.Grenade,
            base: 1,
        },
        strength: { base: 6 },
        ap: -1,
        damage: {
            base: 3,
        },
    },
    {
        name: 'CLOSE_MELEE',
        type: {
            type: WeaponType.Melee,
            base: 1,
        },
        strength: {},
        ap: 0,
        damage: {
            base: 1,
        },
    },
    {
        name: 'W_RENDING_CLAWS',
        type: {
            type: WeaponType.Melee,
            base: 1,
        },
        strength: {},
        ap: -1,
        damage: {
            base: 1,
        },
        specialAbilities: ['AP_RENDING_CLAWS'],
    },
];
