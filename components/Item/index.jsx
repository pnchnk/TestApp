import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Item = ({photo}) => {
  return (
    <>
      <View style={styles.photoSection}>
        <Image source={{uri: `${photo}`}} style={styles.photo} />
      </View>
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  profile: {
    marginBottom: 60,
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
  },
  photoSection: {
    marginTop: 10,
  },
  photo: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
});
