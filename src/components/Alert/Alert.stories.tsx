import React from 'react'
import {  View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AlertDialog, Button, XStack, YStack, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

const WarningAlert  = () => {
    const onPress = () => {
        console.log('Close alert')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Delete Customer</Text>
                <TouchableOpacity><AntDesign name="close" size={24} color="black"/></TouchableOpacity>       
            </View>
            <View>
                <Text style={styles.alert}>This will remove all data relating to Alex. This action cannot be reversed. 
                <Text style={styles.bold}> Deleted data can not be recovered.</Text>
                </Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.cancelBtn}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.deleteBtn}>I understand. Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        width: 379, 
        height: 217,
        alignSelf: "center",
        backgroundColor: "white", 
        borderRadius: 8, 
        padding: 30,
        // borderColor: "$bg-border-error-subtle",
        borderColor: "#EC4899",
        borderWidth: 1,
    },   
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: "700",
        fontFamily: "Poppins",
        fontSize: 16,
        lineHeight: 20,
    },
    alert: {
        fontFamily: "Open Sans",
        lineHeight: 21,
        fontWeight: "700",
        fontSize: 14,
    },
    buttonRow: {
        width: 300,
        borderRadius: 8,
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        padding: 16,
        gap: 16,
    },
    cancelBtn: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 16,
        textAlign: "center",
    },
    deleteBtn: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 14,
        textAlign: "center",
        color: "white",
        backgroundColor: "#5F3D9C",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    bold: {
        color: "#BE185D",
    },
    text: {
        fontSize: 16,
        color: 'blue',
        fontWeight: 'bold'
    }
});

// Props for the Alert

export default WarningAlert;  
