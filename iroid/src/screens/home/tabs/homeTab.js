import React from 'react';
import { View,FlatList,Image, Alert,SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Text, IconButton } from 'react-native-paper';

const DATA = [
    {
      id: '001',
      description:"Weight Loss",
      banner:'https://picsum.photos/700'
    },
    {
      id: '002',
      description:"Weight gain",
      banner:'https://picsum.photos/700'
    },
    {
      id: '003',
      description:"Weight Loss",
      banner:'https://picsum.photos/700'
    },
    {
        id: '004',
        description:"Weight gain",
        banner:'https://picsum.photos/700'
    },
  ];
export const HomeTab = ()=>{


    const CardView = ({uri,description}) => (
        <Card mode='elevated'style={{paddingHorizontal:15,paddingTop:15}} onPress={()=>Alert.alert("Do banner Touch Action")}>
          <Card.Cover source={{ uri: uri }} />
            <Card.Content>
                <Text variant="bodyMedium">{description}</Text>
            </Card.Content>
          <Card.Actions style={{height:5,backgroundColor:"#ffffff00"}}>
                <IconButton
                    icon="chevron-up"
                    iconColor="#3BB0EC"
                    size={20}
                    style={{backgroundColor:"#ffffff",borderColor:"#dcdcdc"}}
                    onPress={() => Alert.alert("do some actions")}
                />
          </Card.Actions>
        </Card>
      );
      
    return(<SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <CardView uri={item.banner} description={item.description}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>)
}
