import Unit from './alive/unit';

export default interface Phase {
    name: string;
    getAllowedActions(): PhaseAction[];
}

export interface PhaseAction {
    name: string;

    /**
     * Is this action allowed for this unit and potential targets
     * @param unit the unit
     */
    isAllowed(unit: Unit, target: Unit[]): boolean;

    execute(unit: Unit, target: Unit[]): PhaseActionItem;
}

export interface PhaseActionItem {
    unit: Unit;
    target: Unit[];

    perform(): void;

    isCancelable(): boolean;

    cancel(): void;
}
