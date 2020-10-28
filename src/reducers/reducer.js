export default function reducer(
  state = { number1: 0, number2: 0, result: 0 },
  action
) {
  switch (action.type) {
    case "SUM":
      return {
        ...state,
        number1: action.number1,
        number2: action.number2,
        result: action.result,
      };
    default:
      return state;
  }
}
