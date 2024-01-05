import { atom } from "recoil";

export const CardJson1 = atom({
  key: "CardJson1",
  default: [
    {
      index: 0,
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
      xPosition: 0,
      yPosition: 0
    },
  ],
});
