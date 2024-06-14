import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {navigationRef} from '../../navigation/RootNavigation';
import {WIDTH} from '../../utils/constants';
import AppBar from '../components/AppBar';
import Searchbar from '../components/Searchbar';
import Divider from '../components/Divider';
import Empty from '../components/Empty';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import {IProduct} from '../../interfaces/product.interface';
import {useProduct} from '../hooks/useProduct';
import ErrorView from '../components/ErrorView';
import LoadingListItem from '../components/LoadingListItem';

const FAKE_DATA = ['1', '2', '3', '4'];

const Top = ({isDarkMode}: {isDarkMode: boolean}) => {
  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
      />
      <AppBar title={'BANCO'} backPressEnabled={false} />
    </View>
  );
};

const Loading = () => (
  <FlatList
    data={FAKE_DATA}
    ItemSeparatorComponent={Divider}
    ListEmptyComponent={Empty}
    style={styles.content}
    showsVerticalScrollIndicator={false}
    renderItem={item => <LoadingListItem key={item.item} />}
  />
);

function HomeView(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {loading, error, productsFiltered, filter} = useProduct();
  const goToForm = () => navigationRef.navigate('FormView');

  const seeDetails = (data: IProduct) => {
    navigationRef.navigate('DetailsView', {
      data,
    });
  };

  if (error) {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Top isDarkMode={isDarkMode} />
        <ErrorView errorText="recuperar datos" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Top isDarkMode={isDarkMode} />
      <Searchbar onChange={value => filter(value)} />
      <View style={styles.listContent}>
        <View style={styles.list}>
          {loading ? (
            <Loading />
          ) : (
            <FlatList
              data={productsFiltered}
              ItemSeparatorComponent={Divider}
              ListEmptyComponent={Empty}
              style={styles.content}
              showsVerticalScrollIndicator={false}
              renderItem={item => (
                <ListItem
                  title={item.item.name}
                  subtitle={`ID: ${item.item.id}`}
                  onPress={() => seeDetails(item.item)}
                />
              )}
            />
          )}
        </View>
      </View>
      <Button
        title="Agregar"
        backgroundColor="rgb(255, 221, 75)"
        width={WIDTH - 50}
        marginHorizontal={25}
        marginBottom={Platform.OS === 'android' ? 10 : 0}
        onPress={goToForm}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  listContent: {flex: 1},
  list: {
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  content: {
    margin: 25,
    padding: 3.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d2d2d2',
  },
});

export default HomeView;
