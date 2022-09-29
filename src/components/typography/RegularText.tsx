import {Text, TextStyle, StyleProp, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../theme';

export type TextProps = {
  children?: any;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

const RegularText = ({
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
    fontFamily: 'Inter-Regular',
  },
});

export default RegularText;
