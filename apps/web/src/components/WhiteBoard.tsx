import React, { useEffect, useState } from "react";
import { elementsToShow } from "@/atoms/elements/elementsToShow";
import { useRecoilState, useRecoilValue } from "recoil";
import { Group, Layer, Stage } from "react-konva";
import { elementsObject } from "@/types/type";
import { getString } from "@/utils/Objects";
import { SimpleButton } from "@/draggables/Buttons";
import { SimpleInput } from "@/draggables/Inputs";
import { SimpleCard } from "@/draggables/Cards";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { ButtonText } from "@/atoms/elements/ButtonText";
import { InputProperties } from "@/atoms/elements/InputProperties";
import { CardProperties } from "@/atoms/elements/CardProperties";
import { button } from "@/atoms/json1/button";
import { card } from "@/atoms/json1/card";
import { input } from "@/atoms/json1/input";
import { Card, CardWithImage, SongCard } from "@repo/ui/card";
import { SampleCardProperties } from "../atoms/elements/SampleCardProperties";
import { CustomButton, TextButton, OutlineButton } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import { RadioButton, RadioGroup } from "@repo/ui/radio";
import { CustomInput } from "@repo/ui/input";
import { group } from "console";
import { CardWithImageProperties } from "@/atoms/elements/CardWithImage/CardWithImageProperties";
import { customButtonProperties } from "@/atoms/elements/Button/CustomButton/CustomButtonProperties";
import { outlineBtnProperties } from "@/atoms/elements/Button/OutlineButton/outlineBtnProperties";
<<<<<<< HEAD
import { inputProperties } from "@/atoms/elements/Input/inputProperties";
=======
import { SongCardProperties } from "@/atoms/elements/SongCard/SongCardProperties";
import { CheckBoxProerty } from "@/atoms/elements/CheckBox/CheckboxProperty";
import { TextBtnProperties } from "@/atoms/elements/Button/TextButton/textBtnProperties";
>>>>>>> 250f2e755a17d60c6b6af9cdeedaa4128a98e83b

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

  const [elem, setElem] = useRecoilState(elementsToShow);
  const [currentElem, setCurrentElem] = useRecoilState(currentSelectedElement);
  const [buttonJson, setButtonJson] = useRecoilState(button);
  const [cardJson, setCardJson] = useRecoilState(card);
  const [inputJson, setInputJson] = useRecoilState(input);
  const attributes = useRecoilValue(ButtonText);
  const inputAttributes = useRecoilValue(InputProperties);
  const cardAttributes = useRecoilValue(CardProperties);

  const handleButtonClick = (number: number, word: string) => {
    setCurrentElem({
      number: number,
      element: word,
    });
  };

  const handleInputClick = (number: number, word: string) => {
    setCurrentElem({
      number: number,
      element: word,
    });
  };

  const handleButtonDrag = (
    number: number,
    word: string,
    coordinates: { x: number; y: number }
  ) => {
    const uniqueId: string = `${word}${number}`;
    let buttonWidth: number, buttonHeight: number;
    attributes.width.forEach((item) => {
      if (item[0] === number) {
        buttonWidth = item[1];
      }
    });
    attributes.height.forEach((item) => {
      if (item[0] === number) {
        buttonHeight = item[1];
      }
    });

    const buttonInfo = {
      id: uniqueId,
      coordinates: {
        x: coordinates.x,
        y: coordinates.y,
      },
      properties: {
        // @ts-ignore
        width: buttonWidth ? buttonWidth : 140,
        // @ts-ignore
        height: buttonHeight ? buttonHeight : 40,
      },
    };
    const alreadyPresentButton = buttonJson.find(
      (item) => item.id === uniqueId
    );
    if (alreadyPresentButton) {
      const updatedButtonJson = buttonJson.map((item) => {
        if (item.id === uniqueId) {
          return {
            ...item,
            coordinates: {
              x: coordinates.x,
              y: coordinates.y,
            },
            properties: {
              width: buttonWidth ? buttonWidth : 140,
              height: buttonHeight ? buttonHeight : 40,
            },
          };
        } else {
          return item;
        }
      });
      setButtonJson(updatedButtonJson);
    } else {
      setButtonJson([...buttonJson, buttonInfo]);
    }
  };

  const handleCardDrag = (
    number: number,
    word: string,
    coordinates: {
      x: number;
      y: number;
    }
  ) => {
    const uniqueId: string = `${word}${number}`;
    let cardWidth: number = 250,
      cardHeight: number = 200;
    cardAttributes.width.forEach((item) => {
      if (item[0] === number) {
        cardWidth = item[1];
      }
    });
    cardAttributes.height.forEach((item) => {
      if (item[0] === number) {
        cardHeight = item[1];
      }
    });

    const cardInfo = {
      id: uniqueId,
      coordinates: {
        x: coordinates.x,
        y: coordinates.y,
      },
      properties: {
        width: cardWidth,
        height: cardHeight,
      },
    };
    const alreadyPresentCard = cardJson.find((item) => item.id === uniqueId);
    if (alreadyPresentCard) {
      const updatedCardJson = cardJson.map((item) => {
        if (item.id === uniqueId) {
          return {
            ...item,
            coordinates: {
              x: coordinates.x,
              y: coordinates.y,
            },
            properties: {
              width: cardWidth,
              height: cardHeight,
            },
          };
        } else {
          return item;
        }
      });
      setCardJson(updatedCardJson);
    } else {
      setCardJson([...cardJson, cardInfo]);
    }
  };

  const handleInputDrag = (
    number: number,
    word: string,
    coordinates: {
      x: number;
      y: number;
    }
  ) => {
    const uniqueId: string = `${word}${number}`;
    let inputWidth: number = 250,
      inputHeight: number = 30;
    inputAttributes.width.forEach((item) => {
      if (item[0] === number) {
        inputWidth = item[1];
      }
    });
    inputAttributes.height.forEach((item) => {
      if (item[0] === number) {
        inputHeight = item[1];
      }
    });

    const inputInfo = {
      id: uniqueId,
      coordinates: {
        x: coordinates.x,
        y: coordinates.y,
      },
      properties: {
        width: inputWidth,
        height: inputHeight,
      },
    };
    const alreadyPresentInput = inputJson.find((item) => item.id === uniqueId);
    if (alreadyPresentInput) {
      const updatedInputJson = inputJson.map((item) => {
        if (item.id === uniqueId) {
          return {
            ...item,
            coordinates: {
              x: coordinates.x,
              y: coordinates.y,
            },
            properties: {
              width: inputWidth,
              height: inputHeight,
            },
          };
        } else {
          return item;
        }
      });
      setInputJson(updatedInputJson);
    } else {
      setInputJson([...inputJson, inputInfo]);
    }
  };

  const CardStyles = useRecoilValue(SampleCardProperties);
  const CardImageStyle = useRecoilValue(CardWithImageProperties);
  const CustomBtnStyle = useRecoilValue(customButtonProperties);
  const outlineBtnStyle = useRecoilValue(outlineBtnProperties);
<<<<<<< HEAD
  const CustomInputStyle = useRecoilValue(inputProperties)
=======
  const SongCardStyle = useRecoilValue(SongCardProperties);
  const CheckBoxStyle = useRecoilValue(CheckBoxProerty);
  const TextBtnStyle = useRecoilValue(TextBtnProperties);
>>>>>>> 250f2e755a17d60c6b6af9cdeedaa4128a98e83b

  return (
    <Stage
      height={stageSize.height}
      width={stageSize.width}
      className="inline-block bg-teal-700 rounded-md"
    >
      <Layer>
        {elem.map((item, index) => {
          const { word, number } = getString(item);

          // here we have access to number so we can check something like... [[1, hi], [2,bi]]

          if (word === elementsObject.Button) {
            //@ts-ignore
            let buttonText,
              buttonWidth = 140,
              buttonHeight = 40;
            attributes.text.forEach((item) => {
              if (item[0] === number) {
                buttonText = item[1];
              }
            });
            attributes.width.forEach((item) => {
              if (item[0] === number) {
                buttonWidth = item[1];
              }
            });
            attributes.height.forEach((item) => {
              if (item[0] === number) {
                buttonHeight = item[1];
              }
            });

            return (
              <Group
                onClick={() => handleButtonClick(number, word)}
                draggable
                onDragMove={(e) => {
                  handleButtonDrag(number, word, {
                    x: e.evt.clientX,
                    y: e.evt.clientY,
                  });
                }}
                key={number + word}
              >
                <SimpleButton
                  buttonHeight={buttonHeight ? buttonHeight : 40}
                  buttonWidth={buttonWidth ? buttonWidth : 140}
                  color="#4dd0e1"
                  cornerRadius={4}
                  label={buttonText ? buttonText : "Click Me!"}
                  key={number}
                />
              </Group>
            );
          }

          if (word === elementsObject.SimpleCard) {
            let cardWidth, cardHeight;
            cardAttributes.height.forEach((item) => {
              if (item[0] === number) {
                cardHeight = item[1];
              }
            });
            cardAttributes.width.forEach((item) => {
              if (item[0] === number) {
                cardWidth = item[1];
              }
            });

            return (
              <Group
                onClick={() => handleButtonClick(number, word)}
                draggable
                onDragMove={(e) => {
                  handleCardDrag(number, word, {
                    x: e.evt.clientX,
                    y: e.evt.clientY,
                  });
                }}
                key={number + word}
              >
                <SimpleCard
                  cardWidth={cardWidth ? cardWidth : 250}
                  cardHeight={cardHeight ? cardHeight : 200}
                  title="This is the title"
                  content="This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title"
                  cornerRadius={4}
                  key={index}
                />
              </Group>
            );
          }

          if (word === elementsObject.Input) {
            let inputWidth, inputHeight;
            inputAttributes.height.forEach((item) => {
              if (item[0] === number) {
                inputHeight = item[1];
              }
            });
            inputAttributes.width.forEach((item) => {
              if (item[0] === number) {
                inputWidth = item[1];
              }
            });

            return (
              <Group
                onClick={() => handleInputClick(number, word)}
                draggable
                onDragMove={(e) => {
                  handleInputDrag(number, word, {
                    x: e.evt.clientX,
                    y: e.evt.clientY,
                  });
                }}
                key={number + word}
              >
                <SimpleInput
                  inputWidth={inputWidth ? inputWidth : 250}
                  inputHeight={inputHeight ? inputHeight : 30}
                  cornerRadius={2}
                  label="Enter text here..."
                  key={index}
                />
              </Group>
            );
          }

          if (word === elementsObject.Card) {
            const style = CardStyles.find((item) => item.index === number)
              ? CardStyles.find((item) => item.index === number)
              : CardStyles[0];

            console.log("from whie", style?.width);

            return (
              <Group
                draggable
                onClick={() => handleButtonClick(number, word)}
                key={number}
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
                key={number}
                onClick={() => handleButtonClick(number, word)}
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
                key={number}
                onClick={() => handleButtonClick(number, word)}
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
                key={number}
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
                key={number}
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
                key={number}
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
