import ModelDescription from '../bestiary/model-description';
import { Profile } from '../bestiary/model-description';
export default class Model {
    private profile: DynamicProfile;

    constructor(public description: ModelDescription) {
        this.profile = new DynamicProfile(description.profile);
    }

    currentProfile(): DynamicProfile {
        return this.profile;
    }
}

export class DynamicProfile {
    public M = 0;
    public WS = 0;
    public BS = 0;
    public S = 0;
    public T = 0;
    public W = 0;
    public I = 0;
    public A = 0;
    public Ld = 0;
    public Sv = 0;

    constructor(profile: Profile) {
        this.M = profile.M;
        this.WS = profile.WS;
        this.BS = profile.BS;
        this.S = profile.S;
        this.T = profile.T;
        this.W = profile.W;
        this.I = profile.I;
        this.A = profile.A;
        this.Ld = profile.Ld;
        this.Sv = profile.Sv;
    }
}
