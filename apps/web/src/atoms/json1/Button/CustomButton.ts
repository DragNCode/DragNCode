import { atom } from "recoil";

export const CustomButtonJson1 = atom({
  key: "CustomButtonJson1",
  default: [
    {
      index: 0,
      label: "click me",
      width: 100,
      height: 30,
      cornerRadius: 2,
      color1: "darkblue",
      color2: "lightblue",
      colorHovered: "blue",
      textColor: "white",
      fontSize: 16,
      xPosition: 0,
      yPosition: 0
    },
  ],
});
