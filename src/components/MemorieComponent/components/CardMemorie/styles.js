import {StyleSheet} from 'react-native';
import COLORS from '../../../../styles/colors';


const styles = StyleSheet.create({
  container: {
    marginTop: '7%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    backgroundColor: COLORS.SECONDARY,
  },
  content: {
    justifyContent: 'space-between',
    padding: '10%',
    marginHorizontal: '5%',
    paddingHorizontal: "7%",
    paddingHorizontal: '5%',
    flexDirection: 'row',
  },
  contentCenter: {
    marginTop: '5%'
  },
  dateTitle: {
    color: COLORS.TEXT,
  },
  title: {
    color: COLORS.TEXT,
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default styles;
