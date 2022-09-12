import { NavLink } from 'react-router-dom';
import Accordion from '../../Accordion/Accordion';
import SideBarItem from './SideBarItem';

export default function NestedLinks({ nastedLink }) {
  
  return (
    <div className='submenu'>
      <Accordion
        parent={
          <div className={`nav__item`} >
            <SideBarItem Icon={nastedLink.icon} title={nastedLink.title} />
          </div>
        }
        child={nastedLink.nastedLinks.map(link =>
          <NavLink key={link.title} to={link.to} className={`sub__item`} >{link.title}</NavLink>
        )}
      />
    </div>
  )
}