import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import AppLayout from '../components/layout/AppLayout';
import RegularText from '../components/typography/RegularText';
import Header from '../components/others/Header';
import {Colors} from '../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import PieChart from 'react-native-pie-chart';
import MediumText from '../components/typography/MediumText';

const Insights = () => {
  const widthAndHeight = RFValue(196);
  const series = [30, 70];
  const sliceColor = ['#E8E8E8', '#5DB075'];

  return (
    <AppLayout>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      />
      <Header
        label="Insights"
        rightLabel="Back"
        rightLabelStyle={{color: Colors.primary}}
      />
      <View style={styles.container}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.95}
          coverFill={'#FFF'}
        />
        <View style={styles.item}>
          <MediumText size={24} color={Colors.primary}>
            $32.01
          </MediumText>
          <RegularText
            size={10}
            color={'#BDBDBD'}
            style={{marginTop: RFValue(5)}}>
            70% spent
          </RegularText>
        </View>
      </View>
      <View style={{marginTop: RFValue(32), flex: 1}}>
        <MediumText size={24}>Expenses</MediumText>
        <View style={{flex: 1, marginTop: RFValue(20)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={() => (
              <View style={styles.itemContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.dot} />
                  <MediumText>Item</MediumText>
                </View>
                <View>
                  <RegularText size={14}>Statistic</RegularText>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(32),
  },
  item: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: RFValue(16),
    width: RFValue(16),
    borderRadius: RFValue(8),
    backgroundColor: Colors.primary,
    marginRight: RFValue(10),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RFValue(16),
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
});

export default Insights;
