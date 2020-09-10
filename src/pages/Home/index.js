import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import { ImageHeader, Logo } from '../../assets'
import { Saldo, ButtonIcon } from '../../components'

const Home = () => {
    return (
      <View style={styles.page}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang</Text>
            <Text style={styles.username}>Dzun</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika Saja" type="layanan" />
            <ButtonIcon title="Ekspress" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
        </View>
      </View>
    );
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        width: windowWidth,
        height: windowHeight*0.25,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        width: windowWidth*0.3,
        height: windowHeight*0.06
    },

    hello: {
        marginTop: windowHeight*0.030
    },
    
    selamat: {
        fontSize: 23,
    },
    username: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    
    layanan: {
        paddingLeft: 30,
        paddingTop: 15
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        flexWrap: 'wrap'
    },
    pesananAktif: {
        paddingTop: 10,
        paddingHorizontal: 30,
        backgroundColor: '#ECECEC',
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,   
    }
})
