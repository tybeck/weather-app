import { css } from 'styled-components/native';
import { Styles } from 'styled-components/native/dist/types';

export enum BreakpointSize {
  Xs = 400,
  Sm = 600,
  Md = 900,
  Lg = 1280,
  Xl = 1440,
  Xxl = 1920,
}

export enum Breakpoint {
  Xs = `${BreakpointSize.Xs}px`,
  Sm = `${BreakpointSize.Sm}px`,
  Md = `${BreakpointSize.Md}px`,
  Lg = `${BreakpointSize.Lg}px`,
  Xl = `${BreakpointSize.Xl}px`,
  Xxl = `${BreakpointSize.Xxl}px`,
}

export class Media {
  static Xs = (args: Styles<object>) => css`
    @media (min-width: ${Breakpoint.Xs}) {
      ${css.call(undefined, args)};
    }
  `;

  static Sm = (args: Styles<object>) => css`
    @media (min-width: ${Breakpoint.Sm}) {
      ${css.call(undefined, args)};
    }
  `;

  static Md = (args: Styles<object>): any => css`
    @media (min-width: ${Breakpoint.Md}) {
      ${css.call(undefined, args)};
    }
  `;

  static Lg = (args: Styles<object>) => css`
    @media (min-width: ${Breakpoint.Lg}) {
      ${css.call(undefined, args)};
    }
  `;

  static Xl = (args: Styles<object>) => css`
    @media (min-width: ${Breakpoint.Xl}) {
      ${css.call(undefined, args)};
    }
  `;

  static Xxl = (args: Styles<object>) => css`
    @media (min-width: ${Breakpoint.Xxl}) {
      ${css.call(undefined, args)};
    }
  `;

  /**
   * @method C
   * For a more refined component, we may need to specify sizes within the
   * breakpoints to allow the style to truly feel responsive.
   * @param size
   * @constructor
   */
  static C =
    (size: number) =>
      (args: Styles<object>) => css`
      @media (min-width: ${size}px) {
        ${css.call(undefined, args)};
      }
    `;
}
