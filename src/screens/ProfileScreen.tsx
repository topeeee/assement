import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import AppLayout from '../components/layout/AppLayout';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../components/others/Header';
import {Colors} from '../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Images} from '../assets/image';
import MediumText from '../components/typography/MediumText';
import {SceneMap, TabView} from 'react-native-tab-view';
import {useState} from 'react';
import AppSwitch from '../components/buttons/AppSwitch';
import ListComponent from '../components/others/ListComponent';
import PhotosComponent from '../components/others/PhotosComponent';

const renderScene = SceneMap({
  first: ListComponent,
  second: PhotosComponent,
});

const ProfileScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const handleClick = (value: number) => setIndex(value);

  useFocusEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.primary, true);
      StatusBar.setBarStyle('light-content', true);

      return () => {
        StatusBar.setBackgroundColor('white', true);
        StatusBar.setBarStyle('dark-content', true);
      };
    }
  });

  return (
    <AppLayout style={{backgroundColor: Colors.primary}} isPadding={false}>
      <View style={{padding: RFValue(20), height: RFValue(170)}}>
        <Header
          label="Profile"
          labelStyle={{color: 'white'}}
          rightLabel="Settings"
          rightLabelStyle={{color: 'white'}}
          leftLabel="Logout"
          leftLabelStyle={{color: 'white'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: RFValue(20),
          position: 'relative',
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={Images.user}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1, marginTop: RFValue(30)}}>
          <MediumText size={30} style={{textAlign: 'center'}}>
            Victoria Robertson
          </MediumText>
          <MediumText style={{textAlign: 'center', marginTop: RFValue(5)}}>
            A mantra goes here
          </MediumText>
          <AppSwitch
            index={index}
            handleClick={handleClick}
            label1="Posts"
            label2="Photos"
          />
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={() => null}
          />
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: RFValue(158),
    width: RFValue(158),
  },
  imageContainer: {
    zIndex: 2,
    position: 'absolute',
    top: RFValue(-100),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
