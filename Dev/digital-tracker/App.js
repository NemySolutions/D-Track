import React from 'react';
import { ScrollView, View, Text, Image, Button, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
  <ScrollView>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/favicon.png')} resizeMode="contain">
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image resizeMode="contain" source={require('./img/favicon.png')} >
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
    </View>

    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/favicon.png')} resizeMode="contain">
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image resizeMode="contain" source={require('./img/favicon.png')} >
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
    </View>

    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/favicon.png')} resizeMode="contain">
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image resizeMode="contain" source={require('./img/favicon.png')} >
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
    </View>
    
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image source={require('./img/favicon.png')} resizeMode="contain">
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
      <TouchableHighlight style={{ flex: 1, flexDirection: 'column' }} onPress={() => navigation.navigate('Inventory')}>
        <Image resizeMode="contain" source={require('./img/favicon.png')} >
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </Image>
      </TouchableHighlight>
    </View>
    
    </ScrollView>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
      hidden={true}
    />
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

})

export default RootNavigator;

