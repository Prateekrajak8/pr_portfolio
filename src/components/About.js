import NavBarStyle from '../Styles/NavBarStyle.module.scss'
import ProfilePic from '../Assets/ProfilePic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
export default function About() {

  return (
    <>
        <div className={NavBarStyle.aboutMeBlock}> 
       <div className={NavBarStyle.AboutMeTxt}>
       <FontAwesomeIcon icon={faUser} /> About Me
        </div> 
        <div className={NavBarStyle.aboutMeData}>
          <div className={NavBarStyle.imageBlock}>
          <img src={ProfilePic} alt="Profile" height={250} width={220}/>
          </div>   
          <div className={NavBarStyle.abtContent}>
            <div>
                <div className={NavBarStyle.nameTxt}>
                  Prateek Rajak
                </div>
                <div className={NavBarStyle.pstText}>
                  Full Stack Developer
                </div>
           </div>
           <div>
             <div className={NavBarStyle.abtTxt}>
             👋Hey there! I'm Prateek Rajak, an AI enthusiast and <br></br> full-stack developer from India with over 1 year of experience.<br></br> I thrive on creating AI-driven solutions that make a positive impact.
            </div>
           </div>
           <div>
            Email:  prateekrajak841@gmail.com
           </div>
           <div>
            Current Location:  Bangalore, India -  
           </div>
           <button className={NavBarStyle.resumeButton}>
            Resume 
           </button>
          </div> 
        </div> 
      </div>
    </>
  );
  
}
