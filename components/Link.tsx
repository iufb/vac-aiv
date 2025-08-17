import { LinkProps, useRouter } from 'expo-router';
import {
    ImageSourcePropType,
    StyleProp,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { UIText } from '~/components/P';
import { getDimenstions, isTablet } from '~/components/constants';
import { rS, rV } from '~/components/utils';
import ChevronRight from '../assets/icons/chevron-right.svg';
import LinkIcon from '../assets/icons/link.svg';
interface CustomLinkProps {
    href: LinkProps['href'];
    name: string;
    style?: StyleProp<ViewStyle>;
    img?: ImageSourcePropType;
}
export const Link = ({ href, img, name, style }: CustomLinkProps) => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.push(href)} style={{ width: '100%' }}>
            <View
                style={[
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        paddingVertical: rV(10),
                        paddingRight: rS(15),
                    },
                    style,
                ]}>
                <View
                    style={[
                        { flexDirection: 'row', gap: 10, alignItems: 'center' },
                        isTablet ? { width: img ? 600 : '95%' } : { width: img ? 270 : '95%' },
                    ]}>

                    <LinkIcon width={16} height={16} style={{ marginHorizontal: 5 }} />
                    <UIText
                        style={[
                            { textAlign: 'left', color: '#1f2937', maxWidth: getDimenstions().width - 119 },
                        ]}>
                        {name}
                    </UIText>
                </View>
                <ChevronRight width={24} height={24} />
            </View>
        </TouchableOpacity>
    );
};
