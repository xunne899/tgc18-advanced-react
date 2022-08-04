import React, {useState} from 'react'

// a hook is a function provided by React or a third party package
// useNavigate creates a function which we can use to change 'pages'
import { useNavigate } from 'react-router-dom'

export default function ContactUs(){

    // create a navigation function returned from useNavigate()
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        fullname: '',
        email: ''
    })
    
    const updateFormField = (e) => {
        setFormState({
            ...formState,  // <-- duplicating the original form state object
            [e.target.name]: e.target.value // <-- rewrite the key that has been changed
        })
    }

    function submitForm() {
        // use the returned navigate function to change pages
        navigate('/form-submitted');
    }

    return <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <label>Full Name:</label>
            <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" value={formState.email} onChange={updateFormField}/>
        </div>
        <button onClick={submitForm}>Submit</button>

    </React.Fragment>
}