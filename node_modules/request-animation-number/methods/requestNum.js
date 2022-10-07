/**
 * a function to be used mostly for animations
 * which takes a number and performes a callback function every time that number is updated
 *
 *  in modern browsers this function will match the client screen refresh rate
 *
 * **Syntax** `requestNum(options, callback)`
 *
 * @param {Object} options
 *
 * @param {(number|Array.<Number>)} [options.from]
 *
 * start form this number/s
 *
 * takes one number or array of numbers
 *
 * **Initial Value** `0 | [0, 0 , ...]`
 *
 * @param {(number|Array.<Number>)} options.to
 *
 * ends at this number/s
 *
 * takes one number or array of numbers
 *
 * @param {Number} [options.duration]
 *
 * the duration the function will take to change the number (in milliseconds)
 *
 * **Initial Value** `350`
 *
 * @param {Number} [options.delay]
 *
 * delay time before starting (in milliseconds)
 *
 * **Initial Value** `0`
 *
 * @param {Boolean} [options.yoyo]
 *
 * go back to the start point if true
 *
 * **Initial Value** `false`
 *
 * @param {Boolean} [options.yoyoDuration]
 *
 * the duration to go back to start point (in milliseconds)
 *
 * **Initial Value** `duration`
 *
 * @param {Boolean} [options.yoyoDelay]
 *
 * delay time before starting the yoyo (in milliseconds)
 *
 * **Initial Value** `delay`
 *
 * @param {Boolean} [options.replay]
 *
 * replay count after the first play
 *
 * infinite if replay === -1
 *
 * **Initial Value** `0`
 *
 * @param {linear" | easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInExpo" | "easeOutExpo" | "easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInBack" | "easeOutBack" | "easeInOutBack" | "easeInElastic" | "easeOutElastic" | "easeInOutElastic" | "easeInBounce" | "easeOutBounce" | "easeInOutBounce"} [options.easingFunction]
 *
 * Timing functions specify the rate of change of the number over time.
 *
 * Takes a String or Function
 *
 * **Initial Value** `linear`
 *
 * @param {Function} callback
 *
 * this function will be called every time the number/s is updated
 *
 * this function take parameter/s which represent the updating number/s
 *
 * **Syntax** `function name(x, ...) { //... do somthing with (x , ...) }`
 *
 */
export async function requestNum(options, callback) {
  const easing = {
    linear: x => x,
    easeInSine: x => 1 - Math.cos((x * Math.PI) / 2),
    easeOutSine: x => Math.sin((x * Math.PI) / 2),
    easeInOutSine: x => -(Math.cos(Math.PI * x) - 1) / 2,
    easeInQuad: x => x * x,
    easeOutQuad: x => 1 - (1 - x) * (1 - x),
    easeInOutQuad: x => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
    easeInCubic: x => x * x * x,
    easeOutCubic: x => 1 - Math.pow(1 - x, 3),
    easeInOutCubic: x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
    easeInQuart: x => x * x * x * x,
    easeOutQuart: x => 1 - Math.pow(1 - x, 4),
    easeInOutQuart: x => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
    easeInQuint: x => x * x * x * x * x,
    easeOutQuint: x => 1 - Math.pow(1 - x, 5),
    easeInOutQuint: x => (x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2),
    easeInExpo: x => (x === 0 ? 0 : Math.pow(2, 10 * x - 10)),
    easeOutExpo: x => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)),
    easeInOutExpo: x =>
      x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
    easeInCirc: x => 1 - Math.sqrt(1 - Math.pow(x, 2)),
    easeOutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
    easeInOutCirc: x =>
      x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
    easeInBack: x => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: x => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    },
    easeInOutBack: x => {
      const c1 = 1.70158;
      const c2 = c1 * 1.525;
      return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInElastic: x => {
      const c4 = (2 * Math.PI) / 3;
      return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: x => {
      const c4 = (2 * Math.PI) / 3;
      return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: x => {
      const c5 = (2 * Math.PI) / 4.5;
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
        : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBounce: x => 1 - easing.easeOutBounce(1 - x),
    easeOutBounce: x => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
      }
    },
    easeInOutBounce: x => (x < 0.5 ? (1 - easing.easeOutBounce(1 - 2 * x)) / 2 : (1 + easing.easeOutBounce(2 * x - 1)) / 2),
  };

  const wait = time => new Promise(e => setTimeout(e, time));
  options = options || {};

  options.duration = options.duration === undefined ? 350 : options.duration;

  options.yoyoDuration = options.yoyoDuration === undefined ? options.duration : options.yoyoDuration;

  options.delay = options.delay ? options.delay : 0;

  options.yoyoDelay = options.yoyoDelay === undefined ? options.delay : options.yoyoDelay;

  options.easingFunction =
    options.easingFunction === undefined
      ? easing.linear
      : typeof options.easingFunction === 'string'
      ? easing[options.easingFunction]
      : options.easingFunction;

  if (options.delay) await wait(options.delay);

  let start = null;
  let end = null;

  if (options.from === undefined && typeof options.to === 'object') {
    options.from = [];
    options.to.forEach(() => options.from.push(0));
  } else if (options.from === undefined && typeof options.to === 'number') {
    options.from = 0;
  } else if (typeof options.from === 'object' && typeof options.to === 'object' && options.from.length !== options.to.length) {
    console.error('[from] and [to] lengths does not match');
    return;
  }

  const startAnim = timeStamp => {
    start = timeStamp;
    end = start + options.duration;
    draw(timeStamp);
  };

  const draw = async now => {
    const p = (now - start) / options.duration;

    if (typeof options.from === 'object' && typeof options.to === 'object') {
      const values = [];
      options.from.forEach((e, i) => {
        let x = e + (options.to[i] - e) * options.easingFunction(p);
        x = now - start >= options.duration ? options.to[i] : x;
        values.push(x);
      });
      callback(...values);
    } else if (typeof options.from === 'number' && typeof options.to === 'number') {
      let x = options.from + (options.to - options.from) * options.easingFunction(p);
      x = now - start >= options.duration ? options.to : x;
      callback(x);
    }

    if (!(now - start >= options.duration)) {
      requestAnimationFrame(draw);
    } else if (options.replay && options.yoyo) {
      requestNum(
        {
          ...options,
          to: options.from,
          from: options.to,
          yoyo: false,
          duration: options.yoyoDuration,
          delay: options.yoyoDelay,
          replay: 0,
          dontWait: true,
        },
        callback
      );
      await wait(options.yoyoDuration + options.yoyoDelay);
      requestNum({ replay: options.replay === -1 ? options.replay : options.replay--, ...options }, callback);
    } else if (options.replay) {
      requestNum({ replay: options.replay === -1 ? options.replay : options.replay--, dontWait: true, ...options }, callback);
    } else if (options.yoyo) {
      requestNum(
        {
          ...options,
          to: options.from,
          from: options.to,
          yoyo: false,
          duration: options.yoyoDuration,
          delay: options.yoyoDelay,
        },
        callback
      );
    }
  };

  requestAnimationFrame(startAnim);
  if (!options.dontWait && options.replay !== -1) {
    if (options.yoyo && options.replay) {
      await wait(
        (options.duration + options.yoyoDuration + options.yoyoDelay) * (options.replay + 1) + options.delay * options.replay
      );
    } else if (options.replay) {
      await wait(options.duration * (options.replay + 1) + options.delay * options.replay);
    } else if (options.yoyo) {
      await wait(options.duration + options.yoyoDuration + options.yoyoDelay);
    } else {
      await wait(options.duration);
    }
  }
}
