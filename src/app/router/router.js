import React from "react"

import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"

    import SearchPage from "../pages/search"
// import Header from "../containers/header"


const Router = () => {
	return (
		<div>
			{/* <Header/> */}
			<Routes>
				<Route path="/" element={<Home />} />
                <Route path="search" element={<SearchPage />} />

			</Routes>
		</div>

	)
}


export default Router