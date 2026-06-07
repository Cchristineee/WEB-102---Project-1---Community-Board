import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

const App = () => {

  return (
    <div className="app-container">
      {/* header layout */}
      <header className="header-container">
        <h1 className="nyc-heading">Silicon Alley List</h1>
        <h2 className="nyc-subtitle">Curated internships and new grad opportunities from NYC tech companies.</h2>
      </header>

      <main className="card-section">
        <Card 
          image="/Northslope_Icon.avif"
          company="Northslope"
          title="Software Engineer"
          link="https://www.builtinnyc.com/job/forward-deployed-software-engineer-new-grad/8697606"
          location="New York, NY (Hybrid)"
          />

          <Card 
          image="/Pinterest.svg.png"
          company="Pinterest"
          title="ML Internship"
          link="https://www.pinterestcareers.com/jobs/7253017/masters-fall-machine-learning-internship-atg-visual-search/?gh_jid=7253017"
          location="New York, NY 10010"
          />

          <Card 
          image="/Spotify-Icon-Logo.svg"
          company="Spotify"
          title="Backend Engineer"
          link="https://www.lifeatspotify.com/jobs/backend-engineer-podcast-2"
          location="New York, NY 10007 (Hybrid)"
          />

          <Card 
          image="/Braze_Social_Profile.avif"
          company="Braze"
          title="IT Associate"
          link="https://wellfound.com/jobs/4307519-it-associate"
          location="New York, NY 10016"
          />

          <Card 
          image="/RocketMoney.png"
          company="Rocket Money"
          title="Operations Associate"
          link="https://wellfound.com/jobs/4220193-operations-associate"
          location="New York, NY (Remote)"
          />

          <Card 
          image="/upstart logo.avif"
          company="Upstart"
          title="Security Engineer"
          link="https://careers.upstart.com/jobs/infrastructure-security-engineer"
          location="New York, NY (Remote)"
          />

          <Card 
          image="/Optimum-logo.jpg"
          company="Optimum"
          title="Product Manager"
          link="https://www.optimumcareers.com/job/Long-Island-City-Product-Manager-Entertainment-NY-11101/1380292300/"
          location="New York, NY 11101"
          />

          <Card 
          image="/Mastercard-Logo.png"
          company="MasterCard"
          title="Analyst, Strategy & Operations"
          link="https://www.builtinnyc.com/job/analyst-strategy-operations/9541251"
          location="New York, NY 10016"
          />

          <Card 
          image="/seatgeek_logo.jpg"
          company="Seat Geek"
          title="Software Engineer"
          link="https://job-boards.greenhouse.io/embed/job_app?for=seatgeek&gh_src=94e407181&token=7858968"
          location="New York, NY 10010"
          />

          <Card 
          image="/polymarket_logo.jpg"
          company="Polymarket"
          title="Marketing & Finance Intern"
          link="https://jobs.ashbyhq.com/polymarket/9fbf8f68-5f92-434d-a00b-c79f99f5a10e"
          location="New York, NY (Remote)"
          />
      </main>
    </div>
  )
}

export default App