import { Group, Rect, Text, Image } from "react-konva";
import { ICardWithImage, ISimpleCard } from "@/types/type";
import { selectedProperty } from "@/atoms/elements/selectedProperty";
import { useRecoilState } from "recoil";

export const SimpleCard: React.FC<ISimpleCard> = (props) => {

    const { cardWidth, cardHeight, cornerRadius, title, content } = props;

    const [prop, setProp] = useRecoilState(selectedProperty);

    return (
        <Group draggable onClick={() => {setProp('Card')}} >
            <Rect
                width={cardWidth}
                height={cardHeight}
                fill="#fff"
                cornerRadius={cornerRadius}
                shadowColor="rgba(0, 0, 0, 0.3)"
                shadowBlur={5}
            />
            <Text
                text={title}
                fontSize={18}
                fill="#333"
                align="center"
                y={cardHeight / 4 - 10}
                width={cardWidth}
            />
            <Text
                text={content}
                fontSize={14}
                fill="#555"
                align="left"
                x={10}
                y={cardHeight / 2 - 20}
                width={cardWidth - 20}
                lineHeight={1.2}
            />
        </Group>
    )
};

export const CardWithImage: React.FC<ICardWithImage> = (props) => {

    const { cardWidth, cardHeight, cornerRadius, title, content, imageUrl } = props;

    return (
        <Group draggable >
            <Rect
                width={cardWidth}
                height={cardHeight}
                fill="#fff"
                cornerRadius={cornerRadius}
                shadowColor="rgba(0, 0, 0, 0.3)"
                shadowBlur={5}
            />
            <Image image={imageUrl} width={cardWidth} height={cardHeight*0.4} />
            <Text
                text={title}
                fontSize={18}
                fill="#fff"
                align="center"
                y={cardHeight * 0.5}
                width={cardWidth}
            />
            <Text
                text={content}
                fontSize={14}
                fill="#fff"
                align="left"
                x={10}
                y={cardHeight / 2 - 20}
                width={cardWidth - 20}
                lineHeight={1.2}
            />
        </Group>
    );
}