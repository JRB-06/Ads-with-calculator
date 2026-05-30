import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import HeaderComponent from './components/header.jsx'
import './App.css'

function App() {  
      
      return (
            <>
                  <HeaderComponent/>
                  
                  
                  <main>
                        <div className="display">
                              <p>0</p>
                        </div>
                        <section>
                              <p>ad space</p>
                        </section>
                        <div className="buttonGroup">
                              <div className="bg">
                                    <button id="operation">C</button>
                                    <button id="operation">⬅️</button>
                                    <button id="operation">%</button>
                                    <button id="operation">➗</button>
                              </div>
                              <div className="bg">
                                    <button>7</button>
                                    <button>8</button>
                                    <button>9</button>
                                    <button id="operation">✖️</button>
                              </div>
                              <div className="bg">
                                    <button>4</button>
                                    <button>5</button>
                                    <button>6</button>
                                    <button id="operation">➖</button>
                              </div>
                              <div className="bg">
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button id="operation">➕</button>
                              </div>
                              <div className="bg">
                                    <button>R</button>
                                    <button>0</button>
                                    <button>💠</button>
                                    <button className="calculate">🟰</button>
                              </div>
                        </div>
                  </main>
            </>
      )
}

export default App
