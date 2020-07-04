import UnitDescription from '../bestiary/unit-description';
import Model from './model';

/**
 * Models move and fight in units, made up of one or more models. A unit must be set up and finish any sort of move as a group, with every model within 2" horizontally, and 6" vertically, of at least one other model from their unit: this is called unit coherency. If anything causes a unit to become split up during a battle, it must re-establish its unit coherency the next time it move
 */
export default class Unit {
    private models: Model[] = [];

    constructor(public unit: UnitDescription) {}

    setModels(models: Model[]) {
        this.models = models;
    }
}
