import { CardWidth } from "@/atoms/elements/Card/CardWidth";
import { IcFlag } from "@/atoms/elements/Card/IcFlag";
import { useHandleWChange } from "@/helperFunctions/Cards/Card/handleWidthChange";
import { Typography, ButtonGroup, Button } from "@mui/material";
import { useRecoilState } from "recoil";

export const ChangeWidth = () => {
    const [width, setWidth] = useRecoilState(CardWidth);
    const [icFlag, setWidthIcFlag] = useRecoilState(IcFlag);
    const handleWChange = useHandleWChange();
    return (
      <div className="flex text-white mt-4">
        <Typography variant="h6">Width: </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              setWidth((prev) => prev - 5);
              handleWChange();
              setWidthIcFlag(false);
            }}
            className="bg-blue-600 ml-12"
          >
            -
          </Button>
          <Typography className="w-12 m-auto">{width}</Typography>
          <Button
            onClick={() => {
              setWidth((prev) => prev + 5);
              handleWChange();
              setWidthIcFlag(true);
            }}
            className="bg-blue-600"
          >
            +
          </Button>
        </ButtonGroup>
      </div>
    );
  };