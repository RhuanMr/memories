import {StyleSheet} from 'react-native';
import COLORS from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    borderRadius: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    height: 100,
    backgroundColor: COLORS.SECONDARY,
    marginVertical:'3%'
  },
  contentTop: {
    height: '25%',
  },
  contentCenter: {
    height: '50%',
    justifyContent: 'center'
  },
  contentBottom: {
    height: '25%',
  },
  editButton: {

  },
  dateTitle: {
    color: '#000',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
