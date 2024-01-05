import { SampleCardProperties } from "@/atoms/elements/SampleCardProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { useRecoilState, useRecoilValue } from "recoil";

export const ChangeCardProperties: React.FC = () => {
  
  const PostionSizeProperties = [
    {
      title: "width",
      value: 300,
      type: "number",
      category: "Number",
      name: "Width",
    },
    {
      title: "height",
      value: 250,
      type: "number",
      category: "Number",
      name: "Height",
    },
    {
      title: "cornerRadius",
      value: 2,
      type: "number",
      category: "Number",
      name: "Corner Radius",
    },
  ];

  const TextProperties = [
    {
      title: "headingText",
      value: "Sample Card",
      type: "string",
      category: "Text",
      name: "Heading",
    },
    {
      title: "subText",
      value: "Subtext goes here",
      type: "string",
      category: "Text",
      name: "SubText",
    },
    {
      title: "content",
      value:
        "This assumes that you are using these values as props in a React component.",
      type: "string",
      category: "Text",
      name: "Content",
    },
    {
      title: "buttonText",
      value: "Click!",
      type: "string",
      category: "Text",
      name: "Button",
    },
  ];

  const FontProperties = [
    {
      title: "headingFont",
      value: 25,
      type: "number",
      category: "Number",
      name: "Heading",
    },
    {
      title: "subTextFont",
      value: 15,
      type: "number",
      category: "Number",
      name: "SubText",
    },
    {
      title: "contentFont",
      value: 20,
      type: "number",
      category: "Number",
      name: "Content",
    },
    {
      title: "buttonFont",
      value: 15,
      type: "number",
      category: "Number",
      name: "Button",
    },
  ];

  const [Card, setCard] = useRecoilState(SampleCardProperties);
  const { number } = useRecoilValue(currentSelectedElement);

  const handlePropertyChange = (title: string, value: number | string) => {
    setCard((prev) => {
      const existingCardIndex = prev.findIndex((card) => card.index === number);

      if (existingCardIndex !== -1) {
        return prev.map((card, index) =>
          index === existingCardIndex ? { ...card, [title]: value } : card
        );
      } else {
        const newCard = {
          index: number,
          width: 300,
          height: 250,
          color: "#13274F",
          cornerRadius: 2,
          headingColor: "#F0F8FF",
          subTextColor: "#B2BEB5",
          contentColor: "white",
          buttonColor: "B2BEB5",
          headingFont: 25,
          subTextFont: 15,
          contentFont: 20,
          buttonFont: 15,
          headingText: "Sample Card",
          subText: "Subtext goes here",
          content:
            "This assumes that you are using these values as props in a React component. If you are",
          buttonText: "Click!",
        };
        (newCard as any)[title] = value;
        return [...prev, newCard];
      }
    });
  };

  return (
    <div>
      <hr className=" mt-4 w-52 m-auto" />
      <div>
        <p className="mt-4 ml-2 text-xl">Postion & Size</p>
        {PostionSizeProperties.map((property) => (
          <div className="flex align-middle items-center" key={property.name} >
            <p className="ml-6 m-6 inline-block w-24">{property.name}</p>
            <OutlinedInput
              onChange={(e) => {
                const value = e.target.value;
                handlePropertyChange(
                  property.title,
                  property.type === "number"
                    ? value === ""
                      ? 0
                      : parseFloat(value)
                    : value
                );
              }}
              value={
                Card.filter((card) => card.index === number).map(
                  (card) => (card as any)[property.title]
                )[0] ?? property.value
              }
            />
          </div>
        ))}
      </div>
      <hr className=" mt-4 w-52 m-auto" />
      <div>
        <p className="mt-4 ml-2 text-xl">Text</p>
        {TextProperties.map((property) => (
          <div key={property.name} >
            <p className="ml-24 mt-2 inline-block w-24">{property.name}</p>
            <OutlinedTextarea
              onChange={(e) => {
                const value = e.target.value;
                handlePropertyChange(
                  property.title,
                  property.type === "number"
                    ? value === ""
                      ? 0
                      : parseFloat(value)
                    : value
                );
              }}
              value={
                Card.filter((card) => card.index === number).map(
                  (card) => (card as any)[property.title]
                )[0] ?? property.value
              }
            />
          </div>
        ))}
      </div>
      <hr className=" mt-4 w-52 m-auto" />
      <div>
        <p className="mt-4 ml-2 text-xl">Font</p>
        {FontProperties.map((property) => (
          <div className="flex align-middle items-center" key={property.name} >
            <p className="ml-6 m-6 inline-block w-24">{property.name}</p>
            <OutlinedInput
              onChange={(e) => {
                const value = e.target.value;
                handlePropertyChange(
                  property.title,
                  property.type === "number"
                    ? value === ""
                      ? 0
                      : parseFloat(value)
                    : value
                );
              }}
              value={
                Card.filter((card) => card.index === number).map(
                  (card) => (card as any)[property.title]
                )[0] ?? property.value
              }
            />
          </div>
        ))}
      </div>
      <hr className=" mt-4 w-52 m-auto" />
    </div>
  );
};

interface OutlinedInputProps {
  value: number;
  onChange: (e: any) => void;
}

export const OutlinedInput: React.FC<OutlinedInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        id="outlined-input"
        value={value}
        onChange={onChange}
        className="w-16 py-2 pl-2 border rounded-md focus:outline-none text-gray inline-block focus:border-blue-500 transition-all h-8"
        style={{ background: "rgba(28, 37, 65, 0.5)" }}
      />
    </div>
  );
};

export const OutlinedTextarea: React.FC<OutlinedInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <textarea
      id="outlined-textarea"
      value={value}
      onChange={onChange}
      className="w-48 ml-8 py-2 pl-3 pr-10 mt-2 border rounded-md text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
      rows={2}
      style={{ background: "rgba(28, 37, 65, 0.5)" }}
    ></textarea>
  );
};
