export class DynamicCollector {
  private state: number;

  constructor(seed: number = 92) {
    this.state = seed;
  }

  load_context(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 92) % 997;
    }
    return count;
  }
}

const obj = new DynamicCollector();
console.log(obj.load_context(92));
