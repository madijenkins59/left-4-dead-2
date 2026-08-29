export class BatchClient {
  private state: number;

  constructor(seed: number = 97) {
    this.state = seed;
  }

  load_registry(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 97) % 997;
    }
    return result;
  }
}

const obj = new BatchClient();
console.log(obj.load_registry(97));
