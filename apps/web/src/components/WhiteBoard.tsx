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
<<<<<<< HEAD
import { customButtonProperties } from "@/atoms/elements/Button/CustomButton/CustomButtonProperties";
=======
import { SongCardProperties } from "@/atoms/elements/SongCard/SongCardProperties";
>>>>>>> 219ede307ba3f40a1feed47d41f23cbebe65be04

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
<<<<<<< HEAD
  const CustomBtnStyle = useRecoilState(customButtonProperties);
=======
  const SongCardStyle = useRecoilValue(SongCardProperties);
>>>>>>> 219ede307ba3f40a1feed47d41f23cbebe65be04

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

              console.log('from whie', style?.width);

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

<<<<<<< HEAD
            console.log("from whiteboard", style?.width);

=======
>>>>>>> 219ede307ba3f40a1feed47d41f23cbebe65be04
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
        
            const btnStyle = CustomBtnStyle.find((item) => item.index === number)
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
                  label={"click"}
                  onClick={() => console.log("hi")}
                  width={100}
                  height={btnStyle[0]?.height}
                  cornerRadius={2}
                  color1="darkblue"
                  color2="lightblue"
                  colorHovered="blue"
                  textColor="white"
                  fontSize={16}
                />
              </Group>
            );
          }

          if (word === elementsObject.OutlineButton) {
            return (
              <Group>
                <OutlineButton
                  label={"click"}
                  onClick={() => console.log("hi")}
                />
              </Group>
            );
          }

          if (word === elementsObject.TextButton) {
            return (
              <Group>
                <TextButton label={"click"} onClick={() => console.log("hi")} />
              </Group>
            );
          }

          if (word === elementsObject.CustomInput) {
            return (
              <Group draggable>
                <CustomInput
                  value={"input"}
                  placeholder="Outlined"
                  width={300}
                  height={50}
                  variant="outlined"
                  fontSize={16}
                />
              </Group>
            );
          }

          if (word === elementsObject.Checkbox) {
            return (
              <Group draggable>
                <Checkbox label={"checkbox"} />
              </Group>
            );
          }

          if (word === elementsObject.RadioButton) {
            return (
              <Group draggable>
                <RadioButton
                  label="Label"
                  value="hi"
                  selectedValue="hi"
                  onChange={() => console.log("object")}
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
