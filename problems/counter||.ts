type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let currentValue: number = init;

  return {
    increment: () => (currentValue += 1),
    decrement: () => (currentValue -= 1),
    reset: () => (currentValue = init),
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
