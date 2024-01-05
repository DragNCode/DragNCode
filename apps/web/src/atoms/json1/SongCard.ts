import { atom } from "recoil";

export const SongCardJson1 = atom({
  key: "SongCardJson1",
  default: [
    {
      index: 0,
      width: 450,
      height: 200,
      color: "#13274F",
      cornerRadius: 2,
      headingColor: "#F0F8FF",
      subTextColor: "#B2BEB5",
      contentColor: "white",
      headingFont: 25,
      subTextFont: 15,
      contentFont: 20,
      headingText: "Sample Card",
      subText: "Subtext goes here",
      content:
        "This assumes that you are using these values as props in a React component.",
      iconColor: "#F0F8FF",
      xPosition: 0,
      yPosition: 0
    },
  ],
});
