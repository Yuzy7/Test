
    import React from 'react';
    import { Link } from 'react-router-dom'
    import logo from './logo.png';
    import './NavBar.css';
    import intl from 'react-intl-universal';
  
  class NavBar extends React.Component{
      constructor(props){
          super(props);
  
          this.state = {
          };

          this.setLangType = this.setLangType.bind(this);
      }
  
      setLangType(type){
        this.props.langType(type);
      }

      render(){
          return (
              <nav className="NavBar">
                  <nav className="nav desktopNav">
                      <div className="navLogo">
                      <Link to='/' className="complex" target="_self">
                          <img src={logo} className="logo" alt="logo"/>
                      </Link>
                      <span className="companyName">{intl.get("company_name")}</span> 
                      </div>
                      
                      <div className="navContent" id="nav_content">
                        <Link to='/' className="navItem" target="_self" id ="home">{intl.get("home")}</Link>  
                        <Link to='/service' className="navItem" target="_self" id ="service">{intl.get("service")}</Link> 
                      </div>
  
                      <div className="language">
                      <span onClick={()=>{this.setLangType("en_US")}}>EN</span> | <span onClick={()=>{this.setLangType("zh_CN")}}>中文</span>
                      </div>
                  </nav>
              </nav>
          );
      }
  }
  
  export default NavBar;