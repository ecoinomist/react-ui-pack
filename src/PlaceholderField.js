import PropTypes from 'prop-types'
import React from 'react'
import { toLowerCase } from 'utils-pack'
import { _ } from 'utils-pack/src/translations'
import Text from './Text'
import View from './View'

/**
 * Placeholder Field - Pure Component.
 */
export default function PlaceholderField ({name, ...props} = {}) {
  if (props.children == null)
    props.children = <Text className='p error padding border'>
      <Text className='bold'>{name}</Text>{toLowerCase(_.FIELD_DOES_NOT_EXIST)}
    </Text>
  return <View {...props}/>
}

PlaceholderField.propTypes = {
  name: PropTypes.any
}
