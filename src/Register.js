import React from "react"
import classes from "Register.module.css"
import LivePreviewExample from "./example-components/PagesRegister/PagesRegisterContent/index"

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
           <div className={classes.RegisterFormContainer}>
              <LivePreviewExample RegisterPageData={this.props.RegisterPageData}/>
           </div>
        )
    }
}

export default Register