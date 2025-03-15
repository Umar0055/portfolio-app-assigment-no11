import React from 'react'
import { education, experience, skills } from '../../constants/about.constant'
import ResumeSection from '../../components/resume-section/ResumeSection'
import LoadingBar from '../../components/loading-bar/LoadingBar'
export default function Resume() {
  return (
    <article className="resume active" data-page="resume" >

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">{
          education.map((item, index) => {
            return <ResumeSection key={index} title={item.title} date={item.date} description={item.description} />
          })
        }
        </ol>

      </section>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          {
            experience.map((item, index) => {
              return <ResumeSection key={index} title={item.title} date={item.date} description={item.description} />
            })
          }
        </ol>

      </section>

      <section className="skill">

        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {
            skills.map((item, index) => {
              return <LoadingBar key={index} title={item.title} value={item.value} />
            })
          }

        </ul>

      </section>

    </article>
  )
}
