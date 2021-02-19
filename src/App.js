import React from 'react'
import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import PageBackground from './Components/StyledPageBackground'
import FormBackground from './Components/StyledFormBackground'

function App() {
  return (
    <body>
        <PageBackground>
            <FormBackground>
                <Header />
                <MainContent />
            </FormBackground>
        </PageBackground>
    </body>
  );
}

export default App;