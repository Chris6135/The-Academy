import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);


const Protected = ({ component: Component, path, loggedIn, exact, user }) => {
  return(

  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signin" />
    )
  )} />)}
;

// class PRoute extends React.Componet{
//   constructor(props){
//     super(props)
//   }
  
//   render(){

//     return(
      
//     <Route path={path} exact={exact} render={(props) => (
//       this.props.currentUserID === this.ownerId ? (
//         <Component {...props} />
//         ) : (
//           <Redirect to="/signin" />
//           )
//           )} />
//         )
//      }
// }


const mapStateToProps = state => (
    {loggedIn: Boolean(state.session.id),
     currentUserId: state.session.id}
  );
  

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// export const PrivateRoute = withRouter(connect(mapStateToProps)(PRoute));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

