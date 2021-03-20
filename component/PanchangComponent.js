import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import CalData from '../data/jan.json';
import { BannerAd } from './bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class DailyForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            Date : new Date(),
            months : [" जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
            weekDays : ["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
            nDaysItr : [0,31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            printDay : 0
        }
    }
    nextDay = () => {
        this.setState({printDay:(this.state.printDay-1)});
        this.printPanchang(this.state.printDay);
    }
    preDay = () => {
        this.state.activeDate.setMonth(this.state.activeDate.getMonth()-1);
        this.setState({calendar:this.calendarHtml()});
    }

    printPanchang(displayDay){
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}>
            <View style={styles.container}>
                <Text style={{fontSize:10}}>कृपया एखाद्या तारखेच पंचांग पाहण्यासाठी कैलेंडरमधे तारखेवार क्लिक करा</Text>         
            </View>
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>दिनविशेष</Text>
                    <Separator/>
                    <View style={styles.instdesc}>
                    <Text>{'दिनांक : '+CalData[displayDay].day+'/'+CalData[displayDay].month+'/'+CalData[displayDay].year}</Text>
                    <Text>{CalData[displayDay].var}</Text>
                    <Text>{CalData[displayDay].tithi}</Text>
                    <Text>{CalData[displayDay].paksha}</Text>
                    <Text>{CalData[displayDay].nakshatra}</Text>
                    <Text>{CalData[displayDay].yog}</Text>
                    <Text>{CalData[displayDay].karan}</Text>
                    </View>
            </Card>
            <BannerAd/>
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>सुर्य आणि चंद्र गणना</Text>
                    <Separator/>
                    <View style={styles.instdesc}>
                    <Text>{CalData[displayDay].rutu}</Text>
                    <Text>{CalData[displayDay].moonrashi}</Text>
                    <Text>{CalData[displayDay].sunraise}</Text>
                    <Text>{CalData[displayDay].sunset}</Text>
                    <Text>{CalData[displayDay].moonraise}</Text>
                    <Text>{CalData[displayDay].moonset}</Text>
                    </View>
            </Card>
            <BannerAd/>
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>हिंदु महिना आणि वर्ष</Text>
                    <Separator/>
                    <View style={styles.instdesc}>
                    <Text>{CalData[displayDay].shake}</Text>
                    <Text>{CalData[displayDay].dinkal}</Text>
                    <Text>{CalData[displayDay].shakevikaram}</Text>
                    <Text>{CalData[displayDay].mahinaamat}</Text>
                    <Text>{CalData[displayDay].mahinapurmat}</Text>
                    </View>
            </Card>
            <BannerAd/>
            <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>काळ / समय</Text>
                    <Separator/>
                    <View style={styles.instdesc}>
                    <Text>{CalData[displayDay].shubhkal}</Text>
                    <Text>{CalData[displayDay].kalvela}</Text>
                    <Text>{CalData[displayDay].kulik}</Text>
                    <Text>{CalData[displayDay].gulikkal}</Text>
                    <Text>{CalData[displayDay].kantak}</Text>
                    <Text>{CalData[displayDay].yamgat}</Text>
                    <Text>{CalData[displayDay].yamghat}</Text>
                    <Text>{CalData[displayDay].dusht}</Text>
                    <Text>{CalData[displayDay].rahulkal}</Text>
                    </View>
            </Card> 
            <BannerAd/>
        </ScrollView>
        );
    }

    render(){
       
        const todayDay =  String(this.state.Date.getDate()).padStart(2, '0');
        var todayDisplayDay = Number(this.state.nDaysItr[this.state.Date.getMonth()])+Number(todayDay);
        var displayDay = this.props.route.params?.days ?? todayDisplayDay;
        
        return(
        <ScrollView>{this.printPanchang(displayDay)}</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginTop : 2,
      marginBottom : 2,
      marginHorizontal: 3,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    CalContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop : 5,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
      },
      separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    cardContainer:{
        borderColor:'red',
    },
    title:{
        fontFamily: 'monospace',
        fontSize:20,
        textAlign:"center"
    },
    text:{
        fontFamily: 'sans-serif-condensed',
        margin:10,
        textAlign:"center"
    },
    instdesc:{
        fontFamily: 'sans-serif-condensed',
        margin:10,
    },
    instTitle:{
        fontFamily: 'sans-serif-condensed',
        fontSize:20,
        textAlign:"center"
    }
});


export default (DailyForm);