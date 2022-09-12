import './index.scss'
import { ReactComponent as NoticeIcon } from '../../..//assets/images/Notice.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarView, toggleView } from '../../../features/view/viewSlice';

export default function Header() {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectSidebarView)
  const handleBurger = () => {
    dispatch(toggleView())
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div onClick={handleBurger} className={`${!isOpen ? '' : 'hidden'} header-burger`}></div>
        <span className='header__price'>3467 ₽</span>
        <div className='header__name'>
          <NoticeIcon />
          <span>username</span>
        </div>
        <span className='header__exit'>Выйти</span>
      </div>
    </header>
  )
}