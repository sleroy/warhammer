import Phase, { PhaseAction } from '../../../datastructures/phase';
import Wh40kStandardMoveAction from './actions/wh40k-standard-move-action';

export default class Wh40KShootingPhase implements Phase {
    public name = 'Shooting phase';

    getAllowedActions(): PhaseAction[] {
        return [];
    }
}
