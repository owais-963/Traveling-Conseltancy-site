import ResponsiveAppBar from "./navbar/navbar";
import Home from "./home/home";
import ThemeRoutes from "./routes";
import React from 'react'

function IndexPage() {
  return (
    <div>
    <ResponsiveAppBar />
    <ThemeRoutes />
    </div>
  )
}

export default IndexPage
