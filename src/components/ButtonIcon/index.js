import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddSaldo, IconGetPoint } from '../../assets'

const ButtonIcon = ({ title }) => {

    const Icon = () => {
        if(title === "Add Saldo") return <IconAddSaldo />
        if(title === "Get Point") return <IconGetPoint />

        return <IconAddSaldo/>
    }
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Icon />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E0F7EF',
        padding: 7,
        borderRadius: 10
    },
    text: {
        fontSize: 10,
        textAlign: 'center'
    }
})
