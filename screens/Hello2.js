import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive";
import OptionActive from "../component/OptionActive";


const Hello2 =({navigation})=>{
    return(
        < CommonLayout>
        <SafeAreaView style={styles.container}>
         <Header navigation={() => navigation.navigate('Hello')} />
         <ScrollView contentContainerStyle={{padding:SIZES.padding}}>
        
         <View style={styles.titletop}>
         <Text style={styles.titleTextOne}>Select all your favourite type of classes:
</Text>
         <Text style={styles.titleTextTwo}>Choose whatever suits you the best amb</Text>
         </View>
         <View style={{padding:30,borderRadius:10,backgroundColor: COLORS.white,   shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Cardio
         </Text>
       </View>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Strength
         </Text>
       </View>
        
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>HIIT
         </Text>
       </View>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Toning
         </Text>
       </View>
        
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Dance
         </Text>
       </View>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Kickboxing
         </Text>
       </View>
        
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Barre
         </Text>
       </View>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Pilates
         </Text>
       </View>
        
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Meditation
         </Text>
       </View>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Stretch
         </Text>
       </View>
        
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Yoga
         </Text>
       </View>
       <View style={{backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        width:'48%',
        marginTop: SIZES.margin2}}>
       <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.cyan}}>Spinning
         </Text>
       </View>
        
        </View>
          <View style={{ backgroundColor: COLORS.cyan,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2}}>
       
        <Text style={{  fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.white}}>Treadmill
         </Text>
         
        </View>
         </View>



         
         </ScrollView>
         <BottonCommon handleSubmit={() => navigation.navigate('Hellolife')} label="Next" />
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
        color:COLORS.cilver,
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

export default Hello2;