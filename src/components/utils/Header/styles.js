import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '13%',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  backButton: {
    justifyContent: 'center',
    height: 60,
    width: 60,
  },
  contentLeft: {
      width: "25%",
      padding: '5%',
  },
  contentCenter: {
    width: "50%",
    alignItems: 'center',
  },
  contentRight: {
      width: "25%",
  }
});

export default styles;
