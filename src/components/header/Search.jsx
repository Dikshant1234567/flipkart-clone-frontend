import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/action/productAction";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  margin-left: 15px;
  width: 38%;
  display: block;
  background: white;
`;
const SearchConatiner = styled(Box)`
  display: flex;
  background: white;
`;

const SearchInput = styled(InputBase)`
  background: white;
  color: black;
  padding: 2px 10px;
  font-size: 14px;
  width: 100%;
  font-weight: 500;
`;

const Icon = styled(SearchIcon)`
  color: blue;
  margin-top: 6px;
  margin-right: 6px;
`;
const ResultWrapper = styled(Box)`
  background: white;
  position: fixed;
  margin-top: 5px;
`;
const SearchResult = styled(Typography)`
  color: black;
`;
function Search() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProduct);
  // }, [dispatch]);

  const { products } = useSelector((state) => state.getProduct);
  const [text, setText] = useState("");

  const result = products?.data;

  return (
    <Wrapper  id="search-box">
      <SearchConatiner>
        <SearchInput
          placeholder="Search for products, brands and more"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Box>
          <Icon />
        </Box>
      </SearchConatiner>
      <ResultWrapper>
        {text && (
          <List>
            {result
              ?.filter((item) =>
                item.title.longTitle
                  .toLowerCase()
                  .includes(text.toLocaleLowerCase())
              )
              .map((value) => (
                <Link to={`/product/${value.id}`} onClick={() => setText("")}>
                  <ListItem key={value.id} style={{ cursor: "pointer" }}>
                    <SearchResult>{value.title.longTitle}</SearchResult>
                  </ListItem>
                </Link>
              ))}
          </List>
        )}
      </ResultWrapper>
    </Wrapper>
  );
}

export default Search;
