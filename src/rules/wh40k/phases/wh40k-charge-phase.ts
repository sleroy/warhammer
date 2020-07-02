import Phase, { PhaseAction } from '../../../datastructures/phase';
import Wh40kStandardMoveAction from './actions/wh40k-standard-move-action';

export default class Wh40KChargePhase implements Phase {
    public name = 'Charge phase';

    getAllowedActions(): PhaseAction[] {
        return [];
    }
}
