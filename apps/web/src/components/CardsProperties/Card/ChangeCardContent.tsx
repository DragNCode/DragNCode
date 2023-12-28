import { CardContent } from "@/atoms/elements/Card/CardContent";
import { useHandleContentChange } from "@/helperFunctions/Cards/Card/handleContentChange";
import { TextField, Typography } from "@mui/material";
import { useRecoilState } from "recoil";

export const ChangeCardContent = () => {
  const [content, setContent] = useRecoilState(CardContent);
  const handleContentChange = useHandleContentChange();

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">Content: </Typography>
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
        className="bg-white text-black ml-2"
        onChange={(e) => {
            setContent(e.target.value);
            handleContentChange();
        }}
        value={content}
      />
    </div>
  );
};
