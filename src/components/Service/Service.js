  import React from 'react'
  import './Service.css'
  
  class Service extends React.Component{
      render(){
          const service = this.props.service;

          return (
            <div className="service">  
              <div className="image">
                <img src={service.imageSrc} alt=""/>
              </div> 
  
              <div className="details">
                <h2>{service.header}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          );
      }
  }

  /*const Service = (service) => {
    return (
      <div className="service">  
        <div className="image">
          <img src={service.imageSrc} alt=""/>
        </div> 

        <div className="details">
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <a href="#">{intl.get("read_more")}</a><br/>
        </div>
      </div>
    );
  }*/
  export default Service;