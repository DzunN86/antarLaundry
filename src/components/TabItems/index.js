import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {Home, HomeActive, Pesanan, PesananActive, Akun, AkunActive} from '../../assets/icons'

const TabItems = ({ isFocused, onPress, onLongPress, label }) => {

    const Icon = () => {
        if(label === "Home") return isFocused ? <HomeActive /> : <Home />
        if(label === "Pesanan") return isFocused ? <PesananActive /> : <Pesanan />
        if(label === "Akun") return isFocused ? <AkunActive /> : <Akun />

        return <Home />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
              <Icon />
            <Text style={styles.text(isFocused)}>
              {label}
            </Text>
          </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? '#55CB95' : '#C8C8C8',
        marginTop: 8
    })
})
