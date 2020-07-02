import Phase, { PhaseAction } from '../../../datastructures/phase';
import Wh40kStandardMoveAction from './actions/wh40k-standard-move-action';

export default class Wh40KMoralePhase implements Phase {
    public name = 'Morale phase';

    getAllowedActions(): PhaseAction[] {
        return [];
    }
}
