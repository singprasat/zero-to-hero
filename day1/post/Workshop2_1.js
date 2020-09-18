
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
 } from 'react-native';  
import Constants from 'expo-constants';
import Header from './Header';
import * as data from './data.json'



export default class Workshop2_1 extends Component { 
  constructor(props){
     super(props)
  } 

  renderItem=({item})=>{
    return(
        <View style={styles.renderItemContainer}>
            <Image style={styles.image} source={{uri:item.url}}/>
            <View style={{
                    paddingLeft:8,
                    paddingRight:8,
                    flex:1
                    }}>
                        
                <Text style={{
                        fontSize:20,
                        fontWeight:"bold"}}>
                    {item.name}
                </Text>

                <Text style={{
                    fontSize:16
                }}>
                    {item.description}
                </Text>
            </View>
        </View>
    );
  }

  renderSeparator=()=>{
    return (
        <View
          style={{
            height: 1,
            backgroundColor: "#dddddd",
          }}
        />
    );
  }

  render(){
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={data.car}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}/>
            
        </View>
    );
  }
} 
const styles = StyleSheet.create({
   container:{
        flex: 1,
   },
   subContainer:{
        backgroundColor:'white',
        flex:1
   },
   image:{
       width:100,
       height:100,
       borderRadius:50,
       borderColor:"gray",
       borderWidth:1
   },
   renderItemContainer:{
       flexDirection:"row",
       padding: 8
   }
  });