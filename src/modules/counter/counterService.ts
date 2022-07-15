import { action, makeAutoObservable } from 'mobx';
import { GlobalStore } from '../index';
import Counter from './counter';
import CounterRepo from './counterRepo';

class CounterService {
  counterRepo;

  constructor(counterRepo: CounterRepo) {
    this.counterRepo = counterRepo;
  }

  addCount() {
    const counter = this.counterRepo.get();
    counter?.plus();
  }

  minusCount() {
    const counter = this.counterRepo.get();
    counter?.minus();
  }

  get count() {
    return this.counterRepo.get()?.value;
  }
}

export default CounterService;
