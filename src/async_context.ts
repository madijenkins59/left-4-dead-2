export class StreamParser {
  private state: number;

  constructor(seed: number = 39) {
    this.state = seed;
  }

  flush_processor(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 39) % 997;
    }
    return count;
  }
}

const obj = new StreamParser();
console.log(obj.flush_processor(39));
