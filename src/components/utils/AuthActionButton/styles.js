import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.VIOLET,
    borderRadius: 20,
    height: 50,
    width: 135,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title: {
    color: COLORS.SECONDARY,
    fontSize: 18,     
  }
});

export default styles;
