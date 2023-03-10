import arrowLight from "../Assets/arrow-light.png"
import arrowDark from "../Assets/arrow-dark.png"
import ProjectPreview from "./ProjectPreview"
import { useEffect, useState } from "react"

export default function ProjectInfo({ content, project, setProject, mode }) {
  let[desktop, setDesktop] = useState(0)

  useEffect(() => {
    let buttons = [...document.querySelectorAll('.preview__buttons button')]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[desktop].classList.add('active')

    let slider = document.querySelector('.project__slider')
    slider.style.transform = `translateX(${-desktop * 100}%)`
  }, [desktop])

  setTimeout(() => {
    let height = document.querySelector('a .project__img--desktop').offsetHeight
    document.querySelector('a .project__img--mobile').style.height = `${height}px`
  }, 250)

  return (
    <div className="project__info">
      <section className="project__text">
        <p>{content.description[0]}</p>
        <p>{content.description[1]}</p>

        <section className="project__buttons">
          <a href={content.site} target="_blank">Ver página</a>
          <a href={content.code} target="_blank">Ver código</a>
        </section>

        <section className="project__navButtons">
          <img alt="flecha" src={mode === 'light' ? arrowLight : arrowDark} onClick={() => {
              project > 0 ? setProject(project - 1) : setProject(3)} 
            } 
          />
          <img alt="flecha" src={mode === 'light' ? arrowLight : arrowDark} onClick={() => {
              project < 3 ? setProject(project + 1) : setProject(0)} 
            } 
          />
        </section>
      </section>

      <ProjectPreview content={content} setDesktop={setDesktop} />
    </div>
  )
}