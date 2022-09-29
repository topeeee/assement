import {SafeAreaView, StyleProp, View, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export type AppLayoutProps = {
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  isPadding?: boolean;
};

const AppLayout = ({children, style, isPadding = true}: AppLayoutProps) => {
  return (
    <View style={[{flex: 1, paddingTop: 10, backgroundColor: 'white'}, style]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: isPadding ? RFValue(20) : 0, flex: 1}}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AppLayout;
