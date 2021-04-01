import * as React from 'react';
import { View, Text,Button } from 'react-native';

import DetailsScreen from './DetailsScreen';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button  title="details" onPress={()=>navigation.navigate("Details")}/>
    </View>
  );
}
export default HomeScreen