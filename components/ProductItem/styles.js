import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  carContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
    textAlign: 'center',
  },
  subtitleLink: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
