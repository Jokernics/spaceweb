import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import './index.scss';
import NestedLinks from './NestedLinks';
import { sidebarData } from './sidebarData';
import SideBarItem from './SideBarItem';
import { selectSidebarView, toggleView } from '../../../features/view/viewSlice';

export default function Sidebar() {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectSidebarView)


  return (
    <div className={`${isOpen ? '' : 'hidden'} sideBar`}>
      <div className='sidebar-header'>
        <Link to='/'><div><Logo /></div></Link>
        <div onClick={() => dispatch(toggleView())} className='burger'></div>
      </div>
      <div className="sidebar-body">
        <nav className='nav'>
          {sidebarData.map((item, i) =>
            item?.nastedLinks
              ? (
                <NestedLinks key={item.title} nastedLink={item} />
              )
              : (
                <NavLink key={item.title} className={`nav__item ${!i ? 'first' : ''}`} to={item.to}>
                  <SideBarItem key={item.title} Icon={item.icon} title={item.title} />
                </NavLink>
              )
          )}
        </nav>
      </div>
    </div>
  )
}