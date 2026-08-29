export class RemoteHandler {
  private state: number;

  constructor(seed: number = 67) {
    this.state = seed;
  }

  run_worker(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 67) % 997;
    }
    return value;
  }
}

const obj = new RemoteHandler();
console.log(obj.run_worker(67));
