import React,{Component} from "react";
import {Text,View,StyleSheet,SafeAreaView,Platform,StatusBar,TouchableOpacity,ImageBackground,Image} from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}> 
           <SafeAreaView style={styles.androidSafeArea}/>
           <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}>
           <View style={styles.titleBar}>
            <Text style={styles.titleText}>
                ISS Space Tracker
            </Text>
           </View>
           <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("IssLocationScreen")}>
            <Text style={styles.routeText}>
                ISS Location
            </Text>
            <Text style={styles.knowMore}>
           {" know More-->"}
            </Text>
            <Text style={styles.bgDigit}>
                1
            </Text>
            <Image style={styles.iconImage} source={require('../assets/iss_icon.png')}>
            </Image>
           </TouchableOpacity>
           <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("MeteorScreen")}>
            <Text style={styles.routeText}>
                Meteor
            </Text>
            <Text style={styles.knowMore}>
           {" know More-->"}
            </Text>
            <Text style={styles.bgDigit}>
                2
            </Text>
            <Image style={styles.iconImage} source={require('../assets/meteor_icon.png')}>

            </Image>
           </TouchableOpacity>
           </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    androidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:!5
    },
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:"absolute",
     height:200,
     width:200,
     resizeMode:"contain",
     right:20,
     top:-80
    }



})




