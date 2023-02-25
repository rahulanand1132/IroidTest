import React, { useState } from 'react';
import { View,Dimensions,StyleSheet, Alert } from 'react-native';
import { Appbar,BottomNavigation ,ActivityIndicator} from 'react-native-paper';

import { HomeTab } from './tabs/homeTab';
import { MealsTab } from './tabs/mealsTab';
import { ProfileTab } from './tabs/profileTab';
import { MoreTab } from './tabs/moreTab';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetchHomeData } from './homeAction';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const {isLoading}=useSelector(state => state.home);
    useFocusEffect(React.useCallback(()=>{
        dispatch(fetchHomeData());
    },[]))
    console.log("isloading :",isLoading)
    const BottomNavigator = () => {
        const [index, setIndex] = useState(0);
        const [routes] = useState([
            { key: 'home', title: 'Home', focusedIcon: 'home-variant-outline' },
            { key: 'meals', title: 'Meals', focusedIcon: 'calendar-blank-outline' },
            { key: 'profile', title: 'Profile', focusedIcon: 'account-outline' },
            { key: 'more', title: 'More', focusedIcon: 'dots-horizontal'},
        ]);
    
        const renderScene = BottomNavigation.SceneMap({
            home: HomeTab,
            meals: MealsTab,
            profile: ProfileTab,
            more: MoreTab,
        });
    
        return (
            <BottomNavigation
                activeColor='#3BB0EC'
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        );
    };


    const AppBar = () => (
        <Appbar.Header style={Styles.appBarheader}>
            <Appbar.Content title="IROID" style={Styles.appBarTitleContainer} titleStyle={Styles.appBarTitle} />
            <Appbar.Action icon="bell" color='#ffffff' onPress={() => Alert.alert("Show some notification")} />
        </Appbar.Header>
    );


    return(<View style={Styles.container}>
        {isLoading?<ActivityIndicator style={Styles.loader} size="large" />:null}
        <AppBar/>
        <View style={Styles.bottomNavigator}>
            <BottomNavigator/>
        </View>
        
    </View>)
}

export default HomeScreen;

const Styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    bottomNavigator:{
        width:"100%",
        height:Dimensions.get('window').height-70,
        backgroundColor:"#aaaaaa"
    },
    appBarheader:{ 
        backgroundColor: "#3BB0EC",
        width:"100%",
        height:70 
    },
    appBarTitleContainer:{ 
        marginLeft: 50, 
        alignSelf: "center", 
        alignItems: "center", 
        height: 30 
    },
    appBarTitle:{ 
        fontWeight: 'bold',
        fontSize: 30,
        padding: 5,
        color: "#ffffff"
    },
    loader:{
        position:"absolute",
        alignSelf:"center",
        top:"50%",
        zIndex:1000
    },
})