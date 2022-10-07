type requestFrameEasing =
  | 'linear'
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack'
  | 'easeInElastic'
  | 'easeOutElastic'
  | 'easeInOutElastic'
  | 'easeInBounce'
  | 'easeOutBounce'
  | 'easeInOutBounce';

interface requestFrameOptions {
  /**
   * - Animation will starts form this number/s.
   * - takes one number or array of numbers.
   * **Initial Value** `0 | [0, 0 , ...]`
   */
  from?: number | number[];

  /**
   * - Animation will ends at this number/s.
   * - takes one number or array of numbers.
   */
  to: number | number[];

  /**
   * - the duration the function will take to change the number/s (in milliseconds).
   * - **Initial Value** `350`
   */
  duration?: number;

  /**
   * - Delay time before starting (in milliseconds).
   * - **Initial Value** `0`
   */
  delay?: number;

  /**
   * - Easing functions specify the rate of change of the number over time.
   * - Takes a string or Function.
   * - Check [easings.net](https://easings.net/) to learn more.
   * - **Initial Value** `linear`
   */
  easingFunction?: requestFrameEasing | ((x: number) => number);

  /**
   * - Go back to the start point if true.
   * - **Initial Value** `false`
   */
  yoyo?: boolean;

  /**
   * - The duration to go back to start point (in milliseconds).
   * - **Initial Value** `duration`
   */
  yoyoDuration?: number;

  /**
   * - Delay time before starting the yoyo (in milliseconds).
   * - **Initial Value** `0`
   */
  yoyoDelay?: number;

  /**
   * - replay count after the first play.
   * - infinite if replay is set to `-1` .
   * - **Initial Value** `0`
   */
  replay?: number;
}

export function requestNum(options: requestFrameOptions, callback: (...animatedNumbers: number[]) => void): Promise<void>;

export function colorToArr(color: string): number[];
