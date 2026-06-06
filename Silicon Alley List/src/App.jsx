import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

const App = () => {

  return (
    <div className="app-container">
      {/* header layout */}
      <header className="header-container">
        <h1 className="nyc-heading">Silicon Alley List</h1>
      </header>

      <main className="card-section">
        <Card 
          image="/Northslope_Icon.avif"
          company="Northslope"
          title="Software Engineer, New Grad"
          location="New York, NY (Hybrid)"
          />

          <Card 
          image="/Pinterest.svg.png"
          company="Pinterest"
          title="Frontend Engineer, New Grad"
          location="11 Madison Ave, New York, NY 10010 (Hybrid)"
          />

          <Card 
          image="/Spotify-Icon-Logo.svg"
          company="Spotify"
          title="Data Science, Intern"
          location="150 Greenwich St, New York, NY 10007 (Hybrid)"
          />
          
          <Card 
          image="/Braze_Social_Profile.avif"
          company="Braze"
          title="Solutions Engineer, Security & Privacy"
          location="63 Madison Ave 13th Floor, New York, NY 10016"
          />

      </main>
    </div>
  )
}

export default App
