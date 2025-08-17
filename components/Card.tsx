import { Href, Link } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  View,
  ViewProps,
} from 'react-native';
import { UIText } from '~/components/P';
import { isTablet } from '~/components/constants';
import { rMS, rS, rV } from '~/components/utils';
interface Props {
  title: string;
  link: Href<string>;
  img?: ImageSourcePropType;
  style?: StyleProp<ViewProps>;
}
const getCardHeight = () => {
  const { width, height } = Dimensions.get('window');
  if (width < 375) {
    return 120;
  }
  return isTablet ? 320 : 200;
};
export function Card({ title, img, style, link, ...props }: Props) {
  const { t } = useTranslation();
  return (
    <ImageBackground
      imageStyle={{ width: '100%' }}
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        opacity: 60,
        width: '48%',
        height: getCardHeight(),
      }}
      source={img}>
      <View
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          borderRadius: 10,
          zIndex: 30,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: 0.45,
        }}
      />
      <View
        style={{
          zIndex: 40,
          padding: rMS(7),
          borderRadius: 10,
          position: 'relative',
          height: '100%',
        }}>
        <View style={{ borderRadius: 10, overflow: 'hidden', alignSelf: 'flex-start' }}>
          <UIText
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#e2e8f0',
              paddingVertical: rV(5),
              paddingHorizontal: rS(10),
              borderRadius: 10,
              fontWeight: 900,
              lineHeight: rMS(16),
              fontSize: rMS(14),
              textAlign: 'center',
              color: 'black',
            }}>
            {title}
          </UIText>
        </View>
        <View
          style={{
            position: 'absolute',
            right: rS(15),
            bottom: rS(15),
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Link
            href={link}
            style={{
              backgroundColor: '#15803d',
              borderRadius: 15,
              color: '#e4e4e7',
              fontWeight: 'bold',
              fontSize: rMS(14),
              paddingHorizontal: rS(10),
              paddingVertical: rV(7),
            }}>
            {t('card.link')}
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}
