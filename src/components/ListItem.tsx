import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import { User } from '../types/User.';

interface Props {
  item: User;
}

export const ListItem: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text>
        {item.first_name} {item.last_name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.5,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    margin: 16,
    marginLeft: 10
  },
});
