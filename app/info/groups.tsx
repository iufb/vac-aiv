import { Trans, useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Container, P, Zero, One, Two } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function Groups() {
  const { t } = useTranslation('');
  return (
    <>
      <StackScreen title={t('info.groups.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans
          i18nKey={`info.groups.data`}
          components={{
            container: <Container></Container>,
            zero: <Zero></Zero>,
            one: <One></One>,
            two: <Two></Two>,
          }}
        />
      </ScrollView>
    </>
  );
}
