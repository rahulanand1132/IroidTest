import axios from "axios";
import { updateIsLoading,updateResponseData } from "./homeReducer"

export const fetchHomeData = () => dispatch => {
    dispatch(updateIsLoading(true));
    console.log("fetch home data")
    // var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
        'lang_id': 'en',
        'user_id': '357'
    });
    // var config = {
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: 'http://proteinium.iroidtechnologies.in/api/v1/get-mealcategories',
    //     headers: {},
    //     data: data
    // };

    // axios(config)
    //     .then(function (response) {
        //     dispatch(updateIsLoading(false));
        // if(response.status==201){                        
         //         console.log(JSON.parse(response.data));
            // dispatch(updateResponseData(JSON.parse(response.data))
        // }else{
        //     //Alert.alert(response.data.message)            
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
        console.log(response.data);                         //http://proteinium.iroidtechnologies.in/banner_images/6165313162cf3.jpg getting 404 error so i will be using random images
        if(response.status==201){                           //i cant get banner image or other images given in responce so im hardcoding data
            dispatch(updateIsLoading(false));
        }else{
            //Alert.alert(response.data.message)            //alert an error message
        }
    })
    .catch(function (error) {
        console.log(error);
    });

}