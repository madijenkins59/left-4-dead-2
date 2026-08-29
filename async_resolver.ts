export class DynamicFactory {
  private state: number;

  constructor(seed: number = 85) {
    this.state = seed;
  }

  parse_handler(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 85) % 997;
    }
    return total;
  }
}

const obj = new DynamicFactory();
console.log(obj.parse_handler(85));
