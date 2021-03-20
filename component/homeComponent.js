import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, TouchableOpacity, Share, Image } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import jan from '../data/jan.json';
import { Octicons } from '@expo/vector-icons';
import { Loading } from './LoadingComponent';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { BannerAd } from './bannerAd';

class home extends Component
{
    constructor(props){
        super(props);
              
        this.state = {
            activeDate: new Date().getFullYear()==2020 ? new Date(2021, 0, 1) : new Date(),
            nDays : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            nDaysItr : [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
            months : [" जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
            weekDays : ["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
            calendar : [],
            isLoading: true
        }
    }
    componentDidMount() {
        this.setState({calendar:this.calendarHtml()});
      }

    generateMatrix() {
        var matrix = [];
        matrix[0] = this.state.weekDays;
        
       // console.log(this.state.activeDate.getFullYear());
       // console.log(this.state.activeDate.getFullYear()==2020);

        var year = 2021;
        var month = this.state.activeDate.getMonth();
        var firstDay = new Date(year, month, 1).getDay();
       // console.log('year='+year+'  month='+month+'  firstDay='+new Date(year, month, 1).getDay());

        var maxDays = this.state.nDaysItr[month];
        if (month == 1) { // February
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            maxDays += 1;
            }
        }

        var counter = 0;
        counter = 
        month == 0 ? 0 :
        month == 1 ? 32 : 
        month == 2 ? 60 :
        month == 3 ? 91 :
        month == 4 ? 121 :
        month == 5 ? 152 :
        month == 6 ? 182 :
        month == 7 ? 213 :
        month == 8 ? 244 :
        month == 9 ? 274 :
        month == 10 ? 305 :
        month == 11 ? 335 :
        0;

        for (var row = 1; row < 7; row++) {
        matrix[row] = [];
        for (var col = 0; col < 7; col++) {
            matrix[row][col] = -1;
            if (row == 1 && col >= firstDay) {
                if(counter == 0) {
                    matrix[row][col] = 1;
                    counter = 2;
                }
                else
                    matrix[row][col] = counter++;  // Fill in rows only after the first day of the month
            } else if (row > 1 && counter <= maxDays) {
            matrix[row][col] = counter++;  // Fill in rows only if the counter's not greater than
            }
        }
        //console.log('row='+matrix[row]);
        }
        return matrix;
    }

    generateRows(matrix){
        var rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                return (
                <TouchableOpacity
                    style={{
                    flex: 1,
                    height: rowIndex == 0 ? 20 : 100,
                    textAlign: 'center',
                    backgroundColor: "white",
                    borderWidth: 0.5,
                    padding:1,
                    marginTop : 1,
                    backgroundColor: rowIndex == 0 ? 'lightpink' : (item == -1) ? '#fff' : jan[item].boxColor
                    }}
                    onPress={() => this.dayPanchang(item)}>
                        <Text  style={{
                        color: colIndex == 0 ? '#a00' : '#000',
                        fontSize: item != -1 && !isNaN(item) ? 6: 15
                        }}>
                        {item != -1 && isNaN(item) ? item : 
                        (item != -1 && !isNaN(item)) ? jan[item].shubhkal:''}
                        </Text> 
                        <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                {
                                     (item == -1 || isNaN(item) || jan[item].event == '' ) ? 
                                     <Text></Text> :
                                     (jan[item].event.includes('चतुर्थी'))? <Image source={require('../assets/modak.png')} style={{ width: 20, height: 20 }}/>:
                                     (jan[item].event.includes('एकादशी'))? <Fontisto name="flag" size={24} color="coral" />:
                                     (jan[item].event.includes('अमावास्या'))? <Octicons name="primitive-dot" size={24} color="black" />:
                                     (jan[item].event.includes('पौर्णिमा'))? <FontAwesome name="circle-thin" size={24} color="coral" />:
                                     <Text></Text>
                                }
                                
                            </View>
                            <Text style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>{(item != -1 && !isNaN(item)) ? jan[item].day:''}</Text>
                        </View>
                       
                        <Text style={{fontSize:8, fontWeight: "bold"}}
                        >{item != -1 && !isNaN(item) ? jan[item].event : ''}
                        </Text>

                        <Text style={{fontSize:6}}
                        >{item != -1 && !isNaN(item) ? jan[item].tithi.split('-')[0]+'       ': ''}
                        {item != -1 && !isNaN(item) ? jan[item].moonraise: ''}
                        </Text>
                </TouchableOpacity>
                );
                });
    
            return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 0.5,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  {rowItems}
                </View>
            );
        });
        return rows;
    }

    dayPanchang = (item) =>{
        console.log('-->'+item);
        if(item != -1 && !isNaN(item)){
            this.props.navigation.navigate('पंचाग', { days:item});
        } else {
            Alert.alert(
                "विनंती",
                "कृपया पंचांग पाहण्यासाठी तारखेला क्लिक करा",
                [
                  {},
                  { text: "OK"}
                ],
                { cancelable: true }
              );
        } 
    }

    nextMonth = () => {
        this.state.activeDate.setMonth(this.state.activeDate.getMonth()+1);
        this.setState({calendar:this.calendarHtml()});
    }
    preMonth = () => {
        this.state.activeDate.setMonth(this.state.activeDate.getMonth()-1);
        this.setState({calendar:this.calendarHtml()});
    }

    calendarHtml(){
        const calendar = [];
        var matrix = this.generateMatrix();
        var rows = this.generateRows(matrix);
        calendar.push(
            <View style={styles.container}>              
            <Button
            buttonStyle={{backgroundColor: 'lightseagreen'}}
            raised
            title="मागील महिना"
            titleStyle={{ marginLeft: 10 }}
            onPress={this.preMonth}
            />
            <Text style={{
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold'
                }}>
                {this.state.months[this.state.activeDate.getMonth()]} &nbsp;
                {'२०२१'}
            </Text>
            <Button
            buttonStyle={{backgroundColor: 'lightseagreen'}}
            raised
            title="पुढील महिना"
            titleStyle={{ marginLeft: 10 }}
            onPress={this.nextMonth}
            />
            </View>
        );
        calendar.push(rows);   
        this.setState({isLoading:false});
     return calendar;
    }
    render(){

        return (
            <ScrollView>
                <BannerAd/>
                {this.state.calendar}
                <BannerAd/>
            </ScrollView>

        );
    
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginTop : 5,
      marginBottom : 5,
      marginHorizontal: 5,
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
      }
});

export default home;