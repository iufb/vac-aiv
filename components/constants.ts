import * as Device from 'expo-device';
import { Href } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
export const isTablet = Device.deviceType === Device.DeviceType.TABLET;
export const isIOS = Device.osName === 'iOS';
export const getDimenstions = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return { width, height };
};
