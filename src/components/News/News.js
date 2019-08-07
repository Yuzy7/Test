import React from 'react'
import './News.css'

class News extends React.Component{
    render(){
        const news = this.props.news;

        return (
            <a href={news.srcUrl} target="_blank" className="news" rel="noopener noreferrer">
                <div className="image-container">
                    <img src={news.imageSrc} alt=''/>
                </div>
                <div className="newsContent">
                    <div className="details">
                        <h5>{news.source} <i class="icon fa fa-fw fa-external-link"></i></h5>
                        <h4>{news.header}</h4>
                    </div>
                </div>
            </a>
        );
    }
}

export default News;