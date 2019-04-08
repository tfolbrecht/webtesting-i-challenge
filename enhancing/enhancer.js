class Item {
  constructor(item) {
    this.name = item.name || "Sword of 1000 Truths";
    this.durability = item.durability || 100;
    this.enhancement = item.enhancement || 0;
  }
}

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairedItem = new Item(item);
  repairedItem.durability = 100;
  return repairedItem;
}

function get(item) {
  return { ...item };
}

module.exports = {
  Item,
  succeed,
  fail,
  repair,
  get,
};