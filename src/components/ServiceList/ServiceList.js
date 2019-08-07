  import React from 'react'
  import './ServiceList.css'
  import Service from '../Service/Service'
  
  
  class ServiceList extends React.Component{
      render(){
          return (
            <div className="serviceList">
            
            {
                this.props.serviceList.map(service => 
                    <Service service={service} key={service.id}/>
                )
            }
            </div> 
          );
      }
  }

  /*const ServiceList = (props) => {
    return (
        <div className="serviceList">
        {
            props.serviceList.map(service => 
                <Service service={service} key={service.id}/>
            )
        }
        </div> 
      );
  }*/
  export default ServiceList;