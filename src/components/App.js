import React from 'react'
import VisibleLinkList from '../containers/VisibleLinkList'
import SubTitle from '../components/SubTitle'

const App = () => (
  <div>
    <article>
      <h1><a href="/">@tnantoka</a></h1>
      <SubTitle /> 
    </article>
    <VisibleLinkList />
  </div>
)

export default App
