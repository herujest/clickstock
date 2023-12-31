import Text from '_atom/Text';
import useTheme from '_hooks/useTheme';
import {height, width} from '_theme/Layout';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const EmptyResult = ({
  title = 'Sorry!',
  description = 'The data you were looking for does not exist. Please try again later',
}: {
  title?: string;
  description?: string;
}) => {
  const {Images, Layout, Gutters} = useTheme();
  return (
    <View style={[Layout.center, Layout.fill, {height: height * 0.8}]}>
      <FastImage
        source={Images.notfound}
        style={[
          Gutters.smallBMargin,
          {width: width * 0.4, height: width * 0.4},
        ]}
      />

      <Text text={title} variant="semibold" />
      <Text text={description} style={{width: '80%', textAlign: 'center'}} />
    </View>
  );
};

export default EmptyResult;
