//styles
import { Wrapper, Title, Subtitle, Text, Btn } from './TextSection.style';

const TextSection = ({ title, subtitle, text1, text2 }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Btn to='house-list'>Zobacz więcej</Btn>
    </Wrapper>
  );
};

export default TextSection;
