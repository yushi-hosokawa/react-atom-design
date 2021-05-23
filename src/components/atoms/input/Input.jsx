import styled from "styled-components";

//propsにplaceholder（背景文字）を受け取る
export const Input = (props) => {
  const { placeholder } = props;
  return <SInput tyoe="text" placeholder={placeholder} />;
};
const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
