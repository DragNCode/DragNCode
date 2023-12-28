import { SampleCardProperties } from "@/atoms/elements/SampleCardProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { elementsObject } from "@/types/type";
import { useRecoilState, useRecoilValue } from "recoil";
import { CardButtonText } from "@/atoms/elements/Card/CardButtonText";

export const useHandleCardButtonTextChange = () => {
  const element = useRecoilValue(currentSelectedElement);
  const [CardStyles, setCardStyles] = useRecoilState(SampleCardProperties);
  const content = useRecoilValue(CardButtonText);

  const handleContentChange = () => {
    if (element.element === elementsObject.Card) {
      const style = CardStyles.find((item) => item.index === element.number);

      if (style) {
        const updatedCardStyles = CardStyles.map((item) =>
          item.index === element.number ? { ...item, buttonText: content } : item
        );

        setCardStyles(updatedCardStyles);
      } else {
        const newStyle = {
          index: element.number,
          width: 300,
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
          content: 'This assumes that you are using these values as props in a React component. If you are',
          buttonText: content,
        };

        setCardStyles((prev) => [...prev, newStyle]);
      }
    }
  };

  return handleContentChange;
};
