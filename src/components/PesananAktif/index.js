import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {IconPesananAktif} from '../../assets';

const PesananAktif = ({title, status}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <IconPesananAktif />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.status(status)}>{status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 17,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.01,
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: (status) => ({
    fontSize: 14,
    fontWeight: '200',
    color: status === "Sudah Selesai" ? '#55CB95' : '#FF4D00',
  }),
});
