import {
  StyleSheet,
  Text,
  View, 
  Button, 
  DrawerLayoutAndroid 
} from 'react-native'
import * as React from 'react'
import { NavigationContainer,NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// type Props = {
//   navigation: NavigationProp<any>;
// };

const HomeScreen = () => {
  const drawer = React.useRef<DrawerLayoutAndroid>(null);
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === 'left') {
  //     setDrawerPosition('right');
  //   } else {
  //     setDrawerPosition('left');
  //   }
  // };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Disamping kiri ada drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default HomeScreen