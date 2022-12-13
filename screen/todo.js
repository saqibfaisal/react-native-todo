import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, ToastAndroid, RefreshControl } from "react-native";
import database from '@react-native-firebase/database'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { GlobalStyle } from './global';
function Todo({ navigation, route }) {
  let [txt, setTxt] = useState('')
  let [list, setList] = useState([])
  let [indexNum, setIndexNum] = useState()
  let [isLoading, setLoading] = useState(false)

  let add = () => {
    if (!txt) {
      setTimeout(() => {
        ToastAndroid.show('Please Enter the Todo', 2000);
      }, 1500);
      return
    }
    if (indexNum > -1) {
      list[indexNum] = {
        text: txt,
        time: JSON.stringify(new Date())
      }
      setList([...list])
      setIndexNum(null)
      setTxt('')
    }
    else {
      setList([...list,
      {
        text: txt,
        time: JSON.stringify(new Date())
      }
      ])
      setTimeout(() => {
        ToastAndroid.show('Add your Todo', 2000);
      }, 1500);
      database()
        .ref(`todo`)
        .set(list)
        .then(() => {
          setTimeout(() => {
            ToastAndroid.show('Add your Todo', 2000);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        })
      setTxt('')
    }
  }

  let deleteAll = () => {
    setList([])
    setTxt('')
  }


  let handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show("Refreshed Successfully", 2000);
    }, 1500);
  };
  let edit = (e, i) => {
    setIndexNum(i)
    let obj = list[i]
    setTxt(obj.text)
  }

  let del = (e, i) => {
    console.log(i)
    list.splice(i, 1)
    setList([...list])
  }
  return (
    <>
      <ImageBackground source={{ uri: 'https://wallpaperaccess.com/full/334698.jpg' }} >
        <View style={GlobalStyle.container}>
          <View style={{ flexDirection: 'row', marginVertical: 20, }}>
            <TextInput value={txt} style={GlobalStyle.inputField} placeholderTextColor={'white'} placeholder="Enter Text" onChangeText={(e) => setTxt(e)}></TextInput>
            <TouchableOpacity onPress={add} style={[GlobalStyle.addBtn]} >
              <Icon name="add" size={30} color="black" />
            </TouchableOpacity>
          </View>

          {list && list.length > 0 ?
            <TouchableOpacity style={[GlobalStyle.deleteAllBtn, {
              backgroundColor: 'rgba(81, 62, 72, 0.8)', width: "30%", marginLeft: 120, justifyContent: 'center', alignItems: "center", borderRadius: 10, padding: 10
            }]} onPress={deleteAll}><Text style={{ color: 'white', textAlign: 'center' }}>Delete All</Text></TouchableOpacity>
            : ""
          }
          {list && list.length > 0 ? <Text style={GlobalStyle.countOrNoCount}>{`Total Todo: ${list.length}`}</Text> : <Text style={GlobalStyle.countOrNoCount}>No Todos Available plz enter the todo</Text>}

          <ScrollView refreshControl={<RefreshControl  onRefresh={handleRefresh} refreshing={isLoading}/>} style={{ marginBottom: 60 }}>
            {list && list.map((e, i) => (
              <>
                <View key={i} style={[GlobalStyle.todoListView]}>
                  <Text style={GlobalStyle.todoText} key={i}>{e.text}</Text>

                  <TouchableOpacity onPress={() => edit(e, i)} style={{ width: '10%' }} key={i} >
                    <Icon name="edit" size={30} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => del(e, i)} style={{ width: '10%' }} key={i}>
                    <Icon name="delete" size={30} color="black" />
                  </TouchableOpacity>
                </View>
              </>)
            )}
          </ScrollView>
        </View>

      </ImageBackground>
    </>
  )
}

export default Todo