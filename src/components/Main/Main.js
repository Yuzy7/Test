  import React from 'react'
  import './Main.css'
  
  class Main extends React.Component{
      constructor(props){
          super(props);
          this.state = {
          };
          this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
    
      }    

      render(){
          return (
            <main>
              <div className="jumbotron">
                <div className="container">  
                  <div className="header">  
                    <h1>Well-informed</h1>
                    <h1>Inspired</h1>
                    <h1>Trustworthy</h1>
                  </div>
                </div>
              </div>
            </main>
          );
      }
  }
  
  export default Main;