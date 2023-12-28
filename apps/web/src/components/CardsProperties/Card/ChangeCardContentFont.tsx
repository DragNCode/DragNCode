import { CardContentFont } from "@/atoms/elements/Card/CardContentFont";
import { useHandleContentFontChange } from "@/helperFunctions/Cards/Card/handleContentFontChange";
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const ChangeCardContentFont = () => {
  const [content, setContent] = useRecoilState(CardContentFont);
  const handleContentChange = useHandleContentFontChange();

  useEffect(() => {
    handleContentChange();
  }, [content])

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">Content Font: </Typography>
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

