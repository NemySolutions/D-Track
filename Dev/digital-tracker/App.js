import React from 'react';
import { ScrollView, FlatList, View, Text, Image, Button, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

    <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/sia.jpg')} style={styles.image}>
        </Image>
      </TouchableHighlight>
    </View>

    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/inventory.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Inventory</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/caterer.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Caterers</Text>
        </Image>
      </TouchableHighlight>
    </View>

    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/flight.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Flights</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/reallocate.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Reallocate</Text>
        </Image>
      </TouchableHighlight>
    </View>

    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/order.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Orders</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/packing.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Packing Plan</Text>
        </Image>
      </TouchableHighlight>
    </View>

    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
      hidden={true} />
  </View>
);

FlatListItemSeparator = () => {
  return (
    <View
      style={styles.separator}
    />
  );
}

const InventoryAll = () => (
  <View style={styles.container}>
    <FlatList
      data={[
        { key: '9000-100-1100', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1101', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1102', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1103', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1104', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1105', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1106', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1107', name: 'Fork', current: '100', required: '100' },
      ]}
      ItemSeparatorComponent = {this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={require('./img/fork.jpg')} />
            <Text numberOfLines={4} style={styles.listItemText}>
            <Text numberOfLines={1} style={styles.listItemKey}>Part No: {item.key}</Text>{'\n'}
              Name: {item.name}{'\n'}
              Current: {item.current}{'\n'}
              Required: {item.required}{'\n'}
            </Text>
          </View>
      }
    />
  </View>
);

const InventoryShortages = () => (
  <View style={styles.container}>
    <FlatList
      data={[
        { key: '9000-100-1100', name: 'Fork', current: '100', required: '100' },
        { key: '9000-100-1101', name: 'Fork', current: '100', required: '100' },
      ]}
      ItemSeparatorComponent = {this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={require('./img/fork.jpg')} />
            
            <Text numberOfLines={4} style={styles.listItemText}>
              <Text numberOfLines={1} style={styles.listItemKeyShort}>Part No: {item.key}</Text>{'\n'}
              Name: {item.name}{'\n'}
              Current: {item.current}{'\n'}
              Required: {item.required}{'\n'}
            </Text>
          </View>
      }
    />
  </View>
);

const InventorySurplus = () => (
  <View style={styles.container}>
    <FlatList
      data={[
        { key: '9000-100-1100', name: 'Fork', current: '100', required: '100' },
      ]}
      ItemSeparatorComponent = {this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={require('./img/fork.jpg')} />
            
            <Text numberOfLines={4} style={styles.listItemText}>
              <Text numberOfLines={1} style={styles.listItemKeySurplus}>Part No: {item.key}</Text>{'\n'}
              Name: {item.name}{'\n'}
              Current: {item.current}{'\n'}
              Required: {item.required}{'\n'}
            </Text>
          </View>
      }
    />
  </View>
);

const InventoryScreenNavigator = TabNavigator({
  InventoryAll: {
    screen: InventoryAll,
    navigationOptions: {
      tabBarLabel: 'All (500)',
    },
  },
  InventoryShortages: {
    screen: InventoryShortages,
    navigationOptions: {
      tabBarLabel: 'Shortages (2)',
    },
  },
  InventorySurplus: {
    screen: InventorySurplus,
    navigationOptions: {
      tabBarLabel: 'Surplus (1)',
    },
  }
});

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'D-Tracker',
    },
  },
  Inventory: {
    screen: InventoryScreenNavigator,
    navigationOptions: {
      headerTitle: 'Inventory',
    },
  },
});

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 1000,
    width: null,
    height: null,
    resizeMode: 'stretch',
  },
  homeTouchableText: {
    flex: 1,
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '900',
    color: 'aliceblue',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 120,
  },

  listContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  listItemImage: {
    flex: 1.5,
    flexDirection: 'column',
    width: null,
    height: null,
    resizeMode: 'stretch',
    borderRadius: 10
  },
  listItemText: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: 'white',
    fontWeight: '200',
    fontSize: 16,
    marginLeft: 5
  },
  listItemKey: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'midnightblue'
  },
  listItemKeyShort: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red'
  },
  listItemKeySurplus: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'green'
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "black"
  },

})

export default RootNavigator;

