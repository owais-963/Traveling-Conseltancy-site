import ResponsiveAppBar from "./navbar/navbar";
import Home from "./home/home";
import RoutesConfig from "./routes";
import React from 'react'

function IndexPage() {
  return (
    <div>
    <ResponsiveAppBar />
    <RoutesConfig />
    </div>
  )
}

export default IndexPage
