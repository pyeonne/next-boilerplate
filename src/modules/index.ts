import { createContext } from "react";
import CounterRepo from "./counter/counterRepo";
import CounterService from "./counter/counterService";

export class GlobalStore {
    counterRepo = new CounterRepo();
    counterService = new CounterService(this.counterRepo);
}

const instance = new GlobalStore();
const Context = createContext<GlobalStore>(instance);
export default Context;
export { instance };