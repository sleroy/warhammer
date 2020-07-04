import { PhaseAction, PhaseActionItem } from '../../../../datastructures/phase';
import Unit from '../../../../datastructures/alive/unit';
import PhaseActionItemImpl from '../../../../datastructures/phase-action-item-impl';

export default class Wh40kStandardMoveAction implements PhaseAction {
    public name = 'Standard move';

    /**
     * Is this action allowed for this unit and potential targets
     * @param unit the unit
     */
    public isAllowed(unit: Unit, target: Unit[]): boolean {
        return true;
    }

    public execute(unit: Unit, target: Unit[]): PhaseActionItem {
        return new PhaseActionItemImpl(unit);
    }
}
