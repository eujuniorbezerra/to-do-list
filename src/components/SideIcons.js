import React from 'react'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'
import email from '../images/email.svg'

const SideIcons = () => {

  return (
    <div className="d-flex position-fixed align-items-end flex-sm-column top-1 end-0 translate-middle-x">
        <a href="https://github.com/eujuniorbezerra" target="_blank" rel="noreferrer"><img className="github" src={github} title="Github" alt="github"></img></a>
        <a href="https://www.linkedin.com/in/eujuniorbezerra/" target="_blank" rel="noreferrer"><img className="linkedin" src={linkedin} title="Linkedin" alt="linkedin"></img></a>
        <a href="https://api.whatsapp.com/send?phone=5594984431586" target="_blank" rel="noreferrer"><img className="whatsapp" src={whatsapp} title="WhatsApp" alt="whatsapp"></img></a>
        <a href="mailto:contatojuniorbezerra@gmail.com"><img className="email" src={email} title="Email" alt="email"></img></a>
      </div>
  )
}

export default SideIcons