import * as React from 'react'
import { DateTime } from 'luxon'

interface Props {
  readonly time: Date
}

const RelativeTime: React.FC<Props> = (props: Props) => {
  const { time } = props
  const [relTime, setRelTime] = React.useState<string | null>(null)
  const [intervalID, setIntervalID] = React.useState<NodeJS.Timeout>()

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
      intervalID != null && clearInterval(intervalID)
    }
  }, [time])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {relTime}
    </>
  )
}

export default RelativeTime
