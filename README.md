# React-RelativeTime

React-RelativeTime is an extremely simple React Component which takes a JSDate and returns a string representation of the time relative to now.
It updates this time once a minute.

The relative time strings are provided by [Luxon](https://moment.github.io/luxon/), so include a lot of translations built-in.

## Installation

### NPM
`npm install @raddishiow/react-relativetime --save`
### Yarn
`yarn add @raddishiow/react-relativetime`
### PNPM
`pnpm add @raddishiow/react-relativetime`

## Usage

```
...
import RelativeTime from '@raddishiow/react-relativetime'
...

const date = new Date()

<RelativeTime time={Date} />
```

## Contributing

Feel free to fork and create pull requests for features, fixes, etc.
