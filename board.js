module.exports = function () {
  const pieces = [];

  return {
    add: (type, positions) => {
      let partsObject = positions.reduce((acc, curr) => {
        acc[curr] = {
          hit: false
        };
        return acc;
      }, {});

      let piece = {
        type: type,
        parts: partsObject
      }

      piece.isSunk = () => {
        for (let partKey in piece.parts) {
          if (!piece.parts[partKey].hit) {
            return false;
          }
          return true;
        }
      };

      pieces.push(piece);
    },
    shoot: (position) => {
      let piece = pieces.find((piece) => piece.parts[position]);
      if (piece) {
        piece.parts[position].hit = true;
        return true;
      }
      return false;
    },
    won: () => {
      return pieces.every((piece) => piece.isSunk());
    }
  };
}