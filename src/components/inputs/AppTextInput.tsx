import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MediumText from '../typography/MediumText';
import {Colors} from '../../theme';

export interface AppTextInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (arg: string) => void;
  isPassword?: boolean;
}

const AppTextInput = ({
  placeholder,
  value,
  onChangeText,
  isPassword = false,
}: AppTextInputProps) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={showPassword}
        placeholder={placeholder}
        style={styles.input}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MediumText color={Colors.primary}>
            {!showPassword ? 'Hide' : 'Show'}
          </MediumText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: RFValue(50),
    fontSize: RFValue(14),
    padding: 0,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: RFValue(8),
    borderWidth: 1,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: RFValue(8),
    paddingHorizontal: RFValue(10),
  },
  input: {
    color: 'black',
    height: RFValue(50),
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(16),
  },
});

export default AppTextInput;
