import styled from "@emotion/styled";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { keywordState } from "../../utils/store/keywordState";
import { moviesState } from "../../utils/store/moviesState";
import { checkLanguage } from "../../utils/validations";
import { request } from "../../utils/fetch";

const SearchBar = () => {
  const [tempKeyword, setTempKeyword] = useState("");
  const setKeyword = useSetRecoilState(keywordState);
  const setMovieData = useSetRecoilState(moviesState);

  const fetchMovies = async (keyword) => {
    try {
      const res = await request(`s=${keyword}&page=1`);

      if (res.Response === "True") {
        const movies = res.Search.map((data) => {
          const Poster = data.Poster.replace("SX300", "SX700");
          return { ...data, Poster };
        });

        setMovieData({
          movies,
          totalResults: Number(res.totalResults),
        });
      } else {
        console.log("영화없음");
      }
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkLanguage(tempKeyword)) {
      setKeyword(tempKeyword);
      fetchMovies(tempKeyword);
    } else {
      setTempKeyword("");
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input value={tempKeyword} onChange={(e) => setTempKeyword(e.target.value)} />
      <Icon className="icon">
        <Img src={require("../../assets/search_icon.png")} alt="search" />
      </Icon>
    </SearchForm>
  );
};

export default SearchBar;

const SearchForm = styled.form`
  max-width: 500px;
  width: 80%;
  height: 60px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
`;

const Input = styled.input`
  width: calc(100% - 50px);
  border: 0;
  border-radius: 16px 0 0 16px;
  font-size: 30px;
  padding-left: 10px;
`;

const Icon = styled.button`
  width: 50px;
  background-color: var(--secodary);
  border-radius: 0 16px 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;
