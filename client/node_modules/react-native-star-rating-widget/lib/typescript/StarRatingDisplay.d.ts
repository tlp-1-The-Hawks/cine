import { StyleProp, ViewStyle } from 'react-native';
import { StarIconProps } from './StarIcon';
type Props = {
    rating: number;
    color?: string;
    emptyColor?: string;
    maxStars?: number;
    starSize?: number;
    enableHalfStar?: boolean;
    style?: StyleProp<ViewStyle>;
    starStyle?: StyleProp<ViewStyle>;
    StarIconComponent?: (props: StarIconProps) => JSX.Element;
    testID?: string;
};
declare const StarRatingDisplay: ({ rating, maxStars, starSize, color, emptyColor, style, starStyle, StarIconComponent, testID, }: Props) => JSX.Element;
export default StarRatingDisplay;
//# sourceMappingURL=StarRatingDisplay.d.ts.map