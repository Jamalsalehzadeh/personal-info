import React from 'react'
import avatar from './avatar.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 200, height: 200 }}>
          <img src={avatar} className="App-logo" alt="Avatar" />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginLeft: 10,
          }}
        >
          <p>
            <b className="App-link">I</b>t<b className="App-link">I</b>s
            <b className="App-link">A</b>ram.
          </p>
          <a
            className="App-link"
            href="https://jamalsalehzadeh.github.io/personal-info"
            rel="noopener noreferrer"
          >
            Under Construction
          </a>
        </div>
        <div></div>
      </header>
    </div>
  )
}

export default App
