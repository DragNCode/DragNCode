import { useRecoilValue } from "recoil";
import { elementsObject } from "@/types/type";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { Typography } from "@mui/material";
import { CardImageProperties } from "./CardsProperties/CardWithImage/Properties";
import { CustomButtonProperties } from "./ButtonsProperty/CustomButton/Properties";
import { OutlineButtonProperties } from "./ButtonsProperty/OutlineButton/Properties";
import { CustomInputProperties } from "./InputProperties/Properties";
import { ChangeCardProperties } from "./CardsProperties/Card/Properties";
import { ChangeSongCardProperties } from "./CardsProperties/SongCard/Properties";
import { ChangeCheckBoxProperty } from "./CheckBoxProperty/CheckBox/Properties";
import { TextButtonProperties } from "./ButtonsProperty/TextButton/Properties";

const Properties: React.FC = () => {
  const element = useRecoilValue(currentSelectedElement);

  return (
    <div className="inline-block border-t border-l w-80 rounded-sm" style={{background: '#04151F'}} >
      <div>
        <Typography variant="h4" className=" ml-32">
          {element.element}
        </Typography>
      </div>

      {element.element === elementsObject.Card ? (
        <div className="overflow-y-scroll" style={{maxHeight: '88vh'}}   >
          <ChangeCardProperties />
        </div>
      ) : element.element === elementsObject.CardWithImage ? (
        <div>
          <CardImageProperties />
        </div>
      ) : element.element === elementsObject.SongCard ? (
        <div>
          <ChangeSongCardProperties />
        </div>
      ) : (
        <div></div>
      )}

      {element.element === elementsObject.CustomButton && (
        <div>
          <CustomButtonProperties />
        </div>
      )}

      {element.element === elementsObject.OutlineButton && (
        <div>
          <OutlineButtonProperties />
        </div>
      )}

      {element.element === elementsObject.CustomInput && (
        <div>
          <CustomInputProperties />
        </div>
      )}
      {element.element === elementsObject.Checkbox && (
        <div>
          <ChangeCheckBoxProperty />
        </div>
      )}

      {element.element === elementsObject.TextButton && (
        <div>
          <TextButtonProperties />
        </div>
      )}
    </div>
  );
};

export default Properties;
