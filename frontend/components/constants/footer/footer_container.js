import { connect } from 'react-redux';
import {fetchCategories} from "../../../actions/lessons/lesson_actions"
import Footer from './footer.jsx'

const mapStateToProps = (state) => {  
    return {
        categories: state.entities.categories //I dont think this is right.
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCategories : ()=> dispatch(fetchCategories())
  });
  

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
