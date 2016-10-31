import { connect } from 'react-redux'
import LinkList from '../components/LinkList'

const getVisibleLinks = (links, filter) => (
  links[filter]
)

const mapStateToProps = (state) => ({
  links: getVisibleLinks(state.links, state.visibilityFilter)
})

const VisibleLinkList = connect(
  mapStateToProps
)(LinkList)

export default VisibleLinkList
