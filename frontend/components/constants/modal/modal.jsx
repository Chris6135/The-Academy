import React from 'react';
import { closeModal } from '../../../actions/util/modal_actions';
import { connect } from 'react-redux';
import EditContainer from '../../lessons/edit/modal_placeholder_container'

class Modal extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     locked: false
        // }
    this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){
        if(!this.props.lock){
            this.props.closeModal()
        }
    }


    render(){
        if (!this.props.modal) {
            return null;
        }
        let component;
        switch (this.props.modal) {
            case 'newLesson':
            component = <EditContainer />;
            break;
            default:
            return null;
        }

        return (
            <div className="modal-background" onClick={this.handleClick}>
                {/* // <div className="modal-background"> */}

            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.type,
    lock:state.ui.modal.lock
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
