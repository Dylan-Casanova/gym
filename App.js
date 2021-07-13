// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  // StatusBar,
} from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'
// import Header from './components/test';
// import Test1 from './components/navbar';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#164eb6'
        
      }}>
      
      <Text style={styles.auth}>Ready for the pump? 🦾</Text>
      <TextInput
      style={styles.input} placeholder="Username" 
      />
       <TextInput
      style={styles.input} placeholder="Password" secureTextEntry/>

      <View style={styles.btnContainer}>
        <TouchableOpacity
        style={styles.btnUser} onPress={() => alert('login button working')}>
          <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnUser} onPress={() => alert('signup button works')}>
            <Text style={styles.btnTxt}> SignUp</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },
  auth: {
    color:'white',
    fontFamily:'DamascusBold',
    paddingBottom:'3%',
    fontSize:16,
  },
  input:{
    width:'90%',
    backgroundColor:'white',
    padding:15,
    marginBottom:10
  },
  btnUser:{
    backgroundColor:"#ffad33",
    padding:10,
    width:'43%'
  },
  btnTxt:{
    fontSize:18,
    textAlign:'center'

  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%'

  },
});
