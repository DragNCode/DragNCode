import { SampleCardProperties } from "@/atoms/elements/SampleCardProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { CardContent } from "@/atoms/elements/Card/CardContent";
import { elementsObject } from "@/types/type";
import { useRecoilState, useRecoilValue } from "recoil";

export const useHandleContentChange = () => {
  const element = useRecoilValue(currentSelectedElement);
  const [CardStyles, setCardStyles] = useRecoilState(SampleCardProperties);
  const content = useRecoilValue(CardContent);

  const handleContentChange = () => {
    if (element.element === elementsObject.Card) {
      const style = CardStyles.find((item) => item.index === element.number);

      if (style) {
        const updatedCardStyles = CardStyles.map((item) =>
          item.index === element.number ? { ...item, content: content } : item
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
          content: content,
          buttonText: "Click!",
        };

        setCardStyles((prev) => [...prev, newStyle]);
      }
    }
  };

  return handleContentChange;
};
