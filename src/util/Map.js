import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends React.Component{
    render(){
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { 
                    { 
                      lat: 40.756795, 
                      lng: -73.954298 
                    } 
                }
                defaultZoom = { 13 }
            >
            </GoogleMap>
         ));
      
         return(
            <div>
              <GoogleMapExample
                containerElement={ 
                    <div style={//outer curly braces inject JavaScript into JSX. 
                        {//inner curly braces create a JavaScript object literal.
                            height: `500px`, 
                            width: '500px' 
                        }
                    }/> 
                }
                mapElement={ 
                    <div style={
                        { 
                            height: `100%` 
                        }
                    }/> 
                }
              />
            </div>
         );
    }
}

export default Map;