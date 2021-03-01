// @flow

import * as React from 'react'
import { DateTime } from 'luxon'

type Props = {
  +time: Date
}

const RelativeTime = (props: Props): React.Node => {
  const { time } = props
  const [relTime, setRelTime] = React.useState<string>('')
  const [intervalID, setIntervalID] = React.useState()

  React.useEffect(() => {
    let mounted = true
    const dt = DateTime.fromJSDate(time)
    setRelTime(dt.toRelative())
    setIntervalID(setInterval(() => {
      if (mounted) {
        setRelTime(dt.toRelative())
      }
    }, 60000)
    )
    return function cleanup () {
      mounted = false
      clearInterval(intervalID)
    }
  }, [time])

  return relTime
}

export default RelativeTime
