import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Login, Registration, WorkoutsPerWeek, WorkoutWeek, WorkoutTime, FavouriteType, Goal,
    MealsPerDay,
    DietFollow,
    StruggleTimes,
    Lifestyle,
    CurrentBodytype,
    AddLogs,
    BasicDetails,
    GenericLogs,
    Overview,
    Hello,
    Hello2,
    Hellolife,
    Todayburn,
    Todaycaleat,
    TodayMeditation,
    Habits,
    Trending,
    Fitness,
    WaterReminder,
    Strength
} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from "../constants/theme";

const Stack = createStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator

            >
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Registration" component={Registration} />
                <Stack.Screen options={{ headerShown: false }} name="BasicDetails" component={BasicDetails} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutsPerWeek" component={WorkoutsPerWeek} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutWeek" component={WorkoutWeek} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutTime" component={WorkoutTime} />
                <Stack.Screen options={{ headerShown: false }} name="FavouriteType" component={FavouriteType} />
                <Stack.Screen options={{ headerShown: false }} name="Goal" component={Goal} />
                <Stack.Screen options={{ headerShown: false }} name="MealsPerDay" component={MealsPerDay} />
                <Stack.Screen options={{ headerShown: false }} name="DietFollow" component={DietFollow} />
                <Stack.Screen options={{ headerShown: false }} name="StruggleTimes" component={StruggleTimes} />
                <Stack.Screen options={{ headerShown: false }} name="Lifestyle" component={Lifestyle} />
                <Stack.Screen options={{ headerShown: false }} name="CurrentBodytype" component={CurrentBodytype} />
                <Stack.Screen options={{ headerShown: false }} name="AddLogs" component={AddLogs} />
                <Stack.Screen options={{ headerShown: false }} name="Overview" component={Overview} />
                <Stack.Screen options={{headerShown:false}} name="Hello" component={Hello} />
                <Stack.Screen options={{headerShown:false}} name="Hello2" component={Hello2} />
                <Stack.Screen options={{headerShown:false}} name="Hellolife" component={Hellolife} />
                <Stack.Screen options={{headerShown:false}} name="Todayburn" component={Todayburn} />
                <Stack.Screen options={{headerShown:false}} name="Todaycaleat" component={Todaycaleat} />
                <Stack.Screen options={{headerShown:false}} name="TodayMeditation" component={TodayMeditation} />
                <Stack.Screen options={{headerShown:false}} name="Habits" component={Habits} />
                <Stack.Screen options={{headerShown:false}} name="Trending" component={Trending} />
                <Stack.Screen options={{headerShown:false}} name="Fitness" component={Fitness} />
                <Stack.Screen
                    options={({ navigation, route }) => ({
                        headerTitle: 'Add logs manually',
                        headerTransparent: true,
                        headerTintColor: COLORS.cyan,
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.cyan}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })}
                    name="GenericLogs" component={GenericLogs} />
            
            <Stack.Screen
                    options={({ navigation, route }) => ({
                        headerTitle: 'Drink water reminder',
                        headerTransparent: true,
                        headerTintColor: COLORS.cyan,
                        headerTitleStyle: {
                            textAlign: 'left',
                         
                            flexGrow:1,
                            
                        },
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuBtn}
                                color={COLORS.cyan}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })}
                    name="WaterReminder" component={WaterReminder} />
                    <Stack.Screen
                    options={({ navigation, route }) => ({
                        headerTitle: 'Strength',
                        headerTransparent: true,
                        headerTintColor: COLORS.cyan,
                        headerTitleStyle: {
                            textAlign: 'left',
                         
                            flexGrow:1,
                            
                        },
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.cyan}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })}
                    name="Strength" component={Strength} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    menuButtom: {
        left: SIZES.h6,
        width: 40
    },
    menuBtn: {
        left: SIZES.h6,
        width: 40
    },
})

export default Index;

