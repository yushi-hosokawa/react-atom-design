import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/IuJc2qh2TcA",
    name: `たけし${val}`,
    email: "12345example.com",
    phone: "00-00-0000",
    company: {
      name: "てすと株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  //isAdiminに値が無ければfalseになるように三項演算子で指定
  const isAdmin = state ? state.isAdmin : false;
  console.log(`users:${isAdmin}`);
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} isAdmin={isAdmin} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
