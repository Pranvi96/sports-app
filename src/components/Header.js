import Logo from '../assets/play.jpg'

const Header = () => {
  return <div className="header">
    <img className="logo" src={Logo}/>
    <h2>Playock</h2>
  </div>;
};

export default Header;
