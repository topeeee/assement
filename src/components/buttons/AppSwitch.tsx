import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../theme';
import RegularText from '../typography/RegularText';

export interface AppBankSwitchProps {
  index: number;
  handleClick: (arg: number) => void;
  label1: string;
  label2: string;
}

const AppBankSwitch = ({
  index = 0,
  handleClick,
  label1,
  label2,
}: AppBankSwitchProps) => (
  <View style={styles.button}>
    <TouchableOpacity
      onPress={() => (typeof handleClick === 'function' ? handleClick(0) : {})}
      style={[styles.ripple2, index === 0 ? styles.active : styles.inactive]}>
      <RegularText style={[{color: index === 0 ? Colors.primary : '#BDBDBD'}]}>
        {label1}
      </RegularText>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => (typeof handleClick === 'function' ? handleClick(1) : {})}
      style={[styles.ripple, index === 1 ? styles.active2 : styles.inactive]}>
      <RegularText style={[{color: index === 1 ? Colors.primary : '#BDBDBD'}]}>
        {label2}
      </RegularText>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: RFValue(32),
    width: '100%',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: RFValue(20),
    marginBottom: RFValue(20),
    backgroundColor: '#F6F6F6',
  },
  ripple: {
    width: '50%',
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: RFValue(32),
    borderBottomRightRadius: RFValue(32),
  },
  ripple2: {
    width: '50%',
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: RFValue(32),
    borderBottomLeftRadius: RFValue(32),
  },
  active: {
    backgroundColor: 'white',
    borderBottomRightRadius: RFValue(32),
    borderTopRightRadius: RFValue(32),
  },
  active2: {
    backgroundColor: 'white',
    borderBottomLeftRadius: RFValue(32),
    borderTopLeftRadius: RFValue(32),
  },
  inactive: {
    backgroundColor: '#F6F6F6',
    borderBottomRightRadius: RFValue(32),
    borderTopRightRadius: RFValue(32),
  },
});

export default AppBankSwitch;
