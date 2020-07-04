import UnitDescription from '../../datastructures/bestiary/unit-description';
import ModelDescription from '../../datastructures/bestiary/model-description';
import { TyranidModels, TyranidUnits } from './tyranids';
import { AdeptusMinistrorumModels, AdeptusMinistrorumUnits } from './adeptus_ministrorum/index';

export class ModelCatalog {
    findModel(model: string): ModelDescription {
        throw new Error('Method not implemented.');
    }
    private models: ModelDescription[] = [];
    private units: UnitDescription[] = [];
    constructor() {
        this.models.push(...TyranidModels);
        this.models.push(...AdeptusMinistrorumModels);
        this.units.push(...TyranidUnits);
        this.units.push(...AdeptusMinistrorumUnits);
    }
}

export const CATALOG = new ModelCatalog();
