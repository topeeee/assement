import {Image, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {AppIcons} from '../../assets/icons';
import RegularText from '../typography/RegularText';
import {RFValue} from 'react-native-responsive-fontsize';
import BoldText from '../typography/BoldText';
import {Colors} from '../../theme';
import MediumText from "../typography/MediumText";

export interface HeaderProps {
  label?: string;
  leftLabel?: string;
  rightLabel?: string;
  labelStyle?: StyleProp<TextStyle>;
  leftLabelStyle?: StyleProp<TextStyle>;
  rightLabelStyle?: StyleProp<TextStyle>;
}

const Header = ({
  label,
  leftLabel,
  rightLabel,
  leftLabelStyle,
  rightLabelStyle,
  labelStyle,
}: HeaderProps) => (
  <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
    {rightLabel ? (
      <RegularText size={16} color={Colors.primary} style={rightLabelStyle}>
        {rightLabel}
      </RegularText>
    ) : (
      <Image
        source={AppIcons.close}
        style={styles.image}
        resizeMode="contain"
      />
    )}
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <BoldText size={30} style={labelStyle}>
        {label}
      </BoldText>
    </View>
    <RegularText size={16} color={Colors.primary} style={leftLabelStyle}>
      {leftLabel}
    </RegularText>
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: RFValue(25),
    width: RFValue(25),
  },
});

export default Header;
