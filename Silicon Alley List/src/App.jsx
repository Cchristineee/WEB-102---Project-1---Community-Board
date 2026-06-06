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
          link="https://www.builtinnyc.com/job/forward-deployed-software-engineer-new-grad/8697606"
          location="New York, NY (Hybrid)"
          />

          <Card 
          image="/Pinterest.svg.png"
          company="Pinterest"
          title="Fall Machine Learning Internship (Masters)"
          link="https://www.pinterestcareers.com/jobs/7253017/masters-fall-machine-learning-internship-atg-visual-search/?gh_jid=7253017"
          location="11 Madison Ave, New York, NY 10010 (Hybrid)"
          />

          <Card 
          image="/Spotify-Icon-Logo.svg"
          company="Spotify"
          title="Backend Engineer, Podcast"
          link="https://www.lifeatspotify.com/jobs/backend-engineer-podcast-2"
          location="150 Greenwich St, New York, NY 10007 (Hybrid)"
          />

          <Card 
          image="/Braze_Social_Profile.avif"
          company="Braze"
          title="IT Associate"
          link="https://wellfound.com/jobs/4307519-it-associate"
          location="63 Madison Ave 13th Floor, New York, NY 10016"
          />

      </main>
    </div>
  )
}

export default App