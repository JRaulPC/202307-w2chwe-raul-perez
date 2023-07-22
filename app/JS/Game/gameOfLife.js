const generateGameSet = () => {
  const initialSet = [];

  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push({ value: undefined, isAlive: false });
    }

    initialSet.push(row);
  }

  return initialSet;
};

export default generateGameSet;
