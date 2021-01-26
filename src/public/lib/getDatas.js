const getCardDatas = async () => {
  const response = await fetch('http://localhost:3000/card/findall', {
    method: 'get',
  });
  const { rows } = await response.json();
  return rows;
};

const getColumnDatas = async () => {
  const response = await fetch('http://localhost:3000/column/findall', {
    method: 'get',
  });
  const { rows } = await response.json();
  return rows;
};

export { getCardDatas, getColumnDatas };
