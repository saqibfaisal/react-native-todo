import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalStyle} from './global';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {useState} from 'react';
function Todo() {
  let [text, setText] = useState('');
  let [Todo, setTodo] = useState([]);
  let addTodo = e => {
    if (text) {
      setTodo([...Todo, text]);
      setText('');
      setTimeout(() => {
        ToastAndroid.show('Add your Todo', 2000);
      }, 1500);
    } else {
      setTimeout(() => {
        ToastAndroid.show('Please Enter the Todo', 2000);
      }, 1500);
    }

    // console.log(ssds);
  };
  return (
    <View style={GlobalStyle.mainScreen}>
      <View style={GlobalStyle.main}>
        <TextInput
          placeholder="Enter the Todo"
          placeholderTextColor="black"
          value={text}
          style={GlobalStyle.SearchInput}
          onChangeText={e => setText(e)}
        />
        <TouchableOpacity
          onPress={() => addTodo()}
          style={GlobalStyle.mainIcon}>
          <Icon name="add" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%'}}>
        {Todo &&
          Todo.map((e, i) => {
            return (
              <View key={i} style={GlobalStyle.Todo}>
                <Text style={GlobalStyle.TodoText}>{e}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
}
export default Todo;
