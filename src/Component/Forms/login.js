import React, { Component } from 'react';
import { withRouter} from 'react-router';
import {Context} from '../../App';
import img from '../../assets/images/7.png';
import {Link} from 'react-router-dom';
import {login} from '../../API/user';
// import AuthorsList from '../../Component/Authors/List';
// import MainPage from '../../Component/MyBooks/MainPage';
// import {Redirect } from 'react-router';


const intState={
    firstname:'',
        password:'',
        // userErr:'',
        // pwErr:'',
        loginErr:'',
        admin:true,
        result:0
}

class Login extends Component {

    state = intState;

    handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }
        ,
      ()=>{
        console.log(this.state);
      }  
        )
    }

    // handleLogin=()=>{
    //     const{firstname,password}=this.state;
    //     debugger
       
    //     login({firstname,password})
    //     .then(res=>{
    //        //this.props.history.push("/home")
    //        debugger
    //     })
    //     .catch(err=>{
    //         debugger
    //     //   let loginErr= "check the name or password";
            
    //     //     if (err){
    //     //         this.setState({loginErr:loginErr,result:0 })
    //     //     }
    //     //     debugger
    //     })
 //   }
    // search(users) {
    //     let userErr = "";
    //     let pwErr = "";
        
    //     const usersFound=users.filter(user=>user.firstname === this.state.username && user.password === this.state.password)
    //     if(usersFound.length!==0){
    //         const userId=Number(usersFound.map(u=>u.id).toString())
    //         this.setState({userErr: "", pwErr: "", result:userId},()=>{
    //             console.log(this.state.result)
    //         usersFound.map(user => user.firstname === this.state.username && user.password === this.state.password&&user.admin === true ?
    //             this.props.history.push("/admin")
    //             : this.props.history.push("/home")
    //             )
    //         })
    //     }
    //     else{
    //         users.filter(user=>(user.firstname !== this.state.username)?
    //         userErr= "check the name or password" 
    //         :( user.firstname === this.state.username && user.password !== this.state.password)?
    //         pwErr= "check the name or password"
    //         :userErr= " " ,pwErr= " "
    //         )
       
    //         if (userErr||pwErr) {
    //             this.setState({userErr:userErr,pwErr:pwErr,result:0 })
    //             return false
    //         }
    //     }
                       
        
        
    // }
  
 
   
    
    handleSubmit=(handlelogin)=>(e)=>{
        console.log("hiiiiiii")
        e.preventDefault();
        debugger;
        //this.handleLogin()
       // handleLogin(this.state.firstname,this.state.password)
       const{firstname,password}=this.state;
       debugger
       if(!firstname && !password){
        this.setState({loginErr:"please enter the nameand the password"})
       }
       else if(!firstname){
           this.setState({loginErr:"please enter the name "})
       }
        else if (!password){
            this.setState({loginErr:"please enter the password "})
           }
           
       else{
        // login({firstname,password})
        debugger
        const userlogin= {firstname:this.state.firstname, password:this.state.password}
        handlelogin(userlogin)
        .then(res=>{
            console.log("loginnnnnnn")
            debugger
            localStorage.setItem('usertoken',res.token)
            this.setState({loginErr:""})
           // handleLogin(res.profile)
           this.props.history.push("/home")
           debugger
        })
        .catch(err=>{
            this.setState({loginErr:"Incorrect email or password"})
            debugger
        })
       }
       
    }
    render() { 
        return ( 
            <Context.Consumer>
                {
                    value => (
                        <div className="row my-2 login-cont  p-5">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 mr-3  text-center">
                        <form className="  form-group sign-cont login-container p-4 " action="/action_page.php" onSubmit={this.handleSubmit(value.handlelogin)}>
                        <div className="card-title mb-4">Welcome To Good Reads</div>
                        <div className="imgcontainer m-2"><img src={img} className="avatar" alt="login"/></div>
                        <input  type="text" name= "firstname" placeholder="Enter Your UserName" className="form-control my-2" value={this.state.firstname} onChange={this.handleChange}></input>
                        {/* <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.userErr}
                            </div> */}
                        <input type="password" name= "password" placeholder="Enter Your Password" className="form-control my-2" value={this.state.password} onChange={this.handleChange}></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.loginErr}
                            </div>
                        <button type="submit" className="btn log-btn m-auto  my-2" >Log In</button>
                        <Link to="/signup" className="signUpLink">Sign Up</Link>
                        </form>
                        </div>
                        <div className="col-md-3"></div>
                        </div>
                    )
                }
                </Context.Consumer>

         );
    }
}
 
export default withRouter(Login);