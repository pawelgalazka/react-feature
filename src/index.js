import React from 'react'
import PropTypes from 'prop-types'

export function Feature ({name, config, children}) {
  const activeFeatures = Object.keys(config).filter(feature => config[feature])

  let featureName = name
  const hasNegation = name[0] === '!'

  if (hasNegation) {
    featureName = name.slice(1)
  }

  if (hasNegation && !activeFeatures.includes(featureName)) {
    return <React.Fragment>{children}</React.Fragment>
  }

  if (!hasNegation && activeFeatures.includes(featureName)) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return null
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  children: PropTypes.any
}
