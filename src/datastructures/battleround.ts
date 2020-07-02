import Phase from './phase';
export default interface BattleRound {
    round: number;

    getPhases(): Phase[];
}
