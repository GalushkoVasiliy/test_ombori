import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { ListItem } from '../../components/ListItem';
import { User } from '../../types/User.';
import { getUsers } from '../../requests/api';
import {  } from 'react-native-gesture-handler';

const MainPage = () => {
  const currentPage = React.useRef(1);
  const [data, setData] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<null | number>(null);

  const renderItem = useCallback(({item}: User) => {
    return <ListItem item={item} />
  }, []);

  const renderFooter = () => {
    return (
      <View>
        {totalPages !== null && currentPage.current < totalPages && (
          <Text>End of list</Text>
        )} 
      </View>
    )
  };

  const request = async (page: number) => {
    if (usersLoading) {
      return;
    }

    try {
      setUsersLoading(true);
      const fetchedUsers = await getUsers(page);
      setData(prevUsers =>
        page === 1 ? fetchedUsers.data : [...prevUsers, ...fetchedUsers.data],
      );

      if (totalPages === null) {
        setTotalPages(fetchedUsers.total_pages)
      }

      currentPage.current = page;
    } catch (error) {
      console.log(error);
    } finally {
      setUsersLoading(false);
    }
  }

  const onEndReached = () => {
    if (totalPages !== null && currentPage.current < totalPages) {
      request(currentPage.current + 1)
    }
  };

  useEffect(() => {
    request(1);
  }, []);

  const userKeyExtractor = (item: User) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        keyExtractor={userKeyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
  },
});

export default React.memo(MainPage);
