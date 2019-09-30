global.console.error = jest.fn();

expect.extend({
  /**
   * @param {*} received
   * @param {string|string[]} arg
   * @return {{pass:boolean,message:(function():string)}}
   */
  toBeType(received, arg) {
    const isCorrectType = () => {
      const receivedType = typeof received;

      const getType = () => {
        if (receivedType === 'object')
          return Array.isArray(received)
            ? 'array'
            : receivedType;

        return receivedType;
      };

      const checkForSingle = item =>
        getType() === item;

      const checkForArr = item => {
        const reducer = (prev, curr) =>
          prev
            || isCorrectType(curr).isCorrect;

        return item.reduce(reducer, false);
      };

      return {
        receivedType,
        isCorrect: Array.isArray(arg)
          ? checkForArr(arg)
          : checkForSingle(arg),
      };
    };

    const { isCorrect, receivedType } = isCorrectType();

    return {
      pass: isCorrect,
      message: () => {
        const toBe = Array.isArray(arg)
          ? arg.join('\' or \'')
          : arg;

        return `Expected '${received}' of '${receivedType}' type to be of '${toBe}' type(s)`;
      },
    };
  },
});
