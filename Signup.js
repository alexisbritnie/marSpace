export default function Signup(){
    
    return(
        <div class = "full-screen-container">
        <div class="login-container">
            <h1 class="login-title">Signup</h1>
            <form class="form">

                <div class="input-group success">
                    {/* <label for="email"> Email</label> */}
                    <input type="email" name=" email" id = "email" placeholder="Email"></input>
                    <span class="msg">Valid Email</span>
                </div>

                <div class="input-group error">
                    {/*<label for="password"> Password</label>*/}
                    <input type="password" name="password" id = "Password" placeholder="Password"></input>
                    <span class="msg">Password doesn't meet requirements</span>
                </div>

                <button type = "submit" class="login-button">Login</button>
            </form>
        </div>
      </div>
    )

}