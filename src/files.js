/**
 * FILE VARIABLES ==============================================================
 * =============================================================================
 */

const files = {
  PATH_IMAGES: '/static/images/',
  PATH_SOUNDS: '/static/sounds/'
}

export default files

export const DEFAULT = {
  SETTINGS: {
    HAS_SOUND: false
  }
}

/* Sounds */
export const SOUND = {
  ALERT: soundFile('alert.mp3'),
  INCREASE: soundFile('increase.mp3'),
  DECREASE: soundFile('decrease.mp3'),
  PRESS: soundFile('press.mp3'),
  PROGRESS: soundFile('progress.mp3'),
  TOUCH: soundFile('touch.mp3'),
  SWOOSH: soundFile('swoosh.mp3'),
  SLIDE: soundFile('slide.mp3'),
}


/**
 * HELPER FUNCTIONS ------------------------------------------------------------
 * -----------------------------------------------------------------------------
 */

/**
 * Lazy Load Sound File with safe .play() method that is muted when sound is off
 *
 * @param {String} name - sound file name
 * @returns {Object<{play()}>} - object with .play() method
 */
function soundFile (name) {
  let file
  return {
    play () {
      if (!file) file = new Audio(files.PATH_SOUNDS + name)
      if (DEFAULT.SETTINGS.HAS_SOUND && file) file.play().catch(console.error)
    }
  }
}
