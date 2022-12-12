import {StyleSheet} from 'react-native';
// import Signup from './screens/signup';
export const GlobalStyle = StyleSheet.create({
  SearchInput: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  mainScreen: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  mainIcon: {
    width: '10%',
  },
  Signup: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  SignupView: {
    width: '80%',
    borderRadius: 20,
    elevation: 12,
    shadowColor: 'grey',
    overflow: 'hidden',
    backgroundColor: 'white',
    marginVertical: 15,
  },
  SignupInput: {
    padding: 8,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  Button: {
    backgroundColor: '#07ABF1',
    borderRadius: 20,
    padding: 12,
    paddingHorizontal: 40,
    marginVertical: 15,
    alignItems: 'center',
  },
  Todo: {
    width: '100%',
    // height: '100%',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
    // margin: 18,
    // paddingVertical: 10,
    // padding: "10px  0px",
    // borderWidth: 1,
    // borderColor: 'white',
  },
  TodoText: {
    // padding: 30,
    fontSize: 18,
    fontWeight: 400,
    color: 'black',
  },
});
