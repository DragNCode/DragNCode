import { useRecoilState, useRecoilValue } from 'recoil';
import { elementsObject } from '@/types/type';
import { currentSelectedElement } from '@/atoms/elements/currentSelectedElement';
import { CardWidth } from '@/atoms/elements/Card/CardWidth';
import { IcFlag } from '@/atoms/elements/Card/IcFlag';
import { SampleCardProperties } from '@/atoms/elements/SampleCardProperties';

export const useHandleWChange = () => {
  const [CardStyles, setCardStyles] = useRecoilState(SampleCardProperties);
  const element = useRecoilValue(currentSelectedElement);
  const icFlag = useRecoilValue(IcFlag);
  const [width, setWidth] = useRecoilState(CardWidth);

  const handleWChange = () => {
    if (element.element === elementsObject.Card) {
      const style = CardStyles.find((item) => item.index === element.number);

      if (style) {
        const updatedCardStyles = CardStyles.map((item) =>
          item.index === element.number
            ? { ...item, width: icFlag ? width + 5 : width - 5 }
            : item
        );

        setCardStyles(updatedCardStyles);
      } else {
        const newStyle = {
          index: element.number,
          width: icFlag ? width + 5 : width - 5,
          height: 250,
          color: "#13274F",
          cornerRadius: 2,
          headingColor: "#F0F8FF",
          subTextColor: "#B2BEB5",
          contentColor: "white",
          buttonColor: "B2BEB5",
          headingFont: 25,
          subTextFont: 15,
          contentFont: 20,
          buttonFont: 15,
          headingText: "Sample Card",
          subText: "Subtext goes here",
          content:
            "This assumes that you are using these values as props in a React component. If you are",
          buttonText: "Click!",
        };

        setCardStyles((prev) => [...prev, newStyle]);
      }
    }
  };

  return handleWChange;
};
