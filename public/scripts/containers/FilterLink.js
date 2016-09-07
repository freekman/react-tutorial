import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import Link from '../components/Link';


const mapStateToProps = (store, ownProps)=> {
  return {
    active: ownProps.filter === store.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    onClick: ()=> {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};
const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;
