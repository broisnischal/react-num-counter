import React from "react";
import { useRef, useState, useEffect } from "react";

/**
 * 描述
 * @date 2022-09-09
 * @param {number} {start=0
 * @param {number} end=100
 * @param {number} speed=1
 * @param {boolean} decrement
 * @param {number} offsetend=0
 * @param {any} style
 * @param {boolean} triggeronce=false
 * @param {number} threshold=0.5
 * @param {any} child
 * @param {any} }
 * @returns {any}
 */
const Counter = ({
  start = 0,
  end = 100,
  speed = 1,
  decrement,
  offsetend = 0,
  style,
  triggeronce = false,
  threshold = 0.5,
  child,
}) => {
  const [count, setCount] = useState(null);
  const [inView, setInview] = useState(false);
  const countref = useRef(start);
  const countdown = useRef(end);
  const [trigger, setTrigger] = useState(null);
  const viewRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInview(entry.isIntersecting);
      },
      {
        threshold,
      }
    );
    observer.observe(viewRef.current); /// function to be triggered

    const incrementCounter = () => {
      const accumulator = end / 100;

      if (countref.current < end) {
        const result = Math.ceil(countref.current + accumulator);

        if (result >= end) {
          //   setTrigger(true);
          return setCount(end + offsetend);
        }

        setCount(result);
        countref.current = result;
      }

      if (trigger) {
        clearTimeout(incrementCounter);
        setCount(end);
      }

      setTimeout(incrementCounter, speed * 50);
    };

    const decrementCounter = () => {
      const accumulator = end / 100;

      if (countdown.current > start) {
        const result = Math.ceil(countdown.current - accumulator);

        if (result <= start) {
          setTrigger(false);
          return setCount(start + offsetend);
        }

        setCount(result);
        countdown.current = result;
      }

      if (trigger) {
        clearTimeout(decrementCounter);
        setCount(start);
      } else {
        setTimeout(decrementCounter, speed * 50);
      }
    };

    if (inView) {
      if (decrement) {
        decrementCounter();
      } else {
        incrementCounter();
      }
    }
  }, [
    inView,
    start,
    end,
    speed,
    decrement,
    offsetend,
    trigger,
    triggeronce,
    threshold,
  ]);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      ref: viewRef,
    },
    /*#__PURE__*/ React.createElement(
      "span",
      {
        style: style,
      },
      count,
      child
    )
  );
};

export default Counter;
