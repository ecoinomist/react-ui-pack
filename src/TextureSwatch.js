import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Text from './Text'

/**
 * Texture Swatch - Pure Component.
 */
export function TextureSwatch ({
  src,
  small,
  large,
  className,
  style,
  ...props
}) {
  if (src) style = {backgroundImage: `url('${src}')`, ...style}
  return <Text className={cn('texture__swatch', className, {small, large})} style={style} {...props}/>
}

TextureSwatch.propTypes = {
  /** Full Path, URL or Base64 String of Texture Image file */
  src: PropTypes.string.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default React.memo(TextureSwatch)
