import { CardHeight } from "@/atoms/elements/Card/CardHeight";
import { HeightIcFlag } from "@/atoms/elements/Card/HeightIcFlag";
import { SampleCardProperties } from "@/atoms/elements/SampleCardProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { elementsObject } from "@/types/type";
import { useRecoilState, useRecoilValue } from "recoil";

export const useHandleHChange = () => {

    const [CardStyles, setCardStyles] = useRecoilState(SampleCardProperties);
    const element = useRecoilValue(currentSelectedElement);
    const icFlag = useRecoilValue(HeightIcFlag);
    const height = useRecoilValue(CardHeight);
    
    const handleHChange = () => {
        if (element.element === elementsObject.Card) {
            const style = CardStyles.find((item) => item.index === element.number);
      
            if (style) {
              const updatedCardStyles = CardStyles.map((item) =>
                item.index === element.number
                  ? { ...item, height: icFlag ? height + 5 : height - 5 }
                  : item
              );
      
              setCardStyles(updatedCardStyles);
            } else {
              const newStyle = {
                index: element.number,
                height: icFlag ? height + 5 : height - 5,
                width: 300,
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

    return handleHChange;
}