import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Link } from '~/components/Link';
import { Container, UIText } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
import { isTablet } from '~/components/constants';
import { appColors } from '~/components/consts/colors';
const links = {
    link1: 'info.time.link1',
    link2: 'info.time.link2',
};

interface Link {
    lvl1: string;
    lvl2: {
        name: string;
        href: string;
    }[];
}
export default function Time() {
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState('nac');
    const tabs = t('info.time.tabs', { returnObjects: true }) as string[];
    const nacLinks: Link[] = t('info.time.nacLinks', { returnObjects: true });
    const epidLinks: Link[] = t('info.time.epidLinks', { returnObjects: true });

    return (
        <>
            <StackScreen title={t('info.time.title')} />
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                    backgroundColor: 'white',
                    flexGrow: 1,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#f8fafc',
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                    }}>
                    {tabs
                        .map((tab, idx) => ({ label: tab, val: idx == 0 ? 'nac' : 'epid' }))
                        .map((tab) => (
                            <TouchableOpacity
                                key={tab.label}
                                onPress={() => setSelectedTab(tab.val)}
                                style={[
                                    { flex: 1 },
                                    tab.val == selectedTab
                                        ? { backgroundColor: appColors.primaryLight, paddingVertical: 9, borderRadius: 10 }
                                        : {},
                                ]}>
                                <UIText
                                    style={[
                                        { textAlign: 'center', fontSize: isTablet ? 20 : 15 },
                                        tab.val == selectedTab
                                            ? { fontWeight: 500, color: appColors.primary }
                                            : { fontWeight: 400 },
                                    ]}>
                                    {tab.label}
                                </UIText>
                            </TouchableOpacity>
                        ))}
                </View>
                <Container>
                    {(selectedTab == 'nac' ? nacLinks : epidLinks).map((link) => (
                        <Link
                            style={{ borderBottomColor: '#94a3b8', borderBottomWidth: 1, paddingBottom: 15 }}
                            key={link.lvl1}
                            href={{
                                pathname: `/info/time/link` as any,
                                params: { id: link.lvl1, other: encodeURIComponent(JSON.stringify(link)) },
                            }}
                            name={link.lvl1}
                        />
                    ))}
                </Container>
            </ScrollView>
        </>
    );
}
