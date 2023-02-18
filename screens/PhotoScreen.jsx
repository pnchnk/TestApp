import {View, Image} from 'react-native';
import React from 'react';

//styles
import styles from '../styles/PhotoPageStyles';

const PhotoScreen = ({route}) => {

  const {photo} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: `${photo}`}} style={styles.photo} />
    </View>
  );
};

export default PhotoScreen;

