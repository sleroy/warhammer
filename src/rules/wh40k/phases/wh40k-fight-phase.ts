import Phase, { PhaseAction } from '../../../datastructures/phase';
import Wh40kStandardMoveAction from './actions/wh40k-standard-move-action';

export default class Wh40KFightPhase implements Phase {
    public name = 'Fight phase';

    getAllowedActions(): PhaseAction[] {
        return [];
    }
}
