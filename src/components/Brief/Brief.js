  import React from 'react'
  import './Brief.css'
  import Main from '../Main/Main';
  import NewsList from '../NewsList/NewsList';
  import news2image from './news2.jpeg'

  const news1 = {
    id: 1,
    imageSrc: 'https://www.canadastudynews.com/wp-content/uploads/2017/08/Huang-Yang-300x225.jpg',
    srcUrl: 'https://www.canadastudynews.com/2017/08/14/tech-graduates-bridging-gap-between-canadian-chinese-entrepreneurs/',
    time: 'August 14, 2017',
    header: 'Meet the Tech Graduates Bridging the Gap Between Canadian and Chinese Entrepreneurs',
    source: 'CANADA STUDY NEWS '
  };
  
  const news2 = {
    id: 2,
    imageSrc: news2image,
    srcUrl: 'https://uwaterloo.ca/arts/news/master-digital-experience-innovation-graduates-build-digital',
    time: 'August 04, 2017',
    header: 'Master of Digital Experience Innovation graduates build digital bridges to China',
    source: 'UNIVERSITY OF WATERLOO'
  };
  
  const news3 = {
    id: 3,
    imageSrc: 'https://dynamicmedia.zuza.com/zz/m/original_/7/a/7a17d0f0-ae58-4c44-87d6-e1472117a93a/B823471192Z.1_20170802102244_000_G411U6M48.1_Super_Portrait.jpg',
    srcUrl: 'https://www.therecord.com/news-story/7482497-tech-writers-build-digital-bridges-to-china/',
    time: 'August 03, 2017',
    header: 'Tech writers build digital bridges to China',
    source: 'THE RECORD'
  };
  
  const newsList = [
    news1,
    news2,
    news3,
  ];

  class Brief extends React.Component{
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
            <div className='brief'>
              <Main />
              
              <h2>About Us</h2>
              <p>The Chinese in Canada hate it when they don’t know how to pursue a better life in a different/unfamiliar environment by themselves.
              They would love it if there is a cultural and lifestyle leader that give advice and guidance to help them succeed, a community that they belong to, a leader that they can rely on. 
              </p>
              
              <p>That’s what we do at W.I.T Insider, We help the Chinese Canadian community live a better life by building the community where they can get Informative and related content concerning cultural differences, find their packs through interacted conversations and feel connected again with both sides.
              </p>
              
              <h3>in the news</h3>
              <NewsList newsList={newsList}/> 
            </div>
          );
      }
  }
  
  export default Brief;