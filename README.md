# [React Number Increment](https://www.npmjs.com/package/react-number-increment)

[![GitHub license](https://img.shields.io/npm/l/react-number-increment.svg?style=flat-square)]()
[![Version](https://img.shields.io/npm/v/react-number-increment)](https://www.npmjs.com/package/react-number-increment)
[![Downloads](https://img.shields.io/npm/dw/react-number-increment?style=plastic)](http://www.npmtrends.com/react-number-increment)

A configurable React component For counting up the number in your React appilcation. [react-number-increment](https://github.com/neeswebservices/react-num-counter.git).

## Table of Contents

- [Installation](#installation)

## Installation

```bash
yarn add react-number-increment
```

```bash
npm install react-number-increment
```

## Import

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
import Counter from "react-number-increment";

function App() {
  return (
    <div className="App">
      <Counter
        start=0 // starting
        end=500 // ends
        speed=1 // 100ms
        decrement // in case if you want to decrement
        style={{ fontSize: "200px", fontWeight: 900 }} // add custom style
        triggeronce // once updates on render | NA
        threshold=1 // viewport 1=100%,
        child="+" // add childs ie + , - , *
        offset=5 // increments by 5
        seperate="," // seperates number in comma
       />
    </div>
  );
}

export default App;
```

Note that `offsetend={4}` will add the offset to the ending value.

#### Add end and starting Number

```js
<Counter offsetend={4} speed={10} end={10} />
```

`Tip: If you need to start the render prop component immediately, you can set speed={0}.`

### If you know about default values 👍

| key       | Value | Guide / What they does |
| --------- | ----- | ---------------------- |
| start     | 0     | Starting value         |
| end       | 100   | Ending value           |
| speed     | 1     | 1 is 100ms speed.      |
| decrement | 0     | pass to decrement      |
| offsetend | 0     | Adds the value in end  |
| threshold | .5    | 1 = 100%               |
| child     | "+"   | 100- , 2000*, "-", "*" |
| offset    | null  | 5 // increments by 5   |
| seperate  | null  | "," - 10,900           |

##### License ISC
