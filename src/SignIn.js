import React from "react"
import classes from "./SignIn.module.css"
import LivePreviewExample from './example-components/PagesLogin/PagesLoginContent/index'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div  className={classes.LoginFormContainer}>
                 <LivePreviewExample SignInPageData={this.props.SignInPageData}/>
            </div>
        )
    }
}
export default SignIn