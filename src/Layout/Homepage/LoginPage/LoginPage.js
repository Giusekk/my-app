import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../../Config/firebase';
import 'firebase/auth';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/'
}


class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>

            </Container>
        )
    }
}


const enhance = connect(
    ({firebase: {auth, profile}}) => ({
        auth,
        profile
    })
)
export default enhance(LoginPage);