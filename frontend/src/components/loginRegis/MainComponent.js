import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function MainComponent() {
    const [isNewUser, setIsNewUser] = useState(false);

    const handleSwitch = () => {
        setIsNewUser(!isNewUser);
    };

    return (
        <div>
            {isNewUser ? <RegistrationForm /> : <LoginForm />}
            <button onClick={handleSwitch}>
                {isNewUser ? 'Already have an account? Log in!' : 'Don\'t have an account? Register!'}
            </button>
        </div>
    );
}
export default MainComponent;
