export default class Rafy {
  private running: boolean;
  private requestId: number;
  private fns: Function[];

  constructor() {
    this.running = false;
    this.requestId = 0;
    this.fns = [];
  }

  public add(fn: Function): boolean {
    if (typeof fn === 'function') {
      if (this.fns.indexOf(fn) >= 0) {
        return false;
      }

      this.fns.push(fn);

      return true;
    }

    return false;
  }

  public remove(fn: Function): void {
    const idx = this.fns.indexOf(fn);

    if (idx >= 0) {
      this.fns.splice(idx, 1);
    }

    if (this.fns.length <= 0) {
      this.stop();
    }
  }

  public start(): void {
    if (this.running) {
      return;
    }

    this.running = true;
    this.requestId = window.requestAnimationFrame(this.update);
  }

  public stop(): void {
    window.cancelAnimationFrame(this.requestId);
    this.running = false;
  }

  private update = (delta: number): void => {
    let len = this.fns.length;

    while (len--) {
      const fn = this.fns[len];

      if (fn) {
        this.fns[len](delta);
      }
    }

    if (this.running) {
      this.requestId = window.requestAnimationFrame(this.update);
    }
  };
}
