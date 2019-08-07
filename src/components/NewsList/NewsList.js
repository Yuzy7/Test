import React from 'react'
import './NewsList.css'
import News from '../News/News'

class NewsList extends React.Component{
    render(){
        return (
            <div className="newsList" id='news'>
                {
                    this.props.newsList.map(news => 
                        <News news={news} key={news.id}/>
                    )
                }
            </div>
        );
    }
}

export default NewsList;
