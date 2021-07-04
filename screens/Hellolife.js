import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive";
import OptionActive from "../component/OptionActive";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Hellolife =({navigation})=>{
    return(
        < CommonLayout>
        <SafeAreaView style={styles.container}>
        <View style={{paddingTop:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
            <View style={{backgroundColor:COLORS.cilver,width:100,height:6,marginHorizontal:8}}></View>
            <View style={{backgroundColor:COLORS.cyan,width:100,height:6,marginHorizontal:8,}}></View>
            <View style={{width:100,height:6,backgroundColor:COLORS.cilver,marginHorizontal:8}}></View>
        </View>
        <View style={{flex:1}}>
            <Text style={{color:COLORS.cyan,fontSize:SIZES.h2,textAlign:'center'}}>How active is your lifestyle?</Text>
        </View>
        <View style={{flex:4}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:12}}>
                <View style={{borderRadius:120/2,borderColor:COLORS.cyan,width:120,height:120,backgroundColor:Colors.white,
                justifyContent:'center',alignItems:'center',shadowColor:COLORS.white,shadowOffset: {
                    width: 0,
                    height: 2,
                },shadowOpacity:0.2,shadowRadius:3.5,elevation:8}}>
                    <View style={{borderRadius:100/2,borderColor:COLORS.cyan,width:100,height:100,
                        backgroundColor:'aliceblue',justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:SIZES.h5,textAlign:'center',color:COLORS.cyan}}>No Activity</Text>
                    </View>
                </View>
                <View style={{borderRadius:120/2,borderColor:COLORS.cyan,width:120,height:120,backgroundColor:Colors.white,
                justifyContent:'center',alignItems:'center',shadowColor:COLORS.white,shadowOffset: {
                    width: 0,
                    height: 2,
                },shadowOpacity:0.2,shadowRadius:3.5,elevation:8}}>
                    <View style={{borderRadius:100/2,borderColor:COLORS.cyan,width:100,height:100,
                        backgroundColor:'aliceblue',justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:SIZES.h5,textAlign:'center',color:COLORS.cyan}}>Low Activity</Text>
                    </View>
                </View>
                <View style={{borderRadius:120/2,borderColor:COLORS.cyan,width:120,height:120,backgroundColor:Colors.white,
                justifyContent:'center',alignItems:'center',shadowColor:COLORS.white,shadowOffset: {
                    width: 0,
                    height: 2,
                },shadowOpacity:0.2,shadowRadius:3.5,elevation:8}}>
                    <View style={{borderRadius:100/2,borderColor:COLORS.cyan,width:100,height:100,
                        backgroundColor:COLORS.cyan,justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:SIZES.h5,textAlign:'center',color:COLORS.white}}>Average Activity</Text>
                    </View>
                </View>
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginVertical:12}}>
            <View style={{borderRadius:120/2,borderColor:COLORS.cyan,width:120,height:120,backgroundColor:Colors.white,
                justifyContent:'center',alignItems:'center',shadowColor:COLORS.white,shadowOffset: {
                    width: 0,
                    height: 2,
                },shadowOpacity:0.2,shadowRadius:3.5,elevation:8,marginHorizontal:10}}>
                    <View style={{borderRadius:100/2,borderColor:COLORS.cyan,width:100,height:100,
                        backgroundColor:'aliceblue',justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:SIZES.h5,textAlign:'center',color:COLORS.cyan}}>High 
 Activity</Text>
                    </View>
                </View>
                <View style={{borderRadius:120/2,borderColor:COLORS.cyan,width:120,height:120,backgroundColor:Colors.white,
                justifyContent:'center',alignItems:'center',shadowColor:COLORS.white,shadowOffset: {
                    width: 0,
                    height: 2,
                },shadowOpacity:0.2,shadowRadius:3.5,elevation:8,marginHorizontal:10}}>
                    <View style={{borderRadius:100/2,borderColor:COLORS.cyan,width:100,height:100,
                        backgroundColor:'aliceblue',justifyContent:'center',alignItems:'center',padding:10}}>
                        <Text style={{fontSize:SIZES.h5,textAlign:'center',color:COLORS.cyan}}>Excessive Activity</Text>
                    </View>
                </View>
            </View>
        </View>
       <View>
       <BottonCommon handleSubmit={() => navigation.navigate('Hello2')} label="Next" />
       <BottonCommon handleSubmit={() => navigation.navigate('Hello2')} label="Previous" textColor={COLORS.gray} bgColor={COLORS.white} />
       </View>
        
        </SafeAreaView> 
        </CommonLayout>
        );
    };

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:SIZES.padding,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: SIZES.large,
        flex: 1
    },
    bar: {
        width: 100,
        height: 6,
        marginHorizontal: 6,
        backgroundColor: COLORS.cilver
    }
   
})

export default Hellolife;