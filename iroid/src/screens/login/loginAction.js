import {updateUserName,updateToken,updateIsLoading } from "./loginReducer";
import axios from "axios";
import { Alert } from "react-native/types";

export const userLogin = (userName, password) => dispatch => {
    console.log("login attempt");
    dispatch(updateIsLoading(true));
    // var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('email', userName);
    data.append('password', password);
    data.append('lang_id', 'en');
    data.append('device_token', 'sss');

    // var config = {                                                   //this part is actual code for requesting https post request for login
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: 'http://proteinium.iroidtechnologies.in/api/v1/login',
    //     headers: {
    //         // ...data.getHeaders()
    //     },
    //     data: data
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
        // if(response.data.status){
        //     dispatch(updateIsLoading(false));
        //     dispatch(updateUserName(userName));
        //     dispatch(updateToken("124852"));                                     //some token returned as response
        // }
        // else{
        //     Alert.alert(response.data.message)
        // }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });



    axios.post('https://reqres.in/api/users',{           //using an https mock api since http req returns network error, the actual https code is given above
        "name": "morpheus",
        "job": "leader"
    })
    .then(function (response) {
        console.log(response.data);
        if(response.status==201){
            dispatch(updateIsLoading(false));
            dispatch(updateUserName(userName));
            dispatch(updateToken("124852")); 
        }else{
            //Alert.alert(response.data.message)            //alert an error message
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    
}