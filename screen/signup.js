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
import database from '@react-native-firebase/database';

export default function Signup({navigation}) {
  const [model, setModel] = useState({});
  //   console.log(model);
  let signupuser = () => {
    auth()
      .createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res);
        // console.log(res.user.uid);
        database()
          .ref(`users/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('Todo', res.user.uid);
            setTimeout(() => {
              ToastAndroid.show('Account Created Successfully', 3000);
            }, 1500);
          })
          .catch(dbError => {
            console.log(dbError);
          });
      })
      .catch(err => {
        console.log(err);
        setTimeout(() => {
          ToastAndroid.show('your already signup', 3000);
        }, 1500);
      });
  };
  return (
    <View>
      <View style={GlobalStyle.Signup}>
        <Text style={{fontSize: 25, marginTop: 100, fontWeight: 'bold'}}>
          Welcome
        </Text>
        <Text style={{fontSize: 20, marginBottom: 40, fontWeight: 'bold'}}>
          Create an account
        </Text>
        <View style={GlobalStyle.SignupView}>
          <TextInput
            style={GlobalStyle.SignupInput}
            onChangeText={e => setModel({...model, userName: e})}
            placeholder="UserName*"
          />
        </View>
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
          onPress={() => signupuser()}>
          <Text style={{color: 'white', fontSize: 17}}>Signup </Text>
        </TouchableOpacity>

        <View style={{marginVertical: 10, flexDirection: 'row', marginTop: 20}}>
          <Text>You have Already account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{color: '#07ABF1'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
