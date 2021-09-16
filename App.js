import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import {
    FoodDetail,

    Checkout,
    MyCart,
    Success,

    AddCard,
    MyCard,

    DeliveryStatus,
    Map
} from "./screens";

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'FoodDetail'}
            >
                <Stack.Screen
                    name="FoodDetail"
                    component={FoodDetail}
                />

                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                />

                <Stack.Screen
                    name="MyCart"
                    component={MyCart}
                />

                <Stack.Screen
                    name="Success"
                    component={Success}
                />

                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                />

                <Stack.Screen
                    name="MyCard"
                    component={MyCard}
                />

                <Stack.Screen
                    name="DeliveryStatus"
                    component={DeliveryStatus}
                />

                <Stack.Screen
                    name="Map"
                    component={Map}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App