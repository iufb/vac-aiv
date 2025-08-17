import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Container, One, Two, Zero } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
export default function Introdution() {
  const { t } = useTranslation();
  return (
    <>
      <StackScreen title={t('home.content.1.title')} />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        <Trans
          i18nKey={'home.content.1.info'}
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
