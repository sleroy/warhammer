import Wargear from "./wargear";

export default class ModelDescription {
    constructor(
        public name: string,
        public description: string,
        public power: number,
        public profile: Profile,
        public wargear: Wargear,
    ) {}
}

export class Profile {
    constructor(
        public M: number,
        public WS: number,
        public BS: number,
        public S: number,
        public T: number,
        public W: number,
        public I: number,
        public A: number,
        public Ld: number,
        public Sv: number,
    ) {}
}
