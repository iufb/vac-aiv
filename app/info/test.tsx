import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { UIText } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
import { RadioButtonsGroup } from '~/components/Test';

export default function Test() {
    const { t } = useTranslation();
    const [answersState, setAnswers] = useState<Record<number, string>>({});
    const test = t('info.test.data', { returnObjects: true }) as {
        question: string;
        answers: string[];
        correct_answer: string;
    }[];
    const checkTest = () => {
        if (Object.keys(answersState).length < 20) {
            Alert.alert(t('info.test.alert.error'));
            return;
        }
        let right = 0;
        let wrong = [];
        for (let i = 0; i < test.length; i++) {
            if (test[i].correct_answer == answersState[i]) {
                right++;
            } else {
                wrong.push(i + 1);
                console.log(test[i].correct_answer, answersState[i]);
            }
        }
        Alert.alert(t('info.test.alert.res', { right, wrong: wrong.join(',') }));
    };
    return (
        <>
            <StackScreen title={t('info.test.title')} />
            <ScrollView
                contentContainerStyle={{
                    marginVertical: 20,
                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingRight: 10,
                    paddingBottom: 30,
                    gap: 10,
                    backgroundColor: 'white',
                }}>
                {test.map(({ question, answers, correct_answer }, idx) => (
                    <View style={{ gap: 10 }} key={idx}>
                        <UIText>{question}</UIText>
                        <RadioButtonsGroup
                            values={answers}
                            onSelect={(value) => {
                                setAnswers({ ...answersState, [idx]: value });
                            }}
                        />
                    </View>
                ))}
                <View />
                <TouchableOpacity
                    onPress={checkTest}
                    style={{
                        marginBottom: 30,
                        width: '100%',
                        backgroundColor: '#611bf8',
                        paddingVertical: 10,
                        borderRadius: 10,
                    }}>
                    <UIText
                        style={{
                            textAlign: 'center',
                            color: 'white',
                        }}>
                        {t('info.test.checkButton')}
                    </UIText>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}
