import './index.scss'
import { ReactComponent as GoggleIcon } from '.././../../assets/images/googlePlay.svg';
import { ReactComponent as IosIcon } from '.././../../assets/images/iosapp.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-wraper'>
        <div className="license-wraper">
          <p>© 2001–2022 ООО <a href='/' className='license__link'>«СпейсВэб»</a></p>
          <p>Все права защищены.</p>
          <p>Лицензия <a href='/' className='license__link'>№163230</a></p>
        </div>
        <div className='footer__apps-wrp'>
          <p>Скачать приложение</p>
          <div className='footer__apps'>
            <a href='/'><GoggleIcon /></a>
            <a href='/'><IosIcon /></a>
          </div>
        </div>
        <div className="footer-calls">
          <p><a className='footer-call-link' href="tel:+78123341222">+7 (812) 334-12-22</a> (в Санкт-Петербурге)</p>
          <p><a className='footer-call-link' href="tel:+74956631612">+7 (495) 663-16-12</a> (в Москве)</p>
          <p><a className='footer-call-link' href="tel:+78001001615">+7 (800) 100-16-15</a> (бесплатно по России)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
