import React from 'react';
import { ScrollView, FlatList, View, Text, Image, Button, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

    <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }}>
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
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Caterer')}>
        <Image source={require('./img/caterer.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Caterers</Text>
        </Image>
      </TouchableHighlight>
    </View>

    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Flights')}>
        <Image source={require('./img/flight.jpg')} style={styles.image}>
          <Text style={styles.homeTouchableText}>Flights</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Reallocate')}>
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

const CatererScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={[
        { key: 'ALPHA', airport: 'MEL', shortage: '4', logo: require('./img/alpha.gif')},
        { key: 'SATS', airport: 'SIN', shortage: '0', logo: require('./img/sats.png')},
        { key: 'DNATA', airport: 'DXB', shortage: '0', logo: require('./img/dnata.png')},
      ]}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={item.logo} />
            <Text numberOfLines={3} style={styles.listItemText}>
              <Text numberOfLines={1} style={styles.listItemKey}>Name: {item.key}</Text>{'\n'}
              Airport: {item.airport}{'\n'}
              Shortage: {item.shortage}{'\n'}
            </Text>
          </View>
      }
    />
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
      hidden={true} />
  </View>
);

const FlightScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={[
        { key: 'SQ 006', route: 'SIN to SGN', shortage: '2', status: require('./img/scheduled.png')},
        { key: 'SQ 117', route: 'SIN to SFC', shortage: '0', status: require('./img/flying.png')},
        { key: 'SQ 118', route: 'SIN to HKG', shortage: '0', status: require('./img/flying.png')},
        { key: 'SQ 119', route: 'SIN to KUL', shortage: '0', status: require('./img/landed.png')},
        { key: 'SQ 120', route: 'SIN to PEK', shortage: '0', status: require('./img/landed.png')},
      ]}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={item.status} />
            <Text numberOfLines={3} style={styles.listItemText}>
              <Text numberOfLines={1} style={styles.listItemKey}>Flight No: {item.key}</Text>{'\n'}
              Route: {item.route}{'\n'}
              Shortage: {item.shortage}{'\n'}
            </Text>
          </View>
      }
    />
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
      hidden={true} />
  </View>
);

const ReallocateScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={[
        { key: 'SATS-SPOON-SQ117-ALPHA', from: require('./img/sats.png'), to: require('./img/alpha.gif'), item: 'Spoon', quantity: '50', flight: 'SQ 117', freight: 'Cabin Load'},
        { key: 'ORDER-SPOON-SQ007-SATS', from: require('./img/fork.jpg'), to: require('./img/sats.png'), item: 'Fork', quantity: '1000', flight: 'SQ 007', freight: 'DHL'},
        { key: 'ORDER-TEASPOON-SQ008-SATS', from: require('./img/teaspoon.jpg'), to: require('./img/sats.png'), item: 'Tea Spoon', quantity: '2000', flight: 'SQ 008', freight: 'DHL'},
      ]}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={item.from} />
            <Text numberOfLines={4} style={styles.listRecommendationItemText}>
              <Text numberOfLines={1} style={styles.listItemKey}>TO</Text>{'\n'}
              Item: {item.quantity} x {item.item}{'\n'}
              Flight: {item.flight}{'\n'}
              Freight: {item.freight}{'\n'}
            </Text>
            <Image style={styles.listItemImage} source={item.to} />
          </View>
      }
    />
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
        { key: '9000-100-1100', name: 'Fork', current: '100', required: '100', pic: require('./img/fork.jpg')},
        { key: '9000-100-1101', name: 'Spoon', current: '100', required: '100', pic: require('./img/spoon.jpg') },
        { key: '9000-100-1102', name: 'Knife', current: '100', required: '100', pic: require('./img/knife.jpg') },
        { key: '9000-100-1103', name: 'Tray', current: '100', required: '100', pic: require('./img/tray.jpg') },
        { key: '9000-100-1104', name: 'Tea Spoon', current: '100', required: '100', pic: require('./img/teaspoon.jpg') },
        { key: '9000-100-1105', name: 'Dessert Fork', current: '100', required: '100', pic: require('./img/dfork.jpg') },
        { key: '9000-100-1106', name: 'Chopsticks', current: '100', required: '100', pic: require('./img/chopsticks.jpg') },
      ]}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={item.pic} />
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
        { key: '9000-100-1100', name: 'Fork', current: '100', required: '100', pic: require('./img/fork.jpg')},
        { key: '9000-100-1101', name: 'Spoon', current: '100', required: '100', pic: require('./img/spoon.jpg') },
      ]}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={item.pic} />

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
        { key: '9000-100-1103', name: 'Knife', current: '100', required: '100', pic: require('./img/knife.jpg') },
      ]}
      ItemSeparatorComponent={this.FlatListItemSeparator}
      renderItem={
        ({ item }) =>
          <View style={styles.listContainer}>
            <Image style={styles.listItemImage} source={item.pic}/>

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
  Caterer: {
    screen: CatererScreen,
    navigationOptions: {
      headerTitle: 'Caterers',
    },
  },
  Flights: {
    screen: FlightScreen,
    navigationOptions: {
      headerTitle: 'Flights',
    },
  },
  Reallocate: {
    screen: ReallocateScreen,
    navigationOptions: {
      headerTitle: 'Reallocate',
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
    flex: 1.3,
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

  listRecommendationItemText: {
    flex: 1,
    flex: 4,
    flexDirection: 'column',
    backgroundColor: 'white',
    fontWeight: '200',
    fontSize: 16,
    marginLeft: 5,
    textAlign: 'center',
  },

})

export default RootNavigator;

