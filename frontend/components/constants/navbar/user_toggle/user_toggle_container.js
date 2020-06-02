import { connect } from 'react-redux';

// import { logout } from '../../actions/session/session_actions'
import UserToggle from './user_toggle.jsx'

const mapStateToProps = (state) => {  
    return {
        currentUser: state.entities.users[state.session.id] //I dont think this is right.
    }
}

// not creating map dispatch to props because I dont think it makes sense 
//to next the popup that logout is located in within the toggle container, might change this 
//after talking to josh. 

export default connect(mapStateToProps)(UserToggle);

