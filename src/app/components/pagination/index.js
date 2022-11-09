import React, { useState } from "react";
import styles from "./pagination.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import List from "@mui/material/List";

const Pagination = (props) => {
  const {
    renderPageNumbers,
    handleNextbtn,
    handleLoadMore,
    pageIncrementBtn,
    pageDecrementBtn,
    handlePrevbtn,
    currentPage,
    pages,
  } = props;

  return (
    <>
      <List className={styles.pagination}>
        <li>
          <button
            onClick={handlePrevbtn}
            className={styles.btn}
            disabled={currentPage === pages[0] ? true : false}
          >
            <ArrowBackIosNewIcon />
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            className={styles.btn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            <ArrowForwardIosIcon />
          </button>
        </li>
      </List>
      <button onClick={handleLoadMore} className={styles.loadmore}>
        Load More
      </button>
    </>
  );
};

export default Pagination;
