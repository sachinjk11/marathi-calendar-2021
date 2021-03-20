import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import fast from '../../../data/fast.json';
import { BannerAd } from '../../bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class FullWForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        
        const renderItem = ({item, index}) => {
            return(
                <View>
                <Card
                    title={item.name}
                    containerStyle={{borderColor:'red'}}
                >
                <Text style={{margin: 5, textAlign: 'justify'}}> {item.start}</Text>
                <Text style={{margin: 5, textAlign: 'justify'}}> {item.end}</Text>
                <Text style={{margin: 2, textAlign: 'justify'}}> {'\t \t '+item.info}</Text>
                <Text style={{margin: 2, textAlign: 'justify'}}> {'\t \t '+item.importance}</Text>

                </Card>
                </View>
            );
        }

        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}>
                 <BannerAd/>
               <FlatList  
                        data={fast.pornima}
                        renderItem={renderItem}
                /> 
                 <BannerAd/>
            </ScrollView>);
    }
}

export default (FullWForm);