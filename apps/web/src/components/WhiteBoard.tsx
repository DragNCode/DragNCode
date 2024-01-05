import React, { useEffect, useState } from "react";
import { elementsToShow } from "@/atoms/elements/elementsToShow";
import { useRecoilState, useRecoilValue } from "recoil";
import { Group, Layer, Stage } from "react-konva";
import { elementsObject } from "@/types/type";
import { getString } from "@/utils/Objects";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { Card, CardWithImage, SongCard } from "@repo/ui/card";
import { SampleCardProperties } from "../atoms/elements/SampleCardProperties";
import { CustomButton, TextButton, OutlineButton } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import { CustomInput } from "@repo/ui/input";
import { CardWithImageProperties } from "@/atoms/elements/CardWithImage/CardWithImageProperties";
import { customButtonProperties } from "@/atoms/elements/Button/CustomButton/CustomButtonProperties";
import { outlineBtnProperties } from "@/atoms/elements/Button/OutlineButton/outlineBtnProperties";
import { inputProperties } from "@/atoms/elements/Input/inputProperties";
import { SongCardProperties } from "@/atoms/elements/SongCard/SongCardProperties";
import { CheckBoxProerty } from "@/atoms/elements/CheckBox/CheckboxProperty";
import { TextBtnProperties } from "@/atoms/elements/Button/TextButton/textBtnProperties";
import { CardJson1 } from "@/atoms/json1/Card";
import { CardWithImageJson1 } from "@/atoms/json1/CardWithImage";
import { SongCardJson1 } from "@/atoms/json1/SongCard";

const WhiteBoard: React.FC = () => {
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setStageSize({
        width: window.innerWidth * 0.6,
        height: window.innerHeight * 0.9,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const [elem, _setElem] = useRecoilState(elementsToShow);
  const [_currentElem, setCurrentElem] = useRecoilState(currentSelectedElement);
  const CardStyles = useRecoilValue(SampleCardProperties);
  const CardImageStyle = useRecoilValue(CardWithImageProperties);
  const CustomBtnStyle = useRecoilValue(customButtonProperties);
  const outlineBtnStyle = useRecoilValue(outlineBtnProperties);
  const CustomInputStyle = useRecoilValue(inputProperties);
  const SongCardStyle = useRecoilValue(SongCardProperties);
  const CheckBoxStyle = useRecoilValue(CheckBoxProerty);
  const TextBtnStyle = useRecoilValue(TextBtnProperties);

  const handleButtonClick = (number: number, word: string) => {
    const currentElement = {
      number: number,
      element: word,
    };
    setCurrentElem((prev) => currentElement);
  };

  const [CardJson, setCardJson] = useRecoilState(CardJson1);
  const [CardWithImageJson, setCardWithImageJson] = useRecoilState(CardWithImageJson1);
  const [SongCardJson, setSongCardJson] = useRecoilState(SongCardJson1);

  const JSONMapping = {
    [elementsObject.Card]: { value: CardJson, setValue: setCardJson },
    [elementsObject.CardWithImage]: { value: CardWithImageJson, setValue: setCardWithImageJson },
    [elementsObject.SongCard]: { value: SongCardJson, setValue: setSongCardJson }
  };

  const StyleMapping = {
    [elementsObject.Card]: CardStyles,
    [elementsObject.CardWithImage]: CardImageStyle,
    [elementsObject.SongCard]: SongCardStyle
  };

  const handleDrag = (
    currentSelectedElementWord: string,
    currentSelectedElementNumber: number,
    coordinates: { x: number; y: number }
  ) => {
    console.log(
      currentSelectedElementNumber,
      currentSelectedElementWord,
      coordinates
    );

    const STAGECOORDINATES = [
      { x: 716, y: 162 },
      { x: 1435, y: 162 },
      { x: 1440, y: 686 },
      { x: 716, y: 686 },
    ];

    const { value, setValue } = JSONMapping[currentSelectedElementWord];
    const style = StyleMapping[currentSelectedElementWord].find(
      (item) => item.index === currentSelectedElementNumber
    );

    if (!style) {
      
      const json = value.find(item => item.index === currentSelectedElementNumber);

      if (!json) {
        const json1 = {
          index: currentSelectedElementNumber,
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
          content:
            "This assumes that you are using these values as props in a React component. If you are",
          buttonText: "Click!",
          xPosition: coordinates.x - 716,
          yPosition: coordinates.y - 162
        };
        //@ts-ignore
        setValue(prev => [...prev, json1]);
      } else {
        //@ts-ignore
        setValue(prev => {
          return prev.map((p: any) => {
            if (p.index === currentSelectedElementNumber) {
              return {...p, xPosition: coordinates.x - 716, yPosition: coordinates.y - 162}
            } else {
              return p;
            }
          })
        })
      }

    } else {
      const json = value.find(item => item.index === currentSelectedElementNumber);

      if (!json) {
        const json1 = {
          ...style,
          xPosition: coordinates.x - 716,
          yPosition: coordinates.y - 162
        }
        //@ts-ignore
        setValue(prev => [...prev, json1]);
      } else {
        //@ts-ignore
        setValue(prev => {
          return prev.map((p: any) => {
            if (p.index === currentSelectedElementNumber) {
              return {...p, xPosition: coordinates.x - 716, yPosition: coordinates.y - 162}
            } else {
              return p;
            }
          })
        })
      }

    }
  };

  return (
    <Stage
      height={stageSize.height}
      width={stageSize.width}
      className="inline-block bg-white w-9/12 h-3/4 mt-24 rounded-md"
    >
      <Layer>
        {elem.map((item, _index) => {
          const { word, number } = getString(item);

          if (word === elementsObject.Card) {
            const style = CardStyles.find((item) => item.index === number)
              ? CardStyles.find((item) => item.index === number)
              : CardStyles[0];

            return (
              <Group
                draggable
                onClick={() => handleButtonClick(number, word)}
                key={number + word}
                onDragMove={(e) => {
                  const coordinates = {
                    x: e.evt.clientX,
                    y: e.evt.clientY,
                  };
                  handleDrag(word, number, coordinates);
                }}
              >
                <Card
                  width={style?.width ?? 300}
                  height={style?.height ?? 250}
                  color={style?.color ?? "#13274F"}
                  cornerRadius={style?.cornerRadius ?? 2}
                  headingColor={style?.headingColor ?? "#F0F8FF"}
                  subTextColor={style?.subTextColor ?? "#B2BEB5"}
                  contentColor={style?.contentColor ?? "white"}
                  buttonColor={style?.buttonColor ?? "B2BEB5"}
                  headingFont={style?.headingFont ?? 25}
                  subTextFont={style?.subTextFont ?? 15}
                  contentFont={style?.contentFont ?? 20}
                  buttonFont={style?.buttonFont ?? 15}
                  headingText={style?.headingText ?? "Sample Card"}
                  subText={style?.subText ?? "Subtext goes here"}
                  content={
                    style?.content ??
                    "This assumes that you are using these values as props in a React component. If you are "
                  }
                  buttonText={style?.buttonText ?? "Click!"}
                />
              </Group>
            );
          }

          if (word === elementsObject.CardWithImage) {
            const style = CardImageStyle.find((item) => item.index === number)
              ? CardImageStyle.find((item) => item.index === number)
              : CardImageStyle[0];

            console.log("from whiteboard", style?.width);

            return (
              <Group
                draggable
                key={number + word}
                onClick={() => handleButtonClick(number, word)}
                onDragMove={(e) => {
                  const coordinates = {
                    x: e.evt.clientX,
                    y: e.evt.clientY,
                  };
                  handleDrag(word, number, coordinates);
                }}
              >
                <CardWithImage
                  width={style?.width ?? 300}
                  height={style?.height ?? 400}
                  color={style?.color ?? "#13274F"}
                  cornerRadius={style?.cornerRadius ?? 2}
                  headingColor={style?.headingColor ?? "#F0F8FF"}
                  subTextColor={style?.subTextColor ?? "#B2BEB5"}
                  contentColor={style?.contentColor ?? "white"}
                  headingFont={style?.headingFont ?? 25}
                  subTextFont={style?.subTextFont ?? 15}
                  contentFont={style?.contentFont ?? 20}
                  headingText={style?.headingText ?? "Sample Card"}
                  subText={style?.subText ?? "Subtext goes here"}
                  content={
                    style?.content ??
                    "This assumes that you are using these values as props in a React comp"
                  }
                  iconColor={style?.iconColor ?? "#F0F8FF"}
                />
              </Group>
            );
          }

          if (word === elementsObject.SongCard) {
            const style = SongCardStyle.find((item) => item.index === number)
              ? SongCardStyle.find((item) => item.index === number)
              : SongCardStyle[0];

            return (
              <Group
                draggable
                key={number + word}
                onClick={() => handleButtonClick(number, word)}
                onDragMove={(e) => {
                  const coordinates = {
                    x: e.evt.clientX,
                    y: e.evt.clientY,
                  };
                  handleDrag(word, number, coordinates);
                }}
              >
                <SongCard
                  width={style?.width ?? 450}
                  height={style?.height ?? 200}
                  color={style?.color ?? "#13274F"}
                  cornerRadius={style?.cornerRadius ?? 2}
                  headingColor={style?.headingColor ?? "#F0F8FF"}
                  subTextColor={style?.subTextColor ?? "#B2BEB5"}
                  contentColor={style?.contentColor ?? "white"}
                  headingFont={style?.headingFont ?? 25}
                  subTextFont={style?.subTextFont ?? 15}
                  contentFont={style?.contentFont ?? 20}
                  headingText={style?.headingText ?? "Sample Card"}
                  subText={style?.subText ?? "Subtext goes here"}
                  content={
                    style?.content ??
                    "This assumes that you are using these values as props in a React component."
                  }
                  iconColor={style?.iconColor ?? "#F0F8FF"}
                />
              </Group>
            );
          }

          if (word === elementsObject.CustomButton) {
            const btnStyle = CustomBtnStyle.find(
              (item) => item.index === number
            )
              ? CustomBtnStyle.find((item) => item.index === number)
              : CustomBtnStyle[0];

            console.log(btnStyle, "btnstyle");

            return (
              <Group
                draggable
                key={number + word}
                onClick={() => handleButtonClick(number, word)}
              >
                <CustomButton
                  label={btnStyle?.label ?? "click me"}
                  onClick={() => console.log("hi")}
                  width={btnStyle?.width ?? 100}
                  height={btnStyle?.height ?? 30}
                  cornerRadius={btnStyle?.cornerRadius ?? 2}
                  color1={btnStyle?.color1 ?? "darkblue"}
                  color2={btnStyle?.color2 ?? "lightblue"}
                  colorHovered={btnStyle?.colorHovered ?? "blue"}
                  textColor={btnStyle?.textColor ?? "white"}
                  fontSize={btnStyle?.fontSize ?? 16}
                />
              </Group>
            );
          }

          if (word === elementsObject.OutlineButton) {
            const btnStyle = outlineBtnStyle.find(
              (item) => item.index === number
            )
              ? CustomBtnStyle.find((item) => item.index === number)
              : CustomBtnStyle[0];
            return (
              <Group
                draggable
                key={number + word}
                onClick={() => handleButtonClick(number, word)}
              >
                <OutlineButton
                  label={btnStyle?.label ?? "click me"}
                  onClick={() => console.log("hi")}
                  width={btnStyle?.width ?? 100}
                  height={btnStyle?.height ?? 30}
                  cornerRadius={btnStyle?.cornerRadius ?? 2}
                  color1={btnStyle?.color1 ?? "darkblue"}
                  color2={btnStyle?.color2 ?? "lightblue"}
                  colorHovered={btnStyle?.colorHovered ?? "blue"}
                  textColor={btnStyle?.textColor ?? "white"}
                  fontSize={btnStyle?.fontSize ?? 16}
                />
              </Group>
            );
          }

          if (word === elementsObject.TextButton) {
            const style = TextBtnStyle.find((item) => item.index === number)
              ? TextBtnStyle.find((item) => item.index === number)
              : TextBtnStyle[0];

            return (
              <Group
                draggable
                key={number + word}
                onClick={() => handleButtonClick(number, word)}
              >
                <TextButton
                  label={style?.label ?? "click"}
                  onClick={() => console.log("hi")}
                  fontSize={style?.fontSize ?? 16}
                  padding={10}
                  color1={style?.color1 ?? "#13274F"}
                  color2={style?.color2 ?? "#F0F8FF"}
                  colorHovered={style?.colorHovered ?? "#F0F8FF"}
                />
              </Group>
            );
          }

          if (word === elementsObject.CustomInput) {
            const inputStyle = CustomInputStyle.find(
              (item) => item.index === number
            )
              ? CustomInputStyle.find((item) => item.index === number)
              : CustomInputStyle[0];
            return (
              <Group
                draggable
                key={number}
                onClick={() => handleButtonClick(number, word)}
              >
                <CustomInput
                  value={inputStyle?.value ?? "click me"}
                  width={inputStyle?.width ?? 100}
                  height={inputStyle?.height ?? 30}
                  cornerRadius={inputStyle?.cornerRadius ?? 2}
                  color1={inputStyle?.color1 ?? "darkblue"}
                  color2={inputStyle?.color2 ?? "lightblue"}
                  fontSize={inputStyle?.fontSize ?? 16}
                  placeholder={inputStyle?.placeholder ?? "hi"}
                  variant={inputStyle?.variant ?? "outlined"}
                />
              </Group>
            );
          }

          if (word === elementsObject.Checkbox) {
            const style = CheckBoxStyle.find((item) => item.index === number)
              ? CheckBoxStyle.find((item) => item.index === number)
              : CheckBoxStyle[0];

            return (
              <Group
                draggable
                key={number}
                onClick={() => handleButtonClick(number, word)}
              >
                <Checkbox
                  width={style?.width ?? 20}
                  height={style?.height ?? 20}
                  cornerRadius={style?.cornerRadius ?? 5}
                  label={style?.label ?? "Label"}
                />
              </Group>
            );
          }

          return;
        })}
      </Layer>
    </Stage>
  );
};

export default WhiteBoard;
