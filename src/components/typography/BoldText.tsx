import {StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps} from './RegularText';
import {Colors} from '../../theme';

const BoldText = ({
  children,
  size = 16,
  color = Colors.black,
  style,
}: TextProps) => (
  <Text style={[styles.text, {fontSize: RFValue(size), color: color}, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Bold',
  },
});

export default BoldText;
