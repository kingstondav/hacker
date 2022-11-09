import React from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import styles from "./search.module.scss"

const SearchBar = (props) => {
	const {searching, searchString} = props;

	return (
		<>
			<Box component="form">
				<TextField
					underlineShow={false}
					className={styles.searchBar}
					placeholder="Search stories by title, url, author"
					sx={{
						"& .MuiOutlinedInput-root": {
							"&.Mui-focused fieldset": {
								border: "0.5px solid #050303",
							},
						},
					}}
					value={searchString}
					onChange={(e) => searching(e.target.value)}
					variant="outlined"
					InputProps={{
						className: styles.searchBar__in,
						endAdornment: (
							<InputAdornment>
								<IconButton>
									<SearchIcon className={styles.searchBar__icon} />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</Box>
		</>
	)
}

export default SearchBar
