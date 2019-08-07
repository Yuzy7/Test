import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import Brief from '../Brief/Brief';
import ServiceList from '../ServiceList/ServiceList';
import Footer from '../Footer/Footer';
import './App.css';

import intl from 'react-intl-universal';
import EN from './languages/text-en.json';
import ZH from './languages/text-zh.json';

import Wechat from './Wechat.jpeg'
import Connecting from './Connecting.jpg'
import Culture_Influencer from './Culture influencer.jpg'

const locales = {
    "en_US": EN,
    "zh_CN": ZH,
};

const service1 = {
  id: 1,
  imageSrc: Wechat,
  header: 'Wechat Media Kit',
  description: 'We create customized contents to help the business reach to our followers. \
  At the same time, we manage the social media accounts and WeChat Platforms for the business owners to make their life easier.'
};

const service2 = {
  id: 2,
  imageSrc: Connecting,
  header: 'Connecting',
  description: 'We connect all the dots together, which means we are match-maker pro! \
  Not only for the single, but also we connect employers with the right condidates.'
};

const service3 = {
  id: 3,
  imageSrc: Culture_Influencer,
  header: 'Culture Influencer',
  description: 'As we mentioned, we are the bridge between the Chinese and Canadian community. \
  So language is always the first thing when we talk about the cultrue. \
  We have regular Chinese classes open to local who are interested in Chinese culture and language. Come and learn with us!'
};

const serviceList = [
  service1,
  service2,
  service3
];

const news1 = {
  id: 1,
  imageSrc: 'https://www.canadastudynews.com/wp-content/uploads/2017/08/Huang-Yang-300x225.jpg',
  srcUrl: 'https://www.canadastudynews.com/2017/08/14/tech-graduates-bridging-gap-between-canadian-chinese-entrepreneurs/',
  time: 'August 14, 2017',
  header: 'Meet the Tech Graduates Bridging the Gap Between Canadian and Chinese Entrepreneurs',
  source: ''
};

const news2 = {
  id: 2,
  imageSrc: 'https://www.canadastudynews.com/wp-content/uploads/2017/08/Huang-Yang-300x225.jpg',
  srcUrl: 'https://uwaterloo.ca/arts/news/master-digital-experience-innovation-graduates-build-digital',
  time: 'August 04, 2017',
  header: 'Master of Digital Experience Innovation graduates build digital bridges to China',
  source: ''
};

const news3 = {
  id: 3,
  imageSrc: 'https://dynamicmedia.zuza.com/zz/m/original_/7/a/7a17d0f0-ae58-4c44-87d6-e1472117a93a/B823471192Z.1_20170802102244_000_G411U6M48.1_Super_Portrait.jpg',
  srcUrl: 'https://www.therecord.com/news-story/7482497-tech-writers-build-digital-bridges-to-china/',
  time: 'August 03, 2017',
  header: 'Tech writers build digital bridges to China',
  source: ''
};

const newsList = [
  news1,
  news2,
  news3,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      initDone: false,
    };

    this.langType = this.langType.bind(this);
  }

  langType = (type) =>{
    localStorage.setItem('lang_type', type);
    window.location.reload();
  }

  loadLocales=()=> {  
      // init method will load CLDR locale data according to currentLocale
      // react-intl-universal is singleton, so you should init it only once in your app
      intl.init({
          currentLocale: localStorage.getItem('lang_type')||'en_US',  
          locales,
      }).then(() => {
          // After loading CLDR locale data, start to render
          this.setState({initDone: true});
      });
  };

  componentDidMount() {
      this.loadLocales();
  }

  /*<Route exact path='/news' render={() => (
              <NewsList newsList={newsList}/> 
            )}/>*/
  render() {
    return (
      this.state.initDone && <div className="App">
        <NavBar langType={this.langType}/>   

        <Switch>
            <Route exact path='/' component={Brief} />
            <Route exact path='/service' render={() => (
              <ServiceList serviceList={serviceList}/>
            )}/>
            <Redirect from='*' to='/' />
        </Switch>  

        <Footer />
      </div>
    );
  }
}

export default App;

            