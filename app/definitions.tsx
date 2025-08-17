import { Trans, useTranslation } from 'react-i18next';

import * as Device from 'expo-device';
import { StackScreen } from '~/components/StackScreen';
import { P } from '~/components/P';
import { ScrollView, Text } from 'react-native';

export default function Definitions() {
  const { t } = useTranslation();
  return (
    <>
      <StackScreen title={t('home.content.2.title')} />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        <Trans
          i18nKey={'home.content.2.info'}
          components={{
            p: <P></P>,
            r: (
              <Text
                style={{
                  color: '#b91c1c',
                  fontWeight: '900',
                }}></Text>
            ),
          }}
        />
      </ScrollView>
    </>
  );
}
