import ResponsiveAppBar from "./navbar/navbar";
// import Home from "./home/home";
import RoutesConfig from "./routes";
import Footer from "./footer/footer";
import React from 'react'

function IndexPage() {
  return (
    <div>
    <ResponsiveAppBar />
    <RoutesConfig />
    <Footer />
    </div>
  )
}

export default IndexPage
