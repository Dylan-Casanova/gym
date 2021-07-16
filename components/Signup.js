import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"; 



function SignUp({navigation}){
  return(
    <View
    style={{
      flex: 1,
      justifyContent: "center",
        padding:"5%",
      backgroundColor:'#164eb6'
      
    }}>
    
    <Text style={styles.auth}>SignUp Baby!! 🖊️</Text>
    <Text style={styles.signUp}> Full Name </Text>
    <TextInput
    style={styles.input} placeholder="Enter your Name" 
    />
    <Text style={styles.signUp}> Email</Text>
    <TextInput
    style={styles.input} placeholder="Enter your Email" 
    />
    <Text style={styles.signUp}> Password</Text>
     <TextInput
    style={styles.input} placeholder="Confirm your Password" secureTextEntry/>
    <Text style={styles.signUp}> Confirm your Password</Text>
     <TextInput
    style={styles.input} placeholder="Enter your Password" secureTextEntry/>

    <View style={styles.btnContainer}>
      <TouchableOpacity
      style={styles.btnUser} onPress={() => alert('Registration Successful')}>
        <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.signUp}>Already have an account?</Text>
        <TouchableOpacity style={styles.btnUser2} onPress={() => navigation.navigate('History')}>
          <Text style={styles.btnTxt2}> Login</Text>
        </TouchableOpacity>
    </View>

  </View>
  )
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
    fontSize:24,
  },
  signUp:{
    
    color:'white',
    textAlign:'left',
    paddingBottom:'1%'
    
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
    width:'43%',
    marginBottom:"3%"
    
  },
  btnUser2:{
    backgroundColor:"#899494",
    padding:10,
    width:'43%',
    marginBottom:"3%",  
    
    
  },
  btnTxt:{
    fontSize:18,
    textAlign:'center'
  },
  btnTxt2:{
    fontSize:18,
    textAlign:'center',
    color:"#ffad33"
  },
  btnContainer:{
    paddingTop:'2%',
    flexDirection:'column',
    justifyContent:'space-between',
    width:'90%'

  },
});

  export default SignUp;