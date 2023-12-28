import { CardSubText } from "@/atoms/elements/Card/CardSubtext";
import { useHandleSubTextChange } from "@/helperFunctions/Cards/Card/handleSubtextChange";
import { TextField, Typography } from "@mui/material";
import { useRecoilState } from "recoil";

export const ChangeCardSubtext = () => {
  const [content, setContent] = useRecoilState(CardSubText);
  const handleSubTextChange = useHandleSubTextChange();

  return (
    <div className="flex text-white mt-4">
      <Typography variant="h6">SubText: </Typography>
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
        className="bg-white text-black ml-2"
        onChange={(e) => {
            setContent(e.target.value);
            handleSubTextChange();
        }}
        value={content}
      />
    </div>
  );
};
