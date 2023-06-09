import { CardWrapper, Image, Label } from 'components/Sticker.styled';

export const Sticker = ({ sticker: { img, label }, onSelect, isSelected }) => {
  return (
    <CardWrapper onClick={onSelect}>
      <Image src={img} alt={label} />
      {isSelected && <Label>{label}</Label>}
    </CardWrapper>
  );
};
