## pgn-to-svg

Generates an SVG from [PGN](https://en.wikipedia.org/wiki/Portable_Game_Notation)

### example

```js
pgnToSvg();
// => <svg xmlns="http://www.w3.org/2000/svg" version="1.1" ...
```

### options

```
type Options = {
  lightSquareColor?: string;
  darkSquareColor?: string;
  lastMoveHighlight?: string;
  pgn?: string;
};
```

### license

MIT

### cburnett pieces

Authored by [Colin M.L. Burnett](https://en.wikipedia.org/wiki/User:Cburnett) and licensed under [GPLv2+](https://www.gnu.org/licenses/gpl-2.0.txt)
