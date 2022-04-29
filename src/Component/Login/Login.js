import { useState } from 'react';




export default function Login() {

    const [userNameData, setUserNameData] = useState({
        email: "",
        password: "",
    })





    const handlechange = (e) => {
        setUserNameData({
            ...userNameData,
            [e.target.name]: e.target.value
        });
    }





    const handleSubmit = (e) => {
        e.preventDefault();


    }
    return (

        <div className="container">
            <form>

                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={userNameData.email} data-testid="email-input" name="email" className="form-control" placeholder="Enter email" onChange={handlechange} />
                    {userNameData.email && !(/\S+@\S+\.\S+/).test(userNameData.email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
                </div>



                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={userNameData.password} data-testid="password-input" name="password" className="form-control" placeholder="Enter password" onChange={handlechange} />
                    {userNameData.password && !/^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/.test(userNameData.password) && <span className="error" data-testid="error-msg">Please enter a valid password</span>}

                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={handleSubmit} data-testid="button" className="btn btn-primary btn-block">Submit</button>

            </form>
        </div>

    );
}




