import React, { PropTypes } from 'react'

const Link = ({ href, text }) => (
  <li>
    <a href={ href }>
      {text}
    </a>
  </li>
)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Link
