import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Accordion } from '~/components/Accordion';
import { StackScreen } from '~/components/StackScreen';
import { isTablet } from '~/components/constants';

export default function Abbr() {
    const { t } = useTranslation();
    const data = t('home.content.3.data', { returnObjects: true }) as Array<{
        key: string;
        description: string;
    }>;

    return (
        <>
            <StackScreen title={t('home.content.3.title')} />
            <ScrollView
                contentContainerStyle={{ paddingVertical: 10 }}
                style={{ backgroundColor: 'white' }}>
                <View style={{ paddingVertical: 10, marginBottom: 30, paddingHorizontal: 5, gap: 10 }}>
                    {data.map((item: { key: string; description: string }) => (

                        <Accordion key={item.key} title={item.key}>
                            <View style={[{ flex: 1 }]}>
                                <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: isTablet ? 22 : 16 }}>
                                    {item.description}
                                </Text>
                            </View>
                        </Accordion>
                    ))}
                </View>
            </ScrollView>
        </>
    );
}
