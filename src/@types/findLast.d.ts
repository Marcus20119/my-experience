// Extend the Array interface to include findLast
interface Array<T> {
  findLast(
    predicate: (value: T, index: number, obj: T[]) => boolean,
  ): T | undefined;
}

// Implement findLast on Array.prototype
if (!Array.prototype.findLast) {
  Array.prototype.findLast = function <T>(
    this: T[],
    predicate: (value: T, index: number, obj: T[]) => boolean,
  ): T | undefined {
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
}
