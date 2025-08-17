import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '~/components/Select';
import { storage } from '~/i18n';
const values = [
    { lang: 'ru', label: 'Русский' },
    { lang: 'en', label: 'English' },
    { lang: 'kz', label: 'Қазақша' },
];
const label = { ru: 'Русский', en: 'English', kz: 'Қазақша' };
export const LangPicker = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const loadLanguage = async () => {
            const savedLanguage = storage.getString('language');
            if (savedLanguage) {
                i18n.changeLanguage(savedLanguage);
            }
        };
        loadLanguage();
    }, [i18n]);
    const changeLang = async (lang: string) => {
        storage.set('language', lang)
        i18n.changeLanguage(lang);
    };
    return (
        <Select
            onSelect={changeLang}
            label={label[i18n.language as keyof typeof label]}
            values={values}
        />
    );
};
