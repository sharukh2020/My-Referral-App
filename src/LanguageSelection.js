import React from "react"
import classes from "./LanguageSelection.module.css"
import {Link} from "react-router-dom"

class LanguageSelection extends React.Component{
    constructor(props){
        super(props)
        this.state={
          LanguageArray:[
              {
                language:"ENGLISH",
                code:"en"
              },
              {
                language:"GERMAN",
                code:"de"
              },
              {
                language:"FRENCH",
                code:"fr"
              }
            ],
          ListButtonscontainer:"ListButtonscontainerHidden",
          LanguageSelectionBtnA:"LanguageSelectionBtnVisible",
          LanguageSelectionBtnB:"LanguageSelectionBtnHidden"
        }
    }
    OnLanguageSelectionBtnAClick=()=>{
        this.setState({
            LanguageSelectionBtnA:"LanguageSelectionBtnHidden",
            LanguageSelectionBtnB:"LanguageSelectionBtnVisible",
            ListButtonscontainer:"ListButtonscontainerVisible"
        })
    }
    OnLanguageSelectionBtnBClick=()=>{
        this.setState({
            LanguageSelectionBtnA:"LanguageSelectionBtnVisible",
            LanguageSelectionBtnB:"LanguageSelectionBtnHidden",
            ListButtonscontainer:"ListButtonscontainerHidden"
        })
    }
    OnMouseLeaveListContainer=()=>{
        this.setState({
            LanguageSelectionBtnA:"LanguageSelectionBtnVisible",
            LanguageSelectionBtnB:"LanguageSelectionBtnHidden",
            ListButtonscontainer:"ListButtonscontainerHidden"
        })
    }
    render(){
        const LanguageSelectionBtnsCreation=this.state.LanguageArray.map((item)=>{
            return(
                <Link to={`?lang=${item.code}`}>
                  <button className={classes.ListButtons} onClick={()=>{this.props.OnSelectLanguageBtnClick(item.language)}}>
                    {item.language}
                  </button>
                </Link>
            )
        })
        return(
            <div className={classes.LanguageSelection} >
                <button className={classes[this.state.LanguageSelectionBtnA]}  onClick={()=>{this.OnLanguageSelectionBtnAClick()}}>
                   {this.props.selectLanguage}
                   <i className="fas fa-caret-down"></i>
                </button>
                <button className={classes[this.state.LanguageSelectionBtnB]}  onClick={()=>{this.OnLanguageSelectionBtnBClick()}}>
                   {this.props.selectLanguage}
                   <i className="fas fa-caret-down"></i>
                </button>
                <div className={classes[this.state.ListButtonscontainer]}
                     onMouseLeave={()=>{
                         this.OnMouseLeaveListContainer()
                     }}
                >
                   {LanguageSelectionBtnsCreation}
                </div>
            </div>
        )
    }
}
export default LanguageSelection