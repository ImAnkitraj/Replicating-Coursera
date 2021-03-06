import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Login() {
    return (
        <div class="container login-container animated fadeIn">
            <div class="row">
                <div class="col-lg-6 col-sm-12 login-form-2">
                    <h3>Login Here</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                            <NavLink to='/'><input type='submit' class="btnSubmit" value="Back" /></NavLink>
                        </div>
                        <div class="form-group">

                            <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
