import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';

import useTheme from '_hooks/useTheme';
import {IButtonOutline} from '.';
import {ButtonBody} from './Button';

const Outline = ({
  borderWidth,
  titleSize = 'base',
  titleStyle,
  ...props
}: IButtonOutline) => {
  const {Colors, Common} = useTheme();

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[
        Common.button.outline,
        {
          borderWidth: borderWidth
            ? borderWidth
            : Common.button.outline.borderWidth,
        },
        props.style ? props.style : {},
      ]}>
      {props.loading ? (
        <ActivityIndicator size="large" color={Colors.LightGray} />
      ) : (
        <ButtonBody
          {...props}
          title={props.title}
          titleSize={titleSize}
          titleStyle={titleStyle}
          iconColor={Colors.LightGray}
        />
      )}
    </TouchableOpacity>
  );
};

export default Outline;
