# [React Number Increment](https://github.com/neeswebservices/react-num-counter.git)

[![GitHub license](https://img.shields.io/npm/l/react-countup.svg?style=flat-square)](https://github.com/glennreyes/react-countup/blob/master/LICENSE)
[![Build Status](https://img.shields.io/travis/glennreyes/react-countup.svg?style=flat-square)](https://travis-ci.org/glennreyes/react-countup)
[![Version](https://img.shields.io/npm/v/react-number-increment)](https://www.npmjs.com/package/react-number-increment)
[![Downloads](https://img.shields.io/npm/dy/react-number-increment)](http://www.npmtrends.com/react-number-increment)

A configurable React component For counting up the number in React appilcation. [react-number-increment](https://github.com/neeswebservices/react-num-counter.git).

## Table of Contents

- [Installation](#installation)

## Installation

```bash
yarn add react-number-increment
```

```bash
npm install react-number-increment
```

## Usage

```js
import Counter from "react-number-increment";
```

### Simple example

```js
<Counter end={100} />
```

This will start a count up transition from `0` to `100` on render.

### Render prop example

```js
import "./App.css";
import Counter from "./Counter/index";

function App() {
  return (
    <div className="App">
      <Counter
        style={{ fontSize: "200px", fontWeight: 900 }}
        increment
        child="+"
        offsetend={4}
      />
    </div>
  );
}

export default App;
```

Note that `offsetend={0}` will add the offset to the ending value.

#### Delay start

```js
<CountUp offsetend={2} speed={10} end={10} />
```

## License

MIT
