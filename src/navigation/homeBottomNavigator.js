import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { HomeTab } from '../screens/home/tabs/homeTab';
import { MealsTab } from '../screens/home/tabs/mealsTab';
import { ProfileTab } from '../screens/home/tabs/profileTab';
import { MoreTab } from '../screens/home/tabs/moreTab';

const BottomNavigator = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', focusedIcon: 'home-variant-outline' },
        { key: 'meals', title: 'Meals', focusedIcon: 'calendar-blank-outline' },
        { key: 'profile', title: 'Profile', focusedIcon: 'account-outline' },
        { key: 'notifications', title: 'More', focusedIcon: 'dots-horizontal'},
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

export default BottomNavigator;