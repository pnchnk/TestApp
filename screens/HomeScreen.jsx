import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

//Redux
import {useSelector} from 'react-redux';

//Components
import Item from '../components/Item';

//Styles
import styles from '../styles/HomePageStyles';

function HomeScreen({navigation}) {
  const photos = useSelector(state => state.photos?.photos);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.profileInfo}>
              <Image
                source={{uri: `${item.user.profile_image.large}`}}
                style={styles.userImage}
              />
              <Text style={styles.text}>{item.user.name}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                navigation?.navigate('Photo', {
                  photo: `${item.urls.full}`,
                })
              }>
              <Item photo={item.urls.full} navigation key={item.id} />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
