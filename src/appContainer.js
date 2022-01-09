import MainApp from './appRoute';
import { connect } from 'react-redux';
import { getData, setData, toggleClick } from './action/actionCreator';

const mapDispatchToProps = {
    getData,
    setData,
    toggleClick,
}

const mapStateToProps = (state, ownProps) => ({
    data: state.data,
    clicked: state.clicked,
    dummy: "dummy"
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)