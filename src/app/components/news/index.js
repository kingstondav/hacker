import React from "react";
import styles from "./news.module.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NewsSection = (props) => {
  const { searchedArray } = props;
  return (
    <div className={styles.news}>
      <Typography className={styles.news__heading}>
        News <hr style={{ marginTop: "10px" }} />
      </Typography>

      {searchedArray.map((news, index) => {
        return (
          <Box key={index} className={styles.news__section}>
            <Typography className={styles.news__section__time}>
              {news.time}
            </Typography>
            <Typography className={styles.news__section__title}>
              {news.title}
            </Typography>
            <a
              href={news.link}
              target="_blank"
              className={styles.news__section__link}
              rel="noreferrer"
            >
              {news.link}
            </a>
            <Typography className={styles.news__section__desc}>
              {news.author} | {news.comments} comments | {Number(news.points)}{" "}
              points
            </Typography>
            <hr style={{ marginTop: "10px", opacity: "0.2" }} />
          </Box>
        );
      })}
    </div>
  );
};

export default NewsSection;
