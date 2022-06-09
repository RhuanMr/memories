import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTitle: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  Title: {
      fontSize: 20,
      color: 'black',
  },
  plusButton: {
      marginLeft: '5%'
  },
  searchButton: {
    marginRight: '2%'
  }
});

export default styles;
