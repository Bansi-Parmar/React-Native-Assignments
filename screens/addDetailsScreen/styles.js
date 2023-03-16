export const rowMain = () => ({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // paddingHorizontal: 20,
  paddingVertical: 5,
});
export const CheckText = () => ({position: 'absolute', left: 7});
export const taskText = () => ({
  marginHorizontal: 10,
  color: 'black',
});
export const checkBox = () => ({borderWidth: 2, height: 20, width: 20});
export const headingText = () => ({
  fontSize: 35,
  fontWeight: '600',
  color: 'black',
  marginBottom: 20,
});
export const mainContainer = () => ({
  flex: 1,
  padding: 30,
  // backgroundColor: 'rgba(254, 76, 87,0.2)',
});
export const secMain = () => ({
  marginTop: 30,
});
export const questionContainer = () => ({marginVertical: 10});
export const inputText = () => ({
  borderWidth: 1,
  borderRadius: 30,
  paddingLeft: 20,
  color: 'black',
});
export const titleText = isNoSpace => ({
  color: isNoSpace ? 'white' : 'black',
  marginBottom: isNoSpace ? 0 : 10,
  marginLeft: 5,
});
export const btnContainer = () => ({
  alignItems: 'center',
  backgroundColor: 'black',
  padding: 20,
  borderRadius: 30,
  marginTop: 20,
});
