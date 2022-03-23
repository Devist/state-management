import React from 'react'

import Header from './Header'
import ArticleList from './ArticleList'
import Footer from './Footer'

const App = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <Header />
        <ArticleList />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App
