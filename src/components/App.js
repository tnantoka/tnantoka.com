import React from 'react'
import { connect } from 'react-redux'
import VisibleLinkList from '../containers/VisibleLinkList'
import SubTitle from '../components/SubTitle'
import { Link } from 'react-router';

// const App = () => (
//   <div>
//     <article>
//       <h1><a href="/">@tnantoka</a></h1>
//       <SubTitle />
//     </article>
//     <VisibleLinkList />
//   </div>
// )
class App extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1><Link to="/">@tnantoka</Link></h1>
          <SubTitle />
          <VisibleLinkList filter={this.props.filter}/>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
hoge: console.log(ownProps),
hoge: console.log(ownProps.location.pathname),
  filter: ownProps.location.pathname.slice(1)
})

const ContainerApp = connect(
  mapStateToProps
)(App)

export default ContainerApp
