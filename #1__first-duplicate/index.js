const firstDuplicate = (arr) => {
  if (!Array.isArray(arr)) return -1;

  const memory = [];
  for (const item of arr) {
    if (memory.includes(item)){
      return item;
    }
    memory.push(item)
  }

  return -1
};


module.exports = firstDuplicate;
