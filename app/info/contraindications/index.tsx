import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Container, Zero, One, Two } from '~/components/P';
import { Link } from '~/components/Link';
import { StackScreen } from '~/components/StackScreen';
import { Href } from 'expo-router';

const links = {
  link1: 'info.contraindications.link1',
  link2: 'info.contraindications.link2',
  link3: 'info.contraindications.link3',
  link4: 'info.contraindications.link4',
  link5: 'info.contraindications.link5',
  link6: 'info.contraindications.link6',
  link7: 'info.contraindications.link7',
  link8: 'info.contraindications.link8',
  link9: 'info.contraindications.link9',
  link10: 'info.contraindications.link10',
  link11: 'info.contraindications.link11',
};
const getLinks = () => {
  const { t } = useTranslation();
  const linksObject: Record<string, JSX.Element> = {};
  Object.keys(links).forEach((l, idx) => {
    const link = links[l as keyof typeof links];
    linksObject[`link${idx + 1}`] = (
      <Link
        style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
        href={`/info/contraindications/link/${link}` as Href<string>}
        name={t(`${link}.link`)}></Link>
    );
  });
  return linksObject;
};
export default function Contraindications() {
  const { t } = useTranslation();

  return (
    <>
      <StackScreen title={t('info.contraindications.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans
          i18nKey={`info.contraindications.data`}
          components={{
            container: <Container></Container>,
            ...getLinks(),
            zero: <Zero style={{ marginVertical: 20 }}></Zero>,
            one: <One></One>,
            two: <Two></Two>,
            i: <One></One>,
          }}
        />
      </ScrollView>
    </>
  );
}
