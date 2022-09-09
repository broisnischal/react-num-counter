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

### Example

```js
// import "./App.css";
import Counter from "./Counter/index";

function App() {
  return (
    <div className="App">
      <Counter
        start=0 // number for starting
        end=500 // where it ends
        speed=0.1 // speed of increment 0.1 is the fastest
        style={{ fontSize: "200px", fontWeight: 900 }} // add custom style
        decrement // in case if you want to decrement
        triggeronce // once updates on render
        threshold=1 // viewport
        child="+" // add childs ie + , - , *
      />
    </div>
  );
}

export default App;
```

Note that `offsetend={4}` will add the offset to the ending value.

#### Add end and starting Number

```js
<CountUp offsetend={4} speed={10} end={10} />
```

If you have end number 100 it will ends in 104.Right now triggeronce on underdevelopment you may have to wait for another version for working of It.

## License

MIT
