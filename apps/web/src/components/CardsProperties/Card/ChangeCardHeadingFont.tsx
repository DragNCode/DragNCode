import { CardHeadingFont } from "@/atoms/elements/Card/CardHeadingFont";
import { useHandleCardHeadingChange } from "@/helperFunctions/Cards/Card/handleHeadingChange";
import { useHandleHeadingFontChange } from "@/helperFunctions/Cards/Card/handleHeadingFontChange";
import { TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const ChangeCardHeadingFont = () => {
  const [content, setContent] = useRecoilState(CardHeadingFont);
  const handleContentChange = useHandleHeadingFontChange();

  useEffect(() => {
    handleContentChange();
  }, [content]);

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">Heading Font: </Typography>
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
