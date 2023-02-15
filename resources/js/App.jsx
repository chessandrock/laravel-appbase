import React from 'react'

import Header from './components/partials/Header'
import Content from './components/partials/Content'
import Footer from './components/partials/Footer'

const App = () => {
  return (
    <div className='flex flex-col flex-nowrap min-h-screen bg-base-200'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
