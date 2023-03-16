export const rowMain = () => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  // paddingHorizontal: 20,
  paddingVertical: 5,
  marginVertical: 20,
  // backgroundColor: 'red',
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
});
export const mainContainer = () => ({
  padding: 30,
  flex: 1,
});
export const secMain = () => ({
  marginTop: 30,
});
export const innerTxt = isSecond => ({
  position: 'absolute',
  justifyContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  top: isSecond ? 72 : 60,
  left: 60,
  color: 'black',
  width: 70,
  textAlign: 'center',
});
export const titleStyle = () => ({
  color: 'res',
  fontSize: 30,
  textAlign: 'center',
  marginTop: 20,
});
export const buttonStyle = isDark => ({
  backgroundColor: isDark ? 'rgba(13, 13, 13,0.7)' : 'rgba(13, 13, 13,0.3)',
  padding: 20,
  borderRadius: 30,
});
export const infoText = isNoSpace => ({
  color: 'black',
  marginTop: isNoSpace ? 0 : 10,
});
