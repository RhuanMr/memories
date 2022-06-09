import {StyleSheet} from 'react-native';
import COLORS from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: "87%",
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "auto",
    alignItems: 'center',
  },
  title: {
      fontSize: 25,
      color: 'black',
      marginTop: '10%',
  },
  containerCards: {
    width: "80%",
    height: "60%",
    marginBottom: "5%",
    justifyContent: 'space-evenly'
  },
});

export default styles;
