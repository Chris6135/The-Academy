import { connect } from 'react-redux';

import { logOut } from '../../../../actions/session/session_actions'
import NavBox from './nav_box.jsx'

const mapStateToProps = (state) => {  
    return {
        currentUser: state.entities.users[state.session.id] //I dont think this is right.
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logOut())
  });
  

export default connect(mapStateToProps ,mapDispatchToProps)(NavBox);

