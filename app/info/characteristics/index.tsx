import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Link } from '~/components/Link';
import { StackScreen } from '~/components/StackScreen';

export default function Characteristics() {
    const { t } = useTranslation();
    const links = t('info.characteristics.links', { returnObjects: true }) as string[];
    return (
        <>
            <StackScreen title={t('info.characteristics.title')} />
            <ScrollView
                contentContainerStyle={{
                    padding: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 10,
                    justifyContent: 'center',
                }}>
                {links.map((link, idx) => (
                    <Link
                        key={link}
                        style={{ borderRadius: 10 }}
                        name={link}
                        href={`/info/deseases/${link}`}
                    />
                ))}
            </ScrollView>
        </>
    );
}
