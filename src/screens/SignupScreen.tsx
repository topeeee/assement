import {ScrollView, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppTextInput from '../components/inputs/AppTextInput';
import AppLayout from '../components/layout/AppLayout';
import {useState} from 'react';
import RegularText from '../components/typography/RegularText';
import Header from '../components/others/Header';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../theme';
import PrimaryButton from '../components/buttons/PrimaryButton';
import MediumText from '../components/typography/MediumText';

const SignupScreen = () => {
  const [formData, setFormData] = useState({name: '', email: '', password: ''});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();

  const {name, password, email} = formData;

  return (
    <AppLayout>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <Header label="Sign Up" leftLabel="Login" />
      <ScrollView style={{marginTop: RFValue(20)}}>
        <AppTextInput
          value={name}
          onChangeText={value => setFormData({...formData, name: value})}
          placeholder="Name"
        />
        <AppTextInput
          value={email}
          onChangeText={value => setFormData({...formData, email: value})}
          placeholder="Email"
        />
        <AppTextInput
          value={password}
          onChangeText={value => setFormData({...formData, password: value})}
          placeholder="Password"
          isPassword={true}
        />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <View
            style={{
              paddingHorizontal: RFValue(5),
            }}>
            <CheckBox
              style={{
                height: RFValue(16),
                width: RFValue(16),
                marginTop: RFValue(3),
              }}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <View style={{flex: 1}}>
            <RegularText
              color={Colors.grey}
              size={14}
              style={{marginLeft: RFValue(10)}}>
              I would like to receive your newsletter and other promotional
              information.
            </RegularText>
          </View>
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('home')}
          label="Submit"
          style={{marginTop: RFValue(43)}}
        />
        <MediumText
          color={Colors.primary}
          style={{marginTop: RFValue(16), textAlign: 'center'}}>
          Forgot your password?
        </MediumText>
      </ScrollView>
    </AppLayout>
  );
};

export default SignupScreen;
