export type HomeStackNavigatorParamList = {
  signup: undefined;
  home: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeStack: HomeStackNavigatorParamList;
  Profile: undefined;
  Insights: undefined;
};

export type StackParamsList = HomeStackNavigatorParamList;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
