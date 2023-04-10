import { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // replace this console.log statement with code to submit the form data to your backend or API
  }

    return (
        <form onSubmit={handleSubmit} style={{textAlign: "center", padding: "20px" }}>
        <label style={{color: "black", borderRadius: '20px', textAlign: "center" }}>
            Subscribe to our newsletter </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value )} style={{color: "white", borderRadius: '8px', margin:"20px", width: "200px"}} />
        
        <button type="submit" style={{color: "white", backgroundColor: '#FF8C00', borderRadius: '8px'}}
        >Sign Up</button>
        </form>
    );
}

export default SubscriptionForm;
