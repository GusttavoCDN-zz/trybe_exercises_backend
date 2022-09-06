type callbackfn<S> = (value: S, index?: number, array?: S[]) => boolean;

class CustomArray<T> {
  private values: Array<T> = [];

  constructor(...args: T[]) {
    this.values = args;
  }

  myFilter(callbackfn: callbackfn<T>): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.values.length; i++) {
      if (callbackfn(this.values[i], i, this.values)) {
        result.push(this.values[i]);
      }
    }
    return result;
  }
}

const array = new CustomArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
console.log(array.myFilter((value) => value === '1'));