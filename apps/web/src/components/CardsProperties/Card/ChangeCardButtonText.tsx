import { CardButtonText } from "@/atoms/elements/Card/CardButtonText";
import { useHandleCardButtonTextChange } from "@/helperFunctions/Cards/Card/handleCardButtonTextChange";
import { TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const ChangeCardButtonText = () => {
  const [content, setContent] = useRecoilState(CardButtonText);
  const handleContentChange = useHandleCardButtonTextChange();

  useEffect(() => {
    handleContentChange();
  }, [content])

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">Button Text: </Typography>
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
        className="bg-white text-black ml-2"
        onChange={(e) => {
            setContent(e.target.value);
        }}
        value={content}
      />
    </div>
  );
};
