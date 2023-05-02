import React from "react";
import './loginregister.css'
export default function Login() {

    return (
        <> 
            <div>
                <img  class="imgFondo" src="/salon.jpg"></img>
                <div class="boxLogin">
                    <div class="grad">
                        <div class="header">
                            <img className='imagenLogo' src='/chr.png'></img>
                        </div>
                    </div>
                    <br/>
                    <div class="login">
                        <input type="text" placeholder="username" name="user" required="Aquest camp és obligatori" 
                            minLength="6"
                            maxLength="40"
                            pattern="/^[a-zA-Z0-9._%+-]+@fp\.insjoaquimmir\.cat$/"/><br/>
                        <input type="password" placeholder="password" name="password" required="Aquest camp és obligatori" 
                            minLength="8"
                            maxLength="20"
                            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/"/><br/>
                        <input type="button" value="Login"/>
                    </div>
                </div>
            </div>
        </>
    )
}
