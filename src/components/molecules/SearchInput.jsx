import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper />
      <PrimaryButton>検索</PrimaryButton>
      <SButtonWrapper />
    </SContainer>
  );
};

//inputとbuttonの間をdivのSButtonWrapperで区切ったので改行されちゃう
//改行を防ぐためにSContainerというdivをつくって横並びのCSSを当てる
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

//buttonの周りに枠を設定して枠にpaddingを設定して入力とボタンの間に余白を作る．
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
