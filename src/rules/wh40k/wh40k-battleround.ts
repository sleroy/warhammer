import BattleRound from '../../datastructures/battleround';
import Phase from '../../datastructures/phase';
import Wh40KMovementPhase from './phases/wh40k-movement-phase';
import Wh40KChargePhase from './phases/wh40k-charge-phase';
import Wh40KPsychicPhase from './phases/wh40k-psychic-phase';
import Wh40KShootingPhase from './phases/wh40k-shooting-phase';
import Wh40KFightPhase from './phases/wh40k-fight-phase';
import Wh40KMoralePhase from './phases/wh40k-morale-phase';

const defaultPhases: Phase[] = [
    new Wh40KMovementPhase(),
    new Wh40KPsychicPhase(),
    new Wh40KShootingPhase(),
    new Wh40KChargePhase(),
    new Wh40KFightPhase(),
    new Wh40KMoralePhase(),
];

export class Wh40KBattleRound implements BattleRound {
    public round = 0;

    getPhases(): Phase[] {
        return defaultPhases;
    }
}
