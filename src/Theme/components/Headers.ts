import {height, width} from '_theme/Layout';
import {CommonParams} from '_theme/theme';
import {StyleSheet} from 'react-native';

export default function <C>({Colors, Gutters, Layout}: CommonParams<C>) {
  const wrapper = {
    ...Gutters.tinyHPadding,
    ...Gutters.tinyVPadding,
    backgroundColor: Colors.white,
  };

  return StyleSheet.create({
    wrapper,
    headerBrandContent: {
      ...Gutters.tinyHPadding,
      ...Gutters.tinyVPadding,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    headerWithSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingVertical: width * 0.008,
    },
    headerLogo: {
      width: width * 0.35,
      height: height * 0.04,
    },
  });
}
