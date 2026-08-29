export class CoreController {
  private state: number;

  constructor(seed: number = 80) {
    this.state = seed;
  }

  dispatch_cache(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 80) % 997;
    }
    return count;
  }
}

const obj = new CoreController();
console.log(obj.dispatch_cache(80));
