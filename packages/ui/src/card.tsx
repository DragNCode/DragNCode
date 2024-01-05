import React, { useState, useEffect } from "react";
import { Rect, Text, Group, Image } from "react-konva";

interface ICardProps {
  width: number;
  height: number;
  color: string;
  cornerRadius: number;
  headingColor: string;
  subTextColor: string;
  contentColor: string;
  buttonColor: string;
  headingFont: number;
  subTextFont: number;
  contentFont: number;
  buttonFont: number;
  headingText: string;
  subText: string;
  content: string;
  buttonText: string;
}

export const Card: React.FC<ICardProps> = ({
  width,
  height,
  color,
  cornerRadius,
  headingColor,
  subTextColor,
  contentColor,
  buttonColor,
  headingFont,
  subTextFont,
  contentFont,
  buttonFont,
  headingText,
  subText,
  content,
  buttonText,
}) => {
  return (
    <Group draggable>
      <Rect
        width={width}
        height={height}
        fill={color}
        cornerRadius={cornerRadius}
        shadowBlur={10}
      />

      {/* Text content inside the card */}
      <Group>
        <Text
          text={headingText}
          fontSize={headingFont}
          fontFamily="Arial"
          fill={headingColor}
          x={20}
          y={20}
        />

        <Text
          text={subText}
          fontSize={subTextFont}
          fontFamily="Arial"
          fill={subTextColor}
          x={20}
          y={50}
        />

        <Text
          text={content}
          fontSize={contentFont}
          fontFamily="Arial"
          fill={contentColor}
          x={20}
          y={80}
          width={260}
          align="left"
          padding={10}
        />

        {/* Button */}
        <Rect
          width={80}
          height={30}
          fill={buttonColor}
          cornerRadius={5}
          x={20}
          y={200}
          shadowBlur={5}
        />
        <Text
          text={buttonText}
          fontSize={buttonFont}
          fontFamily="Arial"
          fill="white"
          x={33}
          y={207}
        />
      </Group>
    </Group>
  );
};

interface ICardWithImageProps {
  width: number;
  height: number;
  color: string;
  cornerRadius: number;
  headingColor: string;
  subTextColor: string;
  contentColor: string;
  headingFont: number;
  subTextFont: number;
  contentFont: number;
  headingText: string;
  subText: string;
  content: string;
  iconColor: string;
  imageUrl?: string;
}

export const CardWithImage: React.FC<ICardWithImageProps> = ({
  width,
  height,
  color,
  cornerRadius,
  headingColor,
  subTextColor,
  contentColor,
  iconColor,
  headingText,
  headingFont,
  subText,
  subTextFont,
  contentFont,
  content,
  imageUrl
}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl ?? "https://via.placeholder.com/250x150";
    img.onload = () => {
      //@ts-ignore
      setImage(_prev => img);
    };
  }, []);

  return (
    <Group>
      <Rect
        width={width}
        height={height}
        fill={color}
        cornerRadius={cornerRadius}
        shadowBlur={10}
      />

      {/* Text and Image content inside the card */}
      <Group>
        {/* Avatar */}
        <Rect
          width={40}
          height={40}
          fill="lightgray"
          cornerRadius={20}
          x={20}
          y={20}
        />

        {/* Title and Date */}
        <Text
          text={headingText}
          fontSize={headingFont}
          fontFamily="Arial"
          fill={headingColor}
          x={70}
          y={20}
        />
        <Text
          text={subText}
          fontSize={subTextFont}
          fontFamily="Arial"
          fill={subTextColor}
          x={70}
          y={50}
        />

        {/* Image */}
        {image && (
          <Image image={image} width={width - 40} height={150} x={20} y={80} />
        )}

        {/* Content */}
        <Text
          text={content}
          fontSize={contentFont}
          fontFamily="Arial"
          fill={contentColor}
          x={20}
          y={240}
          width={260}
          align="left"
          padding={10}
        />

        {/* Sharing Icons */}
        <Group x={20} y={height - 50}>
          {/* Share Icon */}
          <Rect
            width={30}
            height={30}
            fill={iconColor}
            cornerRadius={5}
            shadowBlur={5}
            x={0}
            y={0}
          />
          <Text
            text="➤"
            fontSize={16}
            fontFamily="Arial"
            fill="white"
            x={8}
            y={6}
          />

          {/* Like Icon */}
          <Rect
            width={30}
            height={30}
            fill={iconColor}
            cornerRadius={5}
            shadowBlur={5}
            x={40}
            y={0}
          />
          <Text
            text="👍"
            fontSize={16}
            fontFamily="Arial"
            fill="white"
            x={48}
            y={6}
          />
        </Group>
      </Group>
    </Group>
  );
};

interface ISongCardProps {
  width: number;
  height: number;
  color: string;
  cornerRadius: number;
  headingColor: string;
  subTextColor: string;
  headingFont: number;
  subTextFont: number;
  headingText: string;
  subText: string;
}


export const SongCard: React.FC<ICardWithImageProps> = ({
  width,
  height,
  color,
  cornerRadius,
  headingColor,
  subTextColor,
  headingText,
  headingFont,
  subText,
  subTextFont,
}) => {

  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = "https://via.placeholder.com/250x150";
    img.onload = () => {
      //@ts-ignore
      setImage(_prev => img);
    };
  }, []);

  return (
    <Group>
      <Rect
        width={width}
        height={height}
        fill={color}
        cornerRadius={cornerRadius}
        shadowBlur={10}
      />

      {/* Text and Image content inside the card */}
      <Group>
        {/* Image */}
        {image && (
          <Image
            image={image}
            width={width * 0.4}
            height={height}
            x={width * 0.6}
          />
        )}

        {/* Song Details */}
        <Group x={20} y={20} width={width * 0.6} height={height}>
          {/* Heading (Song Name) */}
          <Text
            text={headingText}
            fontSize={headingFont}
            fontFamily="Arial"
            fill={headingColor}
          />

          {/* Subtext (Singer Name) */}
          <Text
            text={subText}
            fontSize={subTextFont}
            fontFamily="Arial"
            fill={subTextColor}
            y={30}
          />
        </Group>
      </Group>
    </Group>
  );
};
