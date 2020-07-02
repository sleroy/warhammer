import Equipment from './equipment';
import Armor from './armor';
import Weapon from './weapon';

export default class Wargear {
    constructor(public name: string, public equipment?: Equipment, public weapon?: Weapon, public armor?: Armor) {}
}
