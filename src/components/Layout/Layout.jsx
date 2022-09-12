import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './index.scss';

export default function Layout() {
  return (
    <div className="main">
      <div className="content-container">
        <Sidebar />
        <div className="content-wraper">
          <Header />
          <div className="content-iner"><Outlet /></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}