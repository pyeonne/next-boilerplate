import { action, makeAutoObservable, observable } from "mobx";

class Counter {
    private _value: number;

    constructor() {
        makeAutoObservable(this);
        this._value = 0;
    }

    get value() {
        return this._value;
    }

    plus(num?: number) {
        this._value += num ?? 1;
    }

    minus(num?: number) {
        this._value -= num ?? 1;
    }
}

export default Counter;