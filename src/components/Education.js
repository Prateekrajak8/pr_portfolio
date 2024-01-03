import NavBarStyle from '../Styles/NavBarStyle.module.scss'
import ProfilePic from '../Assets/ProfilePic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import sati from '../Assets/sati.jpg';
export default function Education() {

  return (
    <>
        <div className={NavBarStyle.aboutMeBlock}> 
       <div className={NavBarStyle.AboutMeTxt}>
       <FontAwesomeIcon icon={faGraduationCap} /> My Education
        </div> 
        <div className={NavBarStyle.educationCard}>
         <img src={sati} alt='sati' width={150} height={150}/>
         <div>
            <div className={NavBarStyle.degreeName}>
                Bachelor of Technology In Computer Science and Engineering
            </div>
            <div className={NavBarStyle.collegeName}>
                Samrat Ashok Technlogical Institute, Vidisha (M.p)
            </div>
            <div className={NavBarStyle.cgpa}>
                2019-2023 | 7.60/10 
            </div>
         </div>
        </div> 
      </div>
    </>
  );
  
}
