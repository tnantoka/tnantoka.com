import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import SubTitleLink from '../components/SubTitleLink'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  null,
  mapDispatchToProps
)(SubTitleLink)

export default FilterLink
