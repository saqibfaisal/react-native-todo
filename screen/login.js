import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalStyle} from './global';
import auth from '@react-native-firebase/auth';
function Login({navigation}) {
  let [model, setModel] = useState({});
  let loginUser = () => {
    auth()
      .signInWithEmailAndPassword(model.email, model.password)
      .then(res => {
        // console.log(res.user.uid);
        setTimeout(() => {
          ToastAndroid.show('Successfully login', 3000);
        }, 1500);
        navigation.navigate('Todo');
      })
      .catch(err => {
        setTimeout(() => {
          ToastAndroid.show('login failed', 3000);
        }, 1500);
        console.log(err);
      });
  };
  return (
    <View>
      <View style={GlobalStyle.Signup}>
        <Text style={{fontSize: 25, marginTop: 100, fontWeight: 'bold'}}>
          Welcome Back
        </Text>
        <Text style={{fontSize: 20, marginBottom: 40, fontWeight: 'bold'}}>
          Please Login to your account
        </Text>
        <View style={GlobalStyle.SignupView}>
          <TextInput
            style={GlobalStyle.SignupInput}
            onChangeText={e => setModel({...model, email: e})}
            placeholder="Email*"
          />
        </View>
        <View style={GlobalStyle.SignupView}>
          <TextInput
            style={GlobalStyle.SignupInput}
            onChangeText={e => setModel({...model, password: e})}
            placeholder="Password*"
          />
        </View>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginRight: 40,
            marginVertical: 15,
            color: '#07ABF1',
          }}>
          Forgot Password ?
        </Text>
        <TouchableOpacity
          style={GlobalStyle.Button}
          onPress={() => loginUser()}>
          <Text style={{color: 'white', fontSize: 20}}>Login </Text>
        </TouchableOpacity>

        <View style={{marginVertical: 10, flexDirection: 'row', marginTop: 20}}>
          <Text>Don't Have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#07ABF1'}}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Login;
