import { CardSubTextFont } from "@/atoms/elements/Card/CardSubtextFont";
import { useHandleCardHeadingChange } from "@/helperFunctions/Cards/Card/handleHeadingChange";
import { useHandleSubTextFontChange } from "@/helperFunctions/Cards/Card/handleSubtextFontChange";
import { TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const ChangeCardSubTextFont = () => {
  const [content, setContent] = useRecoilState(CardSubTextFont);
  const handleContentChange = useHandleSubTextFontChange();

  useEffect(() => {
    handleContentChange();
  }, [content])

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">SubText Font: </Typography>
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
