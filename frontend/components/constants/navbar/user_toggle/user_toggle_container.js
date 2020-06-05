import { connect } from 'react-redux';
import { logOut } from '../../../../actions/session/session_actions'
import UserToggle from './user_toggle.jsx'

const mapStateToProps = (state) => {  
    return {
        currentUser: state.entities.users[state.session.id] //I dont think this is right.
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () =>{   
     dispatch(logOut())
    }
  });
  

export default connect(mapStateToProps ,mapDispatchToProps)(UserToggle);

