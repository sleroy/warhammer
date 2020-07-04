import UnitDescription from '../bestiary/unit-description';
import Unit from './unit';
import { CATALOG } from '../../data/bestiary/index';
import ModelDescription from '../bestiary/model-description';
import Model from './model';
export default class UnitFactory {
    private modelFactory: ModelFactory;

    constructor() {
        this.modelFactory = new ModelFactory();
    }

    instantiate(unitDescription: UnitDescription, composition: number[]): Unit {
        const unit = new Unit(unitDescription);

        if (unitDescription.composition.length != composition.length) {
            throw new Error('Invalid composition');
        }
        const models = [];
        for (let i = 0; i < composition.length; ++i) {
            const unitCompos = unitDescription.composition[i];
            if (unitCompos.max > 0 && composition[i] > unitCompos.max) {
                throw new Error(`Too many models for the composition  ${unitCompos}`);
            }
            if (unitCompos.min > 0 && composition[i] < unitCompos.min) {
                throw new Error(`Too few models for the composition  ${unitCompos}`);
            }
            models.push(this.modelFactory.instantiate(unitCompos.model, composition[i]));
        }

        return unit;
    }
}

export class ModelFactory {
    instantiate(model: string, copies: number): Model[] {
        const modelDescription: ModelDescription = CATALOG.findModel(model);
        if (!modelDescription) throw new Error('Model not found ' + model);

        const models = [];
        for (let i = 0; i < copies; ++i) {
            const model = new Model(modelDescription);
            models.push(model);
        }
        return models;
    }
    constructor() {}
}
