import React from "react";
import {Link} from 'react-router-dom';
function SignUpPage() {


    return (
        <form>
            {/* onSubmit={submitHandler} */}
            <div className="form-inner">
                <h2>Signup</h2>
                <br></br>
                <div className="error"></div>
                {/* {error} */}
                {/* {(error != "") ? ( ) : ""} */}
                <div className="form-group">
                    <label htmlFor="username">username:</label>
                    <input type="username" name="username" id="username" />
                    {/* onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username}  */}
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">birthday: </label>
                    <input type="birthday" name="birthday" id="birthday"  />
                    {/* onChange={e => setDetails({ ...details, birthday: e.target.value })} value={details.birthday} */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"  />
                    {/* onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">confirm password:</label>
                    <input type="password" name="password" id="confirmpassword"  />
                    {/* onChange={e => setDetails({ ...details, confirmpassword: e.target.value })} value={details.confirmpassword} */}
                </div>
                <input type="submit" value="Signup" />
                <br></br>
                <Link to ="/"><h3>Have an Account? Login</h3></Link>
            </div>
        </form>

        
    );
}

// const adminUser = {
//     birthday: "dec 25 2001",
//     password: "groovit",
//     confirmpassword: "groovit"
//   }

//   const [user, setUser] = useState({username: "", birthday: ""});
//   const [error, setError] = useState("");

//   const Login = details => {
//     console.log(details);

//     if (details.birthday == adminUser.birthday && details.password == adminUser.confirmpassword && details.confirmpassword == adminUser.confirmpassword){
//       console.log("Signed in");
//       setUser({
//         username: details.username,
//         birthday: details.birthday
//       });
//     } else {
//       console.log("Details do not match!");
//       setError("Details do not match!");
//     }
//   }

//   const Logout = () => {
//     setUser({ username: "", birthday: ""});
//   }
//   const [details, setDetails] = useState({username: "", birthday: "", password: "", confirmpassword: ""});

//   const submitHandler = e => {
//       e.preventDefault();

//       Login(details);
//   }

 
export default SignUpPage;