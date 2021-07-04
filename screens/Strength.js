import React, { useState } from 'react';
import { View,  SafeAreaView, TextInput, StyleSheet,  ScrollView, Switch, Text, TouchableOpacity,Image} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Row = ({ title }) => (
    <TouchableOpacity style={{borderColor:COLORS.gray,borderRadius:15,borderWidth:1, marginRight:5
    }}>
 <View style={{justifyContent:'center',alignItems:'center',paddingHorizontal:5}}>
     <Text style={{textAlign:'center',color:COLORS.cyan,fontSize:SIZES.margin2}}>{title}</Text>
 </View>
 </TouchableOpacity>
    
)
const Strength = ({navigation}) => {
  
    return (
        <CommonLayout>
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection:'row'}}>
                <Row title="Intensity" />
                <Row title="Equipment" />
                <Row title="Time" />
                <Row title="Completed" />
                    
                  
                <View style={{position:'relative'}}>
                    <TouchableOpacity>
                <Icon name="magnify" size={18} color={COLORS.cyan} style={{position:'absolute',right:0,top:4,marginRight:5}}/>
                </TouchableOpacity>
   <TextInput style={{height: 25,
      flex:1,
        borderWidth: 1,
        borderColor: COLORS.cilver,
        color: COLORS.cyan,
        paddingHorizontal: 5,
        fontSize: 20,borderRadius:15}}
         placeholderTextColor={COLORS.cilver}  placeholder="Search trainer" />
 </View>

                </View>
                <View style={styles.body}>

                <View style={styles.box}>
                <View >
                    <Image style={styles.img} source={require("../assets/images/strength1.png")} />
                </View>
                    </View>

                    </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 9,
        marginTop:15
    },
     container:{ 
       marginTop: 90,
        padding: SIZES.padding,
         flex: 1 
        },
    box: {
        flex:3,
       backgroundColor: COLORS.white,
        borderRadius:12,
        shadowColor:COLORS.cilver,
        shadowOpacity:0.18,
        shadowRadius:1,
        shadowOffset:{
            height:0,
            width:1
        },
        elevation:4,
      
       

        
        },
        img:{
            
            width:'100%',
            
            borderRadius:12
        },
      
})

export default Strength;