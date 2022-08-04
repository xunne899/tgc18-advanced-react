import React, {useState} from 'react'

// a hook is a function provided by React or a third party package
// useNavigate creates a function which we can use to change 'pages'
import { useNavigate } from 'react-router-dom'

export default function ContactUs(){

    // create a navigation function returned from useNavigate()
    const navigate = useNavigate();

    const [fullname, setFullname] = useState(""); // argument in the useState is the default value
    const [email, setEmail] = useState(""); 
    

    const updateFullName = (e) => {
        setFullname(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    function submitForm() {
        // use the returned navigate function to change pages
        navigate('/form-submitted');
    }

    return <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <label>Full Name:</label>
            <input type="text" name="fullname" value={fullname} onChange={updateFullName}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={updateEmail}/>
        </div>
        <button onClick={submitForm}>Submit</button>

    </React.Fragment>
}