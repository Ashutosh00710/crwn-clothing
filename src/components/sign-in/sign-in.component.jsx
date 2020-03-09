import React from 'react';
import FormInput from '../form-input/form-input.component';
import CoustomButton from '../coustom-button/coustom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { SignInContainer, ButtonContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="Email" required/>
                    <FormInput name='password' type='password' value={this.state.password} label="Password" handleChange={this.handleChange} required />
                    <ButtonContainer>
                        <CoustomButton type="submit">Sign In</CoustomButton>
                        <CoustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CoustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;