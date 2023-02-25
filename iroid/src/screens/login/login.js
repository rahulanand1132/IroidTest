import React, { useState,useEffect } from 'react';
import { Alert, StyleSheet, Text, View,Image } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { TextInput, Button, ActivityIndicator } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { userLogin } from './loginAction';


const LoginScreen = ({navigation})=>{
    const dispatch = useDispatch();
    const {isLoading,token}=useSelector(state => state.login);

    const [name,setName]=useState("");
    const [psw,setPsw]=useState("");
    const [splash,showSplash]=useState(false);

    useFocusEffect(React.useCallback(()=>{
        if(token){
            navigation.navigate("Home Screen")
        }
        console.log("token :",token)
    },[token]))

    useEffect(()=>{
        showSplash(true)
        setTimeout(()=>showSplash(false),1000);
    },[])

    const SplashScreen = () => (<View style={Styles.splashContainer}>
        <Text style={Styles.splashText}>IROID</Text>
        <Image source={require('./Background-icons.png')} />
    </View>)
    return (
        <View style={Styles.container}>
            {splash?<SplashScreen/>:null}
            {isLoading?<ActivityIndicator style={Styles.loader} size="large" />:null}
            <Button style={Styles.skipButton} labelStyle={{fontWeight:'bold'}} textColor='#000000'  onPress={()=>(Alert.alert("Do skip Action"))}>Skip</Button>
            <Text style={Styles.title}>
                Sign In
            </Text>
            <Text style={Styles.subtitle}>
                Enter Your Details
            </Text>
            <View style={Styles.inputContainer}>
                <TextInput
                    outlineColor='#aaaaaa00'
                    mode='outlined'
                    contentStyle={Styles.inputContentStyle}
                    outlineStyle={Styles.inputOutlineStyle}
                    style={Styles.input}
                    placeholder="User Name"
                    value={name}
                    onChangeText={setName} />
                <TextInput
                    outlineColor='#aaaaaa00'
                    mode='outlined'
                    contentStyle={Styles.inputContentStyle}
                    outlineStyle={Styles.inputOutlineStyle}
                    style={Styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={psw}
                    onChangeText={setPsw}/>
                <Button labelStyle={{padding:5}} mode='outlined' style={Styles.button} textColor='#ffffff' buttonColor='#3CB0ED' onPress={()=>{console.log("Sign In pressed");dispatch(userLogin(name,psw))}}>Sign In</Button>
                <Button compact={true} textColor='#000000'  onPress={()=>(Alert.alert("Go to account recovery page"))}>Forgot your password?</Button>
                <View style={Styles.bottomContainer}>
                    <Text style={{ fontWeight: '300', color: "#000000" }}>
                        Don't have an Account?
                    </Text>
                    <Button compact={true} textColor='#5fa7a3' onPress={()=>(Alert.alert("Go to sign up page"))}>Sign Up</Button>
                </View>
            </View>
        </View>
    );
}

const Styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
        color:"#000000",
        marginVertical:10
    },
    subtitle:{
        fontWeight:'300',
        color:"#000000",
        marginVertical:5,
        fontSize:16
    },
    inputContentStyle:{paddingLeft:30},
    inputOutlineStyle:{borderRadius:25},
    input:{
        height:50,
        backgroundColor:"#dcdcdc",
        marginVertical:7
    },
    button:{
        height:50,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 25,
        borderColor:"#00000000"
    },
    inputContainer: {
        width:"80%",
    },
    bottomContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    loader:{
        position:"absolute",
        alignSelf:"center",
        zIndex:1000
    },
    skipButton:{
        position:"absolute",
        top:10,
        right:10
    },
    splashContainer:{
        position: "absolute",
        flex: 1, 
        zIndex: 1000, 
        backgroundColor: "#ffffff"
    },
    splashText:{
        fontSize: 60, 
        fontWeight: "bold", 
        color: "#000000", 
        position: "absolute", 
        alignSelf: "center", 
        justifyContent: "center", 
        bottom: "50%"
    }
})

export default LoginScreen;