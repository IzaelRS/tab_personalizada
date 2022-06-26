import React from "react";
import { View, StyleSheet } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

export default function ButtonNew({ focused, size, color }) {
    return (
        <View style={[Styles.container, { backgroundColor: focused ? '#1e1703' : '#664e0d' }]}>
            <Feather name="plus" color={color} size={size} />

            {/*<Feather name="plus" color={focused ? '#fff' : '#ddd'} size={size} />*/}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
        margin: 15,
    },
})