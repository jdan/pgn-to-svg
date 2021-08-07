import { createSVGWindow } from "svgdom";
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { Chess } from "chess.js";

const window = createSVGWindow();
registerWindow(window, window.document);

const pieces = {
  wb: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z" /><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" /><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" /></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter" /></g></svg>`,
  wk: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,
  wn: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="#fff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#000"/></g></svg>`,
  wp: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  wq: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/></g></svg>`,
  wr: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>`,
  bb: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#ececec" stroke-linejoin="miter"/></g></svg>`,
  bk: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9" stroke="#ececec"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#ececec"/></g></svg>`,
  bn: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#000"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="#000"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#ececec" stroke="#ececec"/><path d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z" fill="#ececec" stroke="none"/></g></svg>`,
  bp: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  bq: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g stroke="none"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0" fill="none" stroke="#ececec"/></g></svg>`,
  br: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" stroke-linecap="butt"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/><path d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" fill="none" stroke="#ececec" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
};
const SQUARE_SIZE = 45;

type Options = {
  lightSquareColor?: string;
  darkSquareColor?: string;
  pgn?: string;
};

export default function pgnToSvg({
  lightSquareColor = "#dee3e6",
  darkSquareColor = "#8ca2ad",
  pgn,
}: Options = {}) {
  const svg = SVG(window.document.documentElement);
  const chess = new Chess();
  if (pgn) {
    chess.load_pgn(pgn);
  }

  chess.board().map((row, y) => {
    row.map((piece, x) => {
      const square = SVG()
        .rect(SQUARE_SIZE, SQUARE_SIZE)
        .move(x * SQUARE_SIZE, y * SQUARE_SIZE)
        .fill(x % 2 == y % 2 ? lightSquareColor : darkSquareColor);
      svg.add(square);

      if (piece) {
        const key = (piece.color + piece.type) as keyof typeof pieces;
        const sprite = SVG(pieces[key]).move(x * SQUARE_SIZE, y * SQUARE_SIZE);
        svg.add(sprite);
      }
    });
  });

  return svg.svg();
}

console.log(
  pgnToSvg({
    pgn: "1. e4 { [%clk 0:05:00] } 1... e5 { [%clk 0:05:00] } 2. Qf3 { [%clk 0:04:59] } 2... Nc6 { [%clk 0:04:58] } 3. Bc4 { [%clk 0:04:58] } 3... Nf6 { [%clk 0:04:51] } 4. Nh3 { [%clk 0:04:57] } 4... Bc5 { [%clk 0:04:43] } 5. O-O { [%clk 0:04:55] } 5... O-O { [%clk 0:04:35] } 6. d3 { [%clk 0:04:53] } 6... Nd4 { [%clk 0:04:26] } 7. Qd1 { [%clk 0:04:49] } 7... d6 { [%clk 0:04:09] } 8. c3 { [%clk 0:04:48] } 8... Bxh3 { [%clk 0:04:04] } 9. cxd4 { [%clk 0:04:42] } 9... Bxd4 { [%clk 0:04:01] } 10. Nc3 { [%clk 0:04:41] } 10... Be6 { [%clk 0:03:55] } 11. Bxe6 { [%clk 0:04:39] } 11... fxe6 { [%clk 0:03:53] } 12. Bg5 { [%clk 0:04:32] } 12... c5 { [%clk 0:03:46] } 13. Bxf6 { [%clk 0:04:25] } 13... Qxf6 { [%clk 0:03:42] } 14. Nb5 { [%clk 0:04:23] } 14... Bxb2 { [%clk 0:03:37] } 15. Rb1 { [%clk 0:04:21] } 15... Bd4 { [%clk 0:03:30] } 16. Nxd6 { [%clk 0:04:18] } 16... b6 { [%clk 0:03:13] } 17. Nb5 { [%clk 0:04:14] } 17... Qh6 { [%clk 0:03:05] } 18. Nxd4 { [%clk 0:04:12] } 18... exd4 { [%clk 0:03:03] } 19. Qc2 { [%clk 0:03:58] } 19... Rf6 { [%clk 0:02:57] } 20. a4 { [%clk 0:03:55] } 20... Qh5 { [%clk 0:02:50] } 21. a5 { [%clk 0:03:51] } 21... Rh6 { [%clk 0:02:47] } 22. h3 { [%clk 0:03:49] } 22... Rg6 { [%clk 0:02:34] } 23. axb6 { [%clk 0:03:47] } 23... axb6 { [%clk 0:02:31] } 24. Rxb6 { [%clk 0:03:45] } 24... Qf3 { [%clk 0:02:28] } 25. g3 { [%clk 0:03:33] } 25... Rf8 { [%clk 0:02:18] } 26. Kh2 { [%clk 0:03:16] } 26... Rh6 { [%clk 0:01:49] } 27. Qxc5 { [%clk 0:03:12] } 27... Qg4 { [%clk 0:01:44] } 28. h4 { [%clk 0:03:03] } 28... Rf3 { [%clk 0:01:24] } 29. Qxd4 { [%clk 0:02:59] } 29... Qxg3+ { [%clk 0:01:16] } 30. fxg3 { 1-0 Black resigns. } { [%clk 0:02:57] } 1-0",
  })
);
