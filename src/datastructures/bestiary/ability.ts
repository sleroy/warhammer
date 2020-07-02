import { PhaseAction } from '../phase';
export default class Ability {
    constructor(public name: string, public description: string, public actions: PhaseAction) {}
}
