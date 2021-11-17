import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
import { Input } from "react-native-elements";

import bgImage from "../assets/images/punch.jpg"
// import bgImage  = require('../assets/images/DiorxAirJordan.jpg');
 const {width: WIDTH} = Dimensions.get("window")



const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <TouchableWithoutFeedback>
    <ImageBackground source={bgImage} style={styles.container}>
      {/* <View style={styles.InputContainer}>
        <Input
          style={styles.textInput}
          value={email}
          placeholder="Enter Email"
          placeholderTextColor={"yellow"}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
      </View> */}

      {/* <View style={styles.InputContainer}>
        <Input
          value={password}
          placeholder="Password"
          placeholderTextColor={"yellow"}
      
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
        />
      </View> */}
      <TouchableOpacity onPress={() =>navigation.navigate("Home")} style={{width:WIDTH-60,justifyContent:"center" ,  height:65,backgroundColor:"orange",borderRadius:20}}> 
        <Text style={{color:"#fff",fontSize:30,textAlign:"center",}}>Login</Text>
      </TouchableOpacity>

      {/* <Button title="Login" onPress={() =>navigation.navigate("Home")} /> */}
    
    
      
      <View style={{ height: 10 }} />
      
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"#00FFFF",
  },
  text: {
    fontSize: 30,
  },
  InputContainer: {
    width: 310,
  },
});
