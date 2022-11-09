import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import styles from "./Home.module.scss";
import Box from "@mui/material/Box";
import NewsSection from "../../components/news";
import FilterSection from "../../components/filter";
import { NewsList } from "../../utils/news";
import Pagination from "../../components/pagination";

const Home = () => {
  const [searchedArray, setSearchedArray] = React.useState(NewsList);
  const [searchString, setSearchString] = React.useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const [filter1, setFilter1] = React.useState(0);
  const [filter2, setFilter2] = React.useState(0);
  const [filter3, setFilter3] = React.useState(0);

  const handleSearchFilter = (event) => {
    const val = event.target.value;
    setFilter1(val);
    if (val === 2) {
      searchedArray.sort(function (a, b) {
        return b.comments - a.comments;
      });
    }
    if (val === 1) {
      searchedArray.sort(function (a, b) {
        return a.comments - b.comments;
      });
    }
    if (val === 0) {
      searchedArray.reverse();
    }
  };

  const handlebyFilter = (event) => {
    const val = event.target.value;
    setFilter2(val);
    if (val === 1) {
      searchedArray.sort(function (a, b) {
        return Number(b.points) - Number(a.points);
      });
    }
    if (val === 0) {
      searchedArray.reverse();
    }
  };

  const handleforFilter = (event) => {
    const val = event.target.value;
    setFilter3(val);
    if (val === 0) {
      searchedArray.reverse();
    }
    if (val === 2) {
      searchedArray.sort(function (a, b) {
        return b.comments - a.comments;
      });
    }
    if (val === 1) {
      searchedArray.sort(function (a, b) {
        return a.comments - b.comments;
      });
    }
    if (val === 3) {
      searchedArray.sort(function (a, b) {
        return a.comments - b.comments;
      });
    }
  };

  const handleClick = (event) => {
    const val = Number(event.target.id);
    setcurrentPage(val);
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(searchedArray.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedArray.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          style={{
            color: currentPage === number ? "#ff6600" : "#000",
            fontSize: "14px",
          }}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  const searching = (data) => {
    setSearchString(data);
  };

  useEffect(() => {
    if (searchString.length === 0) {
      setSearchedArray(NewsList);
    } else {
      const searchedObjects = [];
      NewsList.forEach((singleHeroObject, index) => {
        Object.values(singleHeroObject).every((onlyValues, valIndex) => {
          if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
            searchedObjects.push(singleHeroObject);
            return;
          }
        });
      });
      setSearchedArray(searchedObjects);
    }
  }, [searchString]);

  return (
    <Box className={styles.homeSection}>
      <Header
        searching={(data) => searching(data)}
        searchString={searchString}
      />
      <Box sx={{ pb: "10px" }}></Box>
      <FilterSection
        currentItems={searchedArray}
        filter1={filter1}
        filter2={filter2}
        filter3={filter3}
        handlebyFilter={handlebyFilter}
        handleSearchFilter={handleSearchFilter}
        handleforFilter={handleforFilter}
      />
      <NewsSection searchedArray={currentItems} />

      <Pagination
        handlePrevbtn={handlePrevbtn}
        currentPage={currentPage}
        pages={pages}
        pageDecrementBtn={pageDecrementBtn}
        renderPageNumbers={renderPageNumbers}
        pageIncrementBtn={pageIncrementBtn}
        handleLoadMore={handleLoadMore}
        handleNextbtn={handleNextbtn}
      />
      <Box sx={{ pb: "25px" }}></Box>
    </Box>
  );
};

export default Home;
