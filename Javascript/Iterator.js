//Iterator is a object which defines a sequence and potentially a return value upon its termination
//concept directly core language and provide a mechanism for customizing the behaviour for for--loop
//always next next value
//send done value when they complete
//generators: Provide powerful alternative : they allow you to define an iterative algo by writing a single function whose execution was not continous.
//generator functions are writtern using function * syntax.
//generator functions executes until it encounters yield keyword..
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;
  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
