import React from 'react';
import { ScrollView, View, Text, Image, Button, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
   
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
      hidden={true}/>
  </View>
);

const InventoryScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>InventoryScreen Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Inventory: {
    screen: InventoryScreen,
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
    backgroundColor:'rgba(0,0,0,0.4)',
    justifyContent:'center',
    alignItems: 'center',
    lineHeight: 140,
  }
})

export default RootNavigator;

