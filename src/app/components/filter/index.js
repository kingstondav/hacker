import React from "react";
import styles from "./filter.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ByOptions, forOptions, searchOption } from "../../utils/app-constants";
import { StylesUi, StylesUi2 } from "../../utils/config";

const FilterSection = (props) => {
  const {
    filter1,
    handleSearchFilter,
    filter2,
    handlebyFilter,
    filter3,
    handleforFilter,
  } = props;

  return (
    <Box className={styles.filter}>
      <>
        <Typography ml={2} mr={1} className={styles.filter__title}>
          Search
        </Typography>
        <Box sx={{ minWidth: 100 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter1}
            displayEmpty
            InputLabelProps={{ shrink: false }}
            sx={StylesUi}
            onChange={handleSearchFilter}
          >
            {searchOption.map((option) => (
              <MenuItem sx={StylesUi2} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </>
      <>
        <Typography ml={1} mr={1} className={styles.filter__title}>
          by
        </Typography>
        <Box sx={{ minWidth: 100 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter2}
            displayEmpty
            InputLabelProps={{ shrink: false }}
            sx={StylesUi}
            onChange={handlebyFilter}
          >
            {ByOptions.map((option) => (
              <MenuItem sx={StylesUi2} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </>
      <>
        <Typography ml={1} mr={1} className={styles.filter__title}>
          for
        </Typography>
        <Box sx={{ minWidth: 100 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter3}
            displayEmpty
            InputLabelProps={{ shrink: false }}
            sx={StylesUi}
            onChange={handleforFilter}
          >
            {forOptions.map((option) => (
              <MenuItem sx={StylesUi2} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </>
    </Box>
  );
};

export default FilterSection;
