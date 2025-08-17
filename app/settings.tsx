import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { LangPicker } from "~/components/LangPicker";
import { UIText } from "~/components/P";
import { StackScreen } from "~/components/StackScreen";

export default function Index() {
    const { t } = useTranslation();
    return (
        <>
            <StackScreen title={t('settings.title')} />
            <View
                style={{
                    padding: 20,
                    backgroundColor: 'white',
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: 30,
                }}>
                <UIText>{t('settings.lang')}</UIText>
                <LangPicker />
            </View>
        </>
    );
}
