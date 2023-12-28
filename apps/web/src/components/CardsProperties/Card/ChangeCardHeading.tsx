import { CardHeading } from "@/atoms/elements/Card/CardHeading";
import { useHandleCardHeadingChange } from "@/helperFunctions/Cards/Card/handleHeadingChange";
import { TextField, Typography } from "@mui/material";
import { useRecoilState } from "recoil";

export const ChangeCardHeading = () => {
  const [content, setContent] = useRecoilState(CardHeading);
  const handleContentChange = useHandleCardHeadingChange();

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">Heading: </Typography>
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
