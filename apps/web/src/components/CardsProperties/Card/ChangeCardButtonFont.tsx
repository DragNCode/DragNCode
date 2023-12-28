import { CardButtonFont } from "@/atoms/elements/Card/CardButtonFont";
import { CardContentFont } from "@/atoms/elements/Card/CardContentFont";
import { useHandleCardButtonFontChange } from "@/helperFunctions/Cards/Card/handleCardButtonFontChange";
import { useHandleContentFontChange } from "@/helperFunctions/Cards/Card/handleContentFontChange";
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const ChangeCardButtonFont = () => {
  const [content, setContent] = useRecoilState(CardButtonFont);
  const handleContentChange = useHandleCardButtonFontChange();

  useEffect(() => {
    handleContentChange();
  }, [content])

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">Button Font: </Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        className="bg-white text-black ml-2"
        onChange={(e) => {
            const value = e.target.value;
            setContent(value === "" ? 0 : parseInt(value));
        }}
        value={content}
      />
    </div>
  );
};

