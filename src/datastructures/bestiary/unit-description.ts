import ModelDescription from './model-description';
import Ability from './ability';
/**
 * Models move and fight in units, made up of one or more models. A unit must be set up and finish any sort of move as a group, with every model within 2" horizontally, and 6" vertically, of at least one other model from their unit: this is called unit coherency. If anything causes a unit to become split up during a battle, it must re-establish its unit coherency the next time it move
 */
export default interface UnitDescription {
    name: string;
    description: string;
    composition: UnitComposition[];
    abilities: string[];
    unitType: string; // IE Infantry
}

export class UnitComposition {
    constructor(public min: number, public max: number, public points: number, public model: string) {}
}
