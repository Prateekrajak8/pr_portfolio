import NavBarStyle from '../Styles/NavBarStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    console.log(props)
  return (
    <div className={NavBarStyle.CardStyle}>
      <img src={props?.props?.url} alt={props.label} width={100} height={100} />
      <div className={NavBarStyle.SkillTxt}>{props.props.label}</div>
    </div>
  );
}
