import Phase, { PhaseAction } from '../../../datastructures/phase';
import Wh40kStandardMoveAction from './actions/wh40k-standard-move-action';

export default class Wh40KPsychicPhase implements Phase {
    public name = 'Psychic phase';

    getAllowedActions(): PhaseAction[] {
        return [];
    }
}
