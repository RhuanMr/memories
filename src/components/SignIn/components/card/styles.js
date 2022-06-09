import {StyleSheet} from 'react-native';
import COLORS from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: 250,
    alignItems: 'center',
  },
  image: {
     height: 100,
     width: 100,
     margin: "5%",
  },
  containerCards: {
      width: "80%",
  },
  containerButtons: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 70,
    flexDirection: "row",
    alignSelf: "center",
  }
});

export default styles;
