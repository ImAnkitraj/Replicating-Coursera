import React from 'react'

export default function Signup() {
    return (
        <div class="container login-container">
            <div class="row">
                <div class="col-lg-6 col-sm-12 login-form-1">
                    <h3>Signup Here</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Signup" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
