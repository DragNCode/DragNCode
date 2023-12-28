import { CornerIcFlag } from "@/atoms/elements/Card/CornerIcFlag";
import { CornerRadius } from "@/atoms/elements/Card/CornerRadius";
import { useHandleRadiusChange } from "@/helperFunctions/Cards/Card/handleCornerRadiusChange";
import { Typography, ButtonGroup, Button } from "@mui/material";
import { useRecoilState } from "recoil";

export const ChangeCornerRadius = () => {
    const [borderRadius, setBorderRadius] = useRecoilState(CornerRadius);
    const [cornerIc, SetCornerIc] = useRecoilState(CornerIcFlag);
    const handleRadiusChange = useHandleRadiusChange();
    return (
        <div className="flex text-white mt-4">
          <Typography variant="h6">Corner Radius: </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                setBorderRadius((prev) => prev - 1);
                handleRadiusChange();
                SetCornerIc(false);
              }}
              className="bg-blue-600 ml-12"
            >
              -
            </Button>
            <Typography className="w-12 m-auto">{borderRadius}</Typography>
            <Button
              onClick={() => {
                setBorderRadius((prev) => prev + 1);
                handleRadiusChange();
                SetCornerIc(true);
              }}
              className="bg-blue-600"
            >
              +
            </Button>
          </ButtonGroup>
        </div>
      );
}