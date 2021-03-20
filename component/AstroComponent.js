import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';

const Separator = () => (
    <View style={styles.separator} />
  );

class AstroForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            </ScrollView>);
    }
}

export default (AstroForm);