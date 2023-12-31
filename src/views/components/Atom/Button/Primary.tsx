import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {ButtonBody} from './Button';
import {IButtonPrimary} from './index';
import useTheme from '_hooks/useTheme';

const Primary = ({
  title,
  loading,
  colors,
  titleSize = 'base',
  borderWidth,
  ...props
}: IButtonPrimary) => {
  const {Colors, Gutters, Common} = useTheme();
  const defaultColors = props.disabled
    ? Colors.LightGray
    : colors
    ? colors
    : Colors.Primary;

  return (
    <TouchableOpacity
      disabled={loading}
      {...props}
      activeOpacity={0.8}
      style={[
        Common.button.base,
        Gutters.tinyVPadding,
        {
          backgroundColor: defaultColors,
          borderColor: defaultColors,
          borderWidth: borderWidth
            ? borderWidth
            : Common.button.outline.borderWidth,
        },
        props.style ? props.style : {},
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.White} />
      ) : (
        <ButtonBody {...props} title={title} titleSize={titleSize} />
      )}
    </TouchableOpacity>
  );
};

export default Primary;
