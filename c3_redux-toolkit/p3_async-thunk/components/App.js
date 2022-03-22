import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import ArticleList from './ArticleList'
import Editor from './Editor'
import Footer from './Footer'

const App = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <Router>
          <Header />
          <Route path="/editor">
            <Editor />
          </Route>
          <Route exact path="/">
            <ArticleList />
          </Route>
        </Router>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App
