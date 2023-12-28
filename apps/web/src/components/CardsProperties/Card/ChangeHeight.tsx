import { CardHeight } from "@/atoms/elements/Card/CardHeight";
import { HeightIcFlag } from "@/atoms/elements/Card/HeightIcFlag";
import { useHandleHChange } from "@/helperFunctions/Cards/Card/handleHeightChange";
import { Typography, ButtonGroup, Button } from "@mui/material";
import { useRecoilState } from "recoil";

export const ChangeHeight = () => {
    const [height, setHeight] = useRecoilState(CardHeight);
    const [heightIc, setHeightIc] = useRecoilState(HeightIcFlag);
    const handleHChange = useHandleHChange();
    return (
      <div className="flex text-white mt-4">
        <Typography variant="h6">Height: </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              setHeight((prev) => prev - 5);
              handleHChange();
              setHeightIc(false);
            }}
            className="bg-blue-600 ml-12"
          >
            -
          </Button>
          <Typography className="w-12 m-auto">{height}</Typography>
          <Button
            onClick={() => {
              setHeight((prev) => prev + 5);
              handleHChange();
              setHeightIc(true);
            }}
            className="bg-blue-600"
          >
            +
          </Button>
        </ButtonGroup>
      </div>
    );
  };