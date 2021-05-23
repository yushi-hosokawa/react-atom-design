import styled from "styled-components";
import { BaseButton } from "./BaseButton";

//二種類目のボタンコンポーネント定義
export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//ボタンの基本CSSはBaseButton．ｊｓｘから取ってきて色だけ上書き
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
