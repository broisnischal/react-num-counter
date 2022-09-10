import React, { useMemo } from "react";
import { useRef, useState, useEffect } from "react";
const DEFAULTS = {
  start: 0,
  end: 100,
  speed: 1,
  decrement: null,
  offsetend: 0,
  style: null,
  triggeronce: false,
  threshold: 0.5,
  child: "+",
  offset: null,
  seperate: "",
};

/**
 * Represents the Counter.
 * @constructor
 * @param {number} start - Starting value of the counter.
 * @param {number} end - Ending value of the counter.
 * @param {float} speed - speed.
 * @param {boolean} decrement - Ending value of the counter.
 * @param {number} offsetend - Adds the value to end.
 * @param {number} offset - Increament value by it.
 * @param {any} style - Add your styles here.
 * @param {float} threshold - defines viewport.
 * @param {any} child  - Items after number.
 * @param {string} seperate  - it seperates number by , or dot.
 */
const Counter = (props) => {
  const {
    start,
    end,
    speed,
    decrement,
    offsetend,
    offset,
    style,
    triggeronce,
    threshold,
    child,
    seperate,
  } = useMemo(() => {
    return { ...DEFAULTS, ...props };
  }, [props]);
  const [count, setCount] = useState(0);
  const [inView, setInview] = useState(false);
  const countref = useRef(start);
  const countdown = useRef(end);
  const [trigger, setTrigger] = useState(null);
  const viewRef = useRef();

  const commify = (n, seperatewith) => {
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return (
      numberPart.replace(thousands, `${seperatewith}`) +
      (decimalPart ? "." + decimalPart : "")
    );
  };

  const formatted = useMemo(() => commify(count, seperate), [count, seperate]);
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
      const accumulator = offset ?? end / 100;

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

      setTimeout(incrementCounter, speed * 100);
    };

    const decrementCounter = () => {
      const accumulator = offset ?? end / 100;

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
    offset,
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
      formatted,
      child
    )
  );
};

export default Counter;
