const generateGameGrid = () => {
  const initialEmtpySet = [];

  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push();
    }

    initialEmtpySet.push(row);
  }

  return initialEmtpySet;
};

export default generateGameGrid;
