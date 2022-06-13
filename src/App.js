import React from 'react'
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>CATRA | Data Analytics</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Data analytics platform" />
      </Helmet>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
