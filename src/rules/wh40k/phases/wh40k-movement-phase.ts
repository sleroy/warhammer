import Phase, { PhaseAction } from '../../../datastructures/phase';
import Wh40kStandardMoveAction from './actions/wh40k-standard-move-action';

export default class Wh40KMovementPhase implements Phase {
    public name = 'Movement phase';

    getAllowedActions(): PhaseAction[] {
        return [new Wh40kStandardMoveAction()];
    }
}
