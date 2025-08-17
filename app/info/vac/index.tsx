import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Link } from '~/components/Link';
import { Container, One, Two, Zero } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
const links = { link1: 'info.vac.link1', link2: 'info.vac.link2', link3: 'info.vac.link3' };

export default function Vaccination() {
    const { t } = useTranslation('');
    return (
        <>
            <StackScreen title={t('info.vac.title')} />
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                    backgroundColor: 'white',
                }}>
                <Trans
                    i18nKey={`info.vac.data`}
                    values={{ link1: t('info.vac.link1') }}
                    components={{
                        container: <Container></Container>,
                        link1: (
                            <Link
                                style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
                                href={`/info/vac/link/${links.link1}`}
                                name={t(`${links.link1}.link`)}></Link>
                        ),
                        link2: (
                            <Link
                                style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
                                href={`/info/vac/link/${links.link2}`}
                                name={t(`${links.link2}.link`)}></Link>
                        ),
                        link3: (
                            <Link
                                style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
                                href={`/info/vac/link/${links.link3}`}
                                name={t(`${links.link3}.link`)}></Link>
                        ),

                        zero: <Zero></Zero>,
                        one: <One></One>,
                        two: <Two></Two>,
                    }}
                />
            </ScrollView>
        </>
    );
}
