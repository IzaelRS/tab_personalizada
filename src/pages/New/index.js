import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function New() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                pagina New
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ad9f9b'
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
    },
})
