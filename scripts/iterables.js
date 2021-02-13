/* interface Iterable {
 *    [Symbol.iterator] // funkcja
 * }
 *
 * interface Iterator {
 *    next() // funkcja zwracająca IteratorResult
 * }
 *
 * interface IteratorResult {
 *    value: // dowolna wartość
 *    done: boolean
 * }
 *
 *
 **/

const iterable1 = {
  items: [5, 6, 7],
  a: 1,
  b: 2,
  c: 4,
  [Symbol.iterator]() {
    const items = this.items;
    let index = 0;

    return {
      next() {
        return {
          value: items[index++],
          done: index > items.length,
        };
      },
    };
  },
};

for (let item of iterable1) {
  console.log(item);
}

const iterable2 = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: Math.random(),
          done: Math.random() > 0.9,
        };
      },
    };
  },
};

for (let item of iterable2) {
  console.log(item);
}

console.clear();

const iterable3 = {
  [Symbol.iterator]() {
    let index = 0;

    return {
      next() {
        return {
          value: Math.trunc(Math.random() * 10),
          done: index++ > 10,
        };
      },
    };
  },
};

for (let item of iterable3) {
  console.log(item);
}

const iterable4 = {
  [Symbol.iterator]() {
    let index = 0;
    return {
      next() {
        return {
          value: index++,
        };
      },
    };
  },
};

console.clear();

for (const n of iterable4) {
  if (n > 3) break;
  console.log(n);
}
