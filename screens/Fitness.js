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
    flex:1,
    marginBottom:25
   },
  
   
    box_inner:{
        flexDirection:'row',
       },
       box_inner_left:{
           flex:3,
        //    padding: SIZES.body2,
        },
        box_titleone:{
            fontSize:SIZES.h3,
            color:COLORS.cyan,
            fontWeight:'700'
        },
        box_titletwo:{
            color:COLORS.gray1,
            fontSize:SIZES.body3,
            fontWeight:'600'
        },
        box_inner_right:{
            flex:2,
            padding:0,
            margin:0
        },
        box_img:{
            width:120,
            resizeMode:'cover',
            height:98,
            borderRadius:10
        },
        main_view:{
            padding:20
        },
        img:{
            resizeMode:'cover',
            width:'100%',
            height:200,
            borderRadius:10
        },
        main_title:{
            color:COLORS.cyan,
            fontSize:SIZES.h3,
            fontWeight:'700',
            marginVertical:15
        },
        sub_title:{
            color:COLORS.gray1,
            fontWeight:'bold',
            fontSize:SIZES.h2,
            marginRight:60
        },
        space_between:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:15
        },
        sb_inner:{
            flex:1
        },
        sb_img:{
            width:'85%',
            height:110,
            resizeMode:'cover',
            borderRadius:10
        },
        sb_title:{
            marginTop:15,
            fontSize:SIZES.h3,
            color:COLORS.cyan,
            fontWeight:'700'
        },
        sb_subtitle:{
            color:COLORS.gray1,
            fontSize:SIZES.body5,
            marginRight:15,
            letterSpacing:1,
            fontWeight:'700'
        },
        br:{
        borderTopColor:COLORS.cilver,
        borderTopWidth:1,
        marginVertical:25
    }

})
const Fitness =({navigation})=>{
    return(
        <CommonLayout>
        <SafeAreaView style={[styles.container]}>
       
        <View style={[styles.header]}>
       
        <View style={styles.header_inner}>
            <Text style={styles.header_title}>Fitness</Text>
        </View>
       
            
        </View>
        <ScrollView>
            <View style={{padding:20}}>
        
            <View >
                    <Image style={styles.img} source={require("../assets/images/fitness1.png")} />
                </View>
               
       
            <Text style={styles.main_title}>Strength</Text>
            <Text style={styles.sub_title}>Science Says These 3 
Exercises Can Help Bust 
Anxiety</Text>
            

            <View style={styles.space_between}>
                <View style={styles.sb_inner}>
                <Image style={styles.sb_img} source={require("../assets/images/fitness2.png")} />
                <View>
                    <Text style={styles.sb_title}>Recovery</Text>
                    <Text style={styles.sb_subtitle}>The Best Rest Day
Activities to Support
Active Recovery</Text>
                </View>
                </View>
                <View style={styles.sb_inner}>
                <Image style={styles.sb_img} source={require("../assets/images/fitness3.png")} />
                <View>
                    <Text style={styles.sb_title}>Beginner</Text>
                    <Text style={styles.sb_subtitle}>What is the Functional
Strength Training?</Text>
                </View>
                </View>
               
            </View>

            <View style={styles.br}></View>

            <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Beginner</Text>
                    <Text style={styles.box_titletwo}>4 Fun Ways You Can Get Fit
With Your Partner</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/fitness4.png")} />
                </View>
                </View>
                </View>
                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Beginner</Text>
                    <Text style={styles.box_titletwo}>5 Simple Stretches If WFH
Has Your Muscles in Knots</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/fitness6.png")} />
                </View>
                </View>
                </View>

            </View>
            <View style={{padding:20}}>
        
            <View >
                    <Image style={styles.img} source={require("../assets/images/fitness11.png")} />
                </View>
               
       
            <Text style={styles.main_title}>Strength</Text>
            <Text style={styles.sub_title}>The Connection Between
Strength Training & Better
Sleep
</Text>
            

            <View style={styles.space_between}>
                <View style={styles.sb_inner}>
                <Image style={styles.sb_img} source={require("../assets/images/fitness9.png")} />
                <View>
                    <Text style={styles.sb_title}>Recovery</Text>
                    <Text style={styles.sb_subtitle}>Sometimes Less is More:
Here's Why Too Much
Workout is Bad for You
</Text>
                </View>
                </View>
                <View style={styles.sb_inner}>
                <Image style={styles.sb_img} source={require("../assets/images/fitness10.png")} />
                <View>
                    <Text style={styles.sb_title}>Barre</Text>
                    <Text style={styles.sb_subtitle}>Here is How Many Days
You Should Practise Barre</Text>
                </View>
                </View>
               
            </View>

            <View style={styles.br}></View>

            <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Beginner</Text>
                    <Text style={styles.box_titletwo}>Why a Medicine Ball
Maybe a Secret Weapon
For Toned Obliques</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/fitness7.png")} />
                </View>
                </View>
                </View>
                <View style={styles.box}>
    <View style={styles.box_inner}>
                <View style={styles.box_inner_left}>
                    <Text style={styles.box_titleone}>Pilates</Text>
                    <Text style={styles.box_titletwo}>Here are the Best 4 Exercise
for Better Hormone Balance</Text>
                </View>
                <View style={styles.box_inner_right}>
                    <Image style={styles.box_img} source={require("../assets/images/fitness8.png")} />
                </View>
                </View>
                </View>

            </View>


        </ScrollView>
        
        </SafeAreaView> 
        
       
        </CommonLayout>
        );
    };


export default Fitness;