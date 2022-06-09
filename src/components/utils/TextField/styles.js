import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  TextField: {
    color: COLORS.TEXT,
    paddingLeft: "5%",
    width: '80%',
    height: 60,
  },
  container: {
    borderBottomColor: COLORS.TEXT,
    borderBottomWidth: 1,
  },
});

export default styles;
