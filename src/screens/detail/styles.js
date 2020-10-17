import {Dimensions, StyleSheet} from 'react-native';
import {primaryColor, secondaryColor} from '../../styles';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  img: {
    height: height / 3.7,
    resizeMode: 'contain',
    width: width / 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderTopRightRadius: 15,
  },
  viewText: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: secondaryColor,
    marginTop: -40,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  viewTextTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  viewTextSubTitle: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  viewTextOverview: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'justify',
  },
  viewInfo: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewInfoText: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 10,
  },
  btn: {
    alignSelf: 'flex-end',
    backgroundColor: primaryColor,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    width: 40,
    height: 30,
    justifyContent: 'center',
  },
  btnIcon: {
    fontSize: 22,
    color: secondaryColor,
  },
});
