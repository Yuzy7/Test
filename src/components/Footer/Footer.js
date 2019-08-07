
    import React from 'react';
    import { Link } from 'react-router-dom'
    import './Footer.css';

    import intl from 'react-intl-universal';
  
  class Footer extends React.Component{
      constructor(props){
          super(props);
  
          this.state = {
              email: ''
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleKeyPress = this.handleKeyPress.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event){
        this.setState({email : event.target.value});
        //console.log("change"+this.state.email)
      }

      handleKeyPress(event){
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      }

      handleSubmit(event){
        event.preventDefault(); 
        //this.setState({email : this.refs.Email.value});
        //console.log("submit "+this.state.email)

        //document.getElementById("email").value='';
        //document.getElementsByName("email")[0].value='';
        this.refs.Email.value='';
        alert('You have signed up now! Thanks, we will be in touch!')
      }

      render(){
          return (
            <footer>
            <div className="container">
              <div className="row">
                <section className="groups">
                  <div className="company group">
                    <header>{intl.get("company")}</header><br/>
                    <ul className="footer-links">
                      <li><Link to={`${process.env.PUBLIC_URL}/#news`} className="link" target="_self">{intl.get("press")}</Link></li>
                      <li><Link to='/service' className="link" target="_self">{intl.get("service")}</Link></li>
                    </ul>
                  </div>
                  
                  <div className="help group">
                    <header>{intl.get("help")}</header><br/>
                    <ul className="footer-links">
                      <li><a href="mailto:rita.h@witinsider.com" className="link" target="_self">{intl.get("contact_us")}</a></li>
                    </ul>
                  </div>
                </section>
  
                <section className="signup">
                  <div className="emailSignup">
                    <p>{intl.get("sign_up_for_newsletters")}</p>
                    <form action='' onSubmit={this.handleSubmit} autoComplete="on" className="emailCapture">
                      <input type="email" name="email" ref="Email" placeholder={intl.get("enter_your_email")} autoComplete="on" required onChange={this.handleChange} onKeyPress={this.handleKeyPress} id="email" className="email" />
                      <input type="submit" className="button" value={intl.get("sign_up") }/>                      
                    </form>
                  </div>
                </section>
              </div>
  
              <hr/>
  
              <div className="row">
                <section className="legal">
                  <p className="copyright">&copy; 2019 {intl.get("company_name")}</p>
                </section>
  
                <section className="social">
                  <ul className="social-icons">
                    <li><a href="https://www.facebook.com/witinsider/" className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i></a></li>
                    <li> <a href="https://twitter.com/witinsider/" className="twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/witinsider/" className="instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/witinsider/" className="linkedin" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i></a></li>   
                  </ul>
                </section>
              </div>
              
            </div>
          </footer>
          );
      }
  }
  
  export default Footer;