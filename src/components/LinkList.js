import React, { PropTypes } from 'react'
import Link from './Link'

const LinkList = ({ links }) => (
  <section>
    <ul>
      {links.map(link =>
        <Link
          key={link.href}
          {...link}
        />
      )}
    </ul>
  </section>
)

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default LinkList
