export interface ISimpleButton {
    buttonWidth: number,
    buttonHeight: number,
    cornerRadius: number,
    label: string,
    color: string
};

export interface ISimpleInput {
    inputWidth: number,
    inputHeight: number,
    cornerRadius: number,
    label: string
};

export interface ISimpleCard {
    cardWidth: number,
    cardHeight: number,
    cornerRadius: number,
    title: string,
    content: string
};

export interface ICardWithImage {
    cardWidth: number,
    cardHeight: number,
    cornerRadius: number,
    title: string,
    content: string,
    imageUrl: CanvasImageSource | undefined
};

export const elements = [
    'Button',
    'Card',
    'Input',
];


export const elementsObject = {
    Button: 'Button',
    Card: 'Card',
    Input: 'Input',
    SimpleCard: 'SimpleCard',
    CardWithImage: 'CardWithImage',
    SongCard: 'SongCard',
    CustomButton: 'CustomButton',
    OutlineButton:'OutlineButton',
    TextButton:'TextButton',
    Checkbox:'Checkbox',
    CustomInput:'CustomInput',
    RadioButton:'RadioButton'
};

export const SelectItems = [
    'Elements',
    'Components',
    'Pages',
    'Text'
];
