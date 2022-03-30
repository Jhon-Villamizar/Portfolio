// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reducer = (
  state: any,
  action: { type: string; menu: boolean; theme: boolean },
) => {
  switch (action.type) {
    case 'setFirstName':
      return { ...state, firstName: action.menu };
    case 'setFamilyName':
      return { ...state, familyName: action.theme };
    default:
      throw new Error('unexpected action type');
  }
};

export default reducer;
