import { PhaseActionItem } from '../phase';
import Unit from '../unit';

export default class PhaseActionItemImpl implements PhaseActionItem {
    target: Unit[] = [];

    constructor(public unit: Unit) {}

    perform() {}

    isCancelable() {
        return false;
    }

    cancel() {}
}
