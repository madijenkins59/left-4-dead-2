export class HybridBuilder {
  private state: number;

  constructor(seed: number = 6) {
    this.state = seed;
  }

  fetch_dispatcher(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 6) % 997;
    }
    return acc;
  }
}

const obj = new HybridBuilder();
console.log(obj.fetch_dispatcher(6));
