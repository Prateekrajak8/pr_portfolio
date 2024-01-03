import NavBarStyle from '../Styles/NavBarStyle.module.scss'
import ProfilePic from '../Assets/ProfilePic.jpg'
import About from './About'
import Skills from './Skills'
import Education from './Education'
export default function NavBar() {

  return (
    <>
      <div className={NavBarStyle.navBarBlock}>
        <div className={NavBarStyle.navBar}>
        <div></div>
        <div className={NavBarStyle.navBarContent}>
          <div className={NavBarStyle.textStyle}>About</div>
          <div className={NavBarStyle.textStyle}>Skills</div>
          <div className={NavBarStyle.textStyle}>Experience</div>
          <div className={NavBarStyle.textStyle}>Work</div>
          <div className={NavBarStyle.textStyle}>Contact</div>
        </div>
        </div>
        {/* Include CanvasExample component here if it's intended to be part of NavBar */}
        <About/>
        <Skills/>
        <Education/>
      </div>
    </>
  );
  
}
