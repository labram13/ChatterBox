import './Login.css'


export default function Login() {

    return (
        <form>
                <div className="login-header">
                <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M20 22H80V57H55L40 72V57H20V22Z"
                    stroke="black"
                    strokeWidth="8"
                />
                <path
                    d="M40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44Z"
                    fill="black"
                />
                <path
                    d="M50 44C52.2091 44 54 42.2091 54 40C54 37.7909 52.2091 36 50 36C47.7909 36 46 37.7909 46 40C46 42.2091 47.7909 44 50 44Z"
                    fill="black"
                />
                <path
                    d="M60 44C62.2091 44 64 42.2091 64 40C64 37.7909 62.2091 36 60 36C57.7909 36 56 37.7909 56 40C56 42.2091 57.7909 44 60 44Z"
                    fill="black"
                />
                </svg>
                <h2>Login</h2>
            </div>
    

            <input type="text" placeholder='email'/>
            <input type="text" placeholder='passord'/>
            <button>Sign in</button>
            <div className="register-row">
                <p>Don't have an account?</p> 
                <button className="register">Register</button>
            </div>



        </form>
    )
}
