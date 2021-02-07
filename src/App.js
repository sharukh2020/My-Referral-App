import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';

import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import './assets/base.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

// import of created components
import classes from "./App.module.css"
import translate from "./i18n/translate"
import {I18nProvider,LOCALES} from "./i18n"
import SignIn from "./SignIn"
import LanguageSelection from "./LanguageSelection"
import Register from "./Register"

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';
library.add(
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
);
library.add(
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
);
library.add(
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
);

const store = configureStore();

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      locale:LOCALES.ENGLISH
    }
  }
  
  // function to be executed when Select-Language button is clicked
  OnSelectLanguageBtnClick=(param)=>{
    this.setState({
      locale:LOCALES[param],
    })
  }

// function to update the web-app language
  UpdatingTheLanguage=(param)=>{
    if(param==="en"){
      this.setState({
        locale:LOCALES["ENGLISH"]
      })
    }
    else if(param==="de"){
      this.setState({
        locale:LOCALES["GERMAN"]
      })
    }
    else if(param==="fr"){
      this.setState({
        locale:LOCALES["FRENCH"]
      })
    }
  }

  // function to access the query string in url which contains the searched language
  GetLangFromQueryString=()=>{
    const queriString=window.location.search
    this.UpdatingTheLanguage(queriString.substr(6,queriString.length-1))
    }

  // function to be executed after changing the browser's local language
  LoadingTheWebAppAfterchangingLocalLang=()=>{
    this.UpdatingTheLanguage(navigator.language)
  }
  
  componentDidMount(){
    this.LoadingTheWebAppAfterchangingLocalLang()
    this.GetLangFromQueryString()
  }

  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <ScrollToTop>
               <I18nProvider locale={this.state.locale}>
                 <div className={classes.App}>
                     <LanguageSelection   
                      OnSelectLanguageBtnClick={this.OnSelectLanguageBtnClick} 
                      locale={this.state.locale}
                      selectLanguage={translate("selectlang")}
                     />
                     <Switch>
                       <Route path='/RegisterPage'>
                         <Register
                           RegisterPageData={[
                            translate("0"),translate("1"),translate("2"),translate("3"),translate("4"),
                            translate("5"),translate("6"),translate("7"),translate("8"),
                            translate("9"),translate("one"),translate("two"),translate("three"),
                            translate("four"),translate("aa"),translate("bb"),translate("d"),
                            translate("e"),translate("h")
                           ]}
                         />
                       </Route>
                       <Route exact path="/">
                        <SignIn 
                            SignInPageData={[
                            translate("a"),translate("b"),translate("c"),translate("d"),
                            translate("e"),translate("f"),translate("g"),translate("h"),
                            translate("i"),translate("aaa"),translate("bbb")
                            ]}
                          />
                       </Route>
                       <Route render={()=>{return <Redirect to="/"/>}}/>
                     </Switch>
                 </div>
               </I18nProvider>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
