import { connect } from 'react-redux'
import LinkList from '../components/LinkList'

const getVisibleLinks = (links, filter) => (
  links[filter] || links.sns
)

const mapStateToProps = (state, ownProps) => ({
  hoge: console.log(window.hoge = state),
  // links: getVisibleLinks(state.links, state.visibilityFilter)
  links: getVisibleLinks(state.links, ownProps.filter)
})

const VisibleLinkList = connect(
  mapStateToProps
)(LinkList)

export default VisibleLinkList
