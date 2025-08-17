import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { P } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function Rules() {
  const { t } = useTranslation('');
  return (
    <>
      <StackScreen title={t('info.rules.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans i18nKey={`info.rules.data`} components={{ p: <P></P> }} />
      </ScrollView>
    </>
  );
}
