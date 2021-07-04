import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,ScrollView,TouchableOpacity,
    Image,Pressable
} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive";
import OptionActive from "../component/OptionActive";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        paddingTop:SIZES.large,
        position:'relative',
        },
   
  
 header: {
    flexDirection:'row',
    backgroundColor:COLORS.cyan,
    height:60,width:'100%'
 },
 header_inner:{
    justifyContent:'center',
    marginHorizontal:40
 },
  header_title: {
    fontSize:SIZES.h2,
    color:COLORS.white
 },
 box:{
    borderRadius:SIZES.radius,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.cilver,
    shadowOffset: {
       width: 0,
       height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 4,flex:1,
    marginBottom:25
   },
   box_inner:{
    flexDirection:'row',
   },
   box_inner_left:{
       flex:2,
       padding: SIZES.body2,
    },
    box_titleone:{
        fontSize:SIZES.h5,
        color:COLORS.cyan,
        fontWeight:'700'
    },
    box_titletwo:{
        color:COLORS.gray,
        fontSize:SIZES.body4
    },
    box_inner_right:{
        flex:2,
        padding:0,
        margin:0
    },
    box_img:{
        width:170,
        resizeMode:'cover',
        height:100
    }
 
})
const Trending =({navigation})=>{
    return(
        <CommonLayout>
        <SafeAreaView style={[styles.container]}>
       
        <View style={[styles.header]}>
       
        <View style={styles.header_inner}>
            <Text style={styles.header_title}>Trending</Text>
        </View>
       
            
        </View>
        <ScrollView>
            <View style={{padding:25}}>


                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Breakfast</Text>
                    <Text style={styles.box_titletwo}>3 Step Banana &
Cinnamon Pancakes</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/pizza.png")} />
                </View>
                </View>
                </View>

                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Main Course</Text>
                    <Text style={styles.box_titletwo}>Easy Chicken & Veggie
Stir-Fry</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/main_course1.png")} />
                </View>
                </View>
                </View>
                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Breakfast</Text>
                    <Text style={styles.box_titletwo}>Omlette with Greens &
Avocado </Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/main_course2.png")} />
                </View>
                </View>
                </View>
               
                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Main Course</Text>
                    <Text style={styles.box_titletwo}>Healthy Mexican Tacos</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/main_course3.png")} />
                </View>
                </View>
                </View>
                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Breakfast</Text>
                    <Text style={styles.box_titletwo}>3 Step Banana &
Cinnamon Pancakes</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/main_course4.png")} />
                </View>
                </View>
                </View>


            </View>
        </ScrollView>
        
        </SafeAreaView> 
        
       
        </CommonLayout>
        );
    };


export default Trending;