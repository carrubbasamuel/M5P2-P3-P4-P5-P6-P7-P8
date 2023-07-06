import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoDark from '../../../asset/logo-dark.png';
import logo from '../../../asset/logo.png';
import { setMode } from '../../../redux/reducers/ModeState';
import Search from './Search/search.jsx';
import './navbar.css';
import { useLocation } from 'react-router-dom';



export default function Nav() {
  const[scroll, setScroll] = useState(false);
  


  const {mode} = useSelector((state) => state.root.modeRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setScroll(true);
      }else{
        setScroll(false);
      }
    })
  },[]);


  return (
    <Navbar className={`shadow fixed-top ${mode === 'light' ? "bg-light" : "bg-dark"} ${scroll === true ? "isScroll" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img id='logo' src={mode === 'light' ? logo : logoDark} alt="" />
        </Navbar.Brand>

        <Navbar.Text className={mode === 'light' ? "text-dark" : "text-light"}><Link to="/">Home</Link></Navbar.Text>
        <Navbar.Text className={mode === 'light' ? "text-dark" : "text-light"}><Link to="/book/404notfound">Contact Us</Link></Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Search />
        </Navbar.Collapse>
        <div onClick={() => dispatch(setMode())} className={mode === 'light' ? "modeState text-dark" : "modeState text-light"}>
          {mode === 'light' ? <RiMoonFill /> : <BsFillSunFill />}
        </div>
      </Container>
    </Navbar>
  );
}