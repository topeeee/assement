import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import MediumText from '../typography/MediumText';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../theme';

export interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({label, onPress, style}: PrimaryButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <MediumText color={'white'}>{label}</MediumText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: RFValue(50),
    backgroundColor: Colors.primary,
    borderRadius: RFValue(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PrimaryButton;
