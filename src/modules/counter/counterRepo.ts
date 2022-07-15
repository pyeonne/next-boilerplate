import { GlobalStore } from '../index';
import Counter from './counter';

class CounterRepo {
  private counter?: Counter = new Counter();

  public get() {
    return this.counter;
  }

  public save(counter: Counter) {
    this.counter = counter;
  }

  public remove() {
    this.counter = undefined;
  }
}

export default CounterRepo;
