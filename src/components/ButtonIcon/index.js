import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddSaldo, IconGetPoint, IconKiloan, IconVIP, IconSatuan, IconEkspress, IconSetrika, IconKarpet } from '../../assets'

const ButtonIcon = ({ title, type }) => {

    const Icon = () => {
        if(title === "Add Saldo") return <IconAddSaldo />
        if(title === "Get Point") return <IconGetPoint />

        if(title === "Kiloan") return <IconKiloan />
        if(title === "Satuan") return <IconSatuan />
        if(title === "VIP") return <IconVIP />
        if(title === "Karpet") return <IconKarpet />
        if(title === "Setrika Saja") return <IconSetrika />
        if(title === "Ekspress") return <IconSetrika />

        return <IconAddSaldo/>
    }
    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginButtom: 12,
        marginRight: type === "layanan" ? 30 : 0
    }),
    button: (type) => ({
        backgroundColor: '#E0F7EF',
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        textAlign: 'center',
        fontWeight: type === "layanan" ? '300' : 'bold'
    })
})
