
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image
 } from 'react-native';  
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Show5 extends Component { 
  constructor(props){
     super(props)
  } 

  render(){
    return(
        <ImageBackground 
            style={styles.background}
            source={{uri:'https://sv1.picz.in.th/images/2020/07/28/EYFj0b.jpg'}}>
            <View style={styles.container}>
                <View style={styles.login}>
                    <Image
                        style={styles.image}
                        source={{uri:'https://sv1.picz.in.th/images/2020/07/28/Ez0iOl.png'}}/>
                    
                    <View style={styles.viewTextInput}>
                        <TextInput 
                            placeholder="UserName" 
                            style={styles.textInput}/>
                    </View>

                    <View style={styles.viewTextInput}>
                        <TextInput 
                            placeholder="YourName" 
                            style={styles.textInput}/>
                    </View>

                    <View style={styles.viewTextInput}>
                        <TextInput 
                            placeholder="Email" 
                            style={styles.textInput}/>
                    </View>

                    <View style={styles.viewTextInput}>
                            <TextInput 
                                placeholder="Password" 
                                style={styles.textInput}
                                secureTextEntry={true}/>
                    
                    </View>

                    <View style={styles.viewTextInput}>
                            <TextInput 
                                placeholder="Confirm Password" 
                                style={styles.textInput}
                                secureTextEntry={true}/>
                    
                    </View>

                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={{fontSize:15}}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={{fontSize:15}}>Cancel</Text>
                    </TouchableOpacity>


            </View>
            </View>
        </ImageBackground>
    );
  }
} 
const styles = StyleSheet.create({
    background:{
        flex:1
    },
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:"center",
    },
    login:{
        paddingTop:20,
        paddingBottom:30,
        marginLeft:25,
        marginRight:25,
        marginBottom:25,
        backgroundColor:'white',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode:'contain',
        marginLeft:20,
        marginBottom:10
      },
      viewTextInput:{
        flexDirection:"row",
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        paddingStart:8,
        alignItems:"center",
        borderRadius:25
    },
    textInput:{
        borderRadius:25,
        height: 50, 
        paddingStart:8
    },
    buttonLogin: {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        height: 50,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        borderRadius:25
      },
    
    image: {
        width: 80,
        height: 80,
        resizeMode:'contain',
        marginLeft:20,
        marginBottom:10
      },
      buttonRegister: {
        alignItems: "flex-end",
      }
  });