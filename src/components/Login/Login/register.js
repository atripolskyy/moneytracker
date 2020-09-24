import React from "react";
import loginImg from "./style/img/white.jpg"
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


export class Register extends React.Component {

    state = { 
        profileImg: loginImg
    }
    constructor (props) { 
        super (props);
    } 
    imageHandler = (el) => { 
        const reader = new FileReader();
        reader.onload = () => { 
            if (reader.readyState === 2) { 
                this.setState({profileImg: reader.result})
            } 
        }
        reader.readAsDataURL(el.target.files[0])
    } 

   
    render () { 
        const {profileImg} = this.state;

        return (
            <div className="base-container">
                <div className="content">
                    <div className="image-reg">
                        <img src={profileImg} />
                        <div className="from-group-hide">                           
                         <input accept="image/*"  id="icon-button-file" type="file" multiple onChange={this.imageHandler}  />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>    
                        </label>                                   
                        </div>
                        {/* <div className="radio-gender">
                        <FormControl component="fieldset">                  
                         <RadioGroup aria-label="gender" name="gender1" row>                        
                                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                <FormControlLabel value="male"  control={<Radio color="primary" />} label="Male" />
                        </RadioGroup>   
                        </FormControl>  
                        </div> */}
                    </div>
                    <div className="form">  
                        <div className="from-group">
                            <label htmlFor="username"></label>
                            <input type="text" name = "username" placeholder="User name" />
                        </div>
                        <div className="from-group">
                            <label htmlFor="password"></label>
                            <input type="password" name = "password" placeholder="Password" />
                        </div>                       
                        <div className="from-group">
                            <label htmlFor="password"></label>
                            <input type="tel" name = "phoneNumber" placeholder="Phone number" />
                        </div>                       
                    </div>
                </div>
                <div className="footer">
                    <Button variant="contained" color="primary" type = "button" className="btn">
                        Sign up
                    </Button>
                </div>
            </div>
        )
    }
}

