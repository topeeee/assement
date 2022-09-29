import {FlatList, StyleSheet, View} from 'react-native';
import RegularText from '../typography/RegularText';
import {RFValue} from 'react-native-responsive-fontsize';
import MediumText from '../typography/MediumText';

const ListComponent = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={[1, 2, 3, 4]}
      keyExtractor={(item, index) => index.toString() + item}
      renderItem={() => (
        <View style={{flexDirection: 'row', marginVertical: RFValue(10)}}>
          <View style={styles.box} />
          <View style={styles.item}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <MediumText>Header</MediumText>
              <RegularText size={14} color={'#BDBDBD'}>
                8m ago
              </RegularText>
            </View>
            <View style={{marginTop: RFValue(5)}}>
              <RegularText size={14}>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish.
              </RegularText>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    height: RFValue(50),
    width: RFValue(50),
    borderRadius: RFValue(8),
    backgroundColor: '#F6F6F6',
  },
  item: {
    flex: 1,
    marginLeft: RFValue(10),
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: RFValue(10)
  },
});

export default ListComponent;
