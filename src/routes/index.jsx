import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Favorites } from "../pages/Favorites"
import { Home } from "../pages/Home"

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favoritas" element={<Favorites/>} />
      </Routes>
    </BrowserRouter>
  )
}