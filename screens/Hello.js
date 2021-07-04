import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive";
import OptionActive from "../component/OptionActive";


const Hello =({navigation})=>{
    return(
        < CommonLayout>
        <SafeAreaView style={styles.container}>
         <Header navigation={() => navigation.navigate('BasicDetails')} />
         <ScrollView contentContainerStyle={{padding:SIZES.padding}}>
         <View style={styles.titletop}>
         <View>
         <Text style={styles.titleTextOne}>How many workouts per week do you want?</Text>
         <Text>Choose whatever suits you the best</Text>
         </View>
         <View style={{padding:30,borderRadius:10,backgroundColor: COLORS.white,   shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4}}>
        <View style={{ backgroundColor: COLORS.cyan,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2}}>
       
        <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.white}}>2-3
         </Text>
        </View>
           <View style={{ backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2}}>
       
        <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>2-3
         </Text>
        </View>
          <View style={{ backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2}}>
       
        <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>2-3
         </Text>
        </View>
          <View style={{ backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2}}>
       
        <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>2-3
         </Text>
         
        </View>
         </View>



         </View>
         </ScrollView>
         {/* <TouchableOpacity style={{backgroundColor:COLORS.cyan,paddingVertical:8,flexDirection:'row'
         ,justifyContent:'center'}}>
         <Text style={{color:COLORS.white,fontSize:SIZES.h4}}>
         Next
         </Text>
         </TouchableOpacity> */}
          <BottonCommon handleSubmit={() => navigation.navigate('Hello2')} label="Next" />
        </SafeAreaView>
        </CommonLayout>
        );
    };

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:SIZES.padding2,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: SIZES.large,
        flex: 1
    },
    bar: {
        width: 80,
        height: 6,
        marginHorizontal: 6,
        backgroundColor: COLORS.cilver
    },
    titletop:{
        paddingTop:SIZES.h2
    },
    title: {
        // paddingTop: SIZES.h2,
        flex: 1
    },
    titleTextOne: {
        fontSize: SIZES.h1,
        color: COLORS.cyan,
       
    },
    titleTextTwo:{
        fontSize:SIZES.h5,
        color:COLORS.cyan,
    },
    cercle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cercleInner: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "aliceblue",
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.padding
    },
    text: {
        color: COLORS.cyan,
        fontSize: SIZES.h4,
        textAlign: "center"
    },
    main:{
        flex: 4,
    },
    rowOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SIZES.margin2
    },
    rowTwo:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: SIZES.margin2
    },
    footer:{
        flex: 2,
        justifyContent: "center",
        // alignItems: "center"
    }
})

export default Hello;