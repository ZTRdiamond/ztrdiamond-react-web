function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function get(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function remove(key) {
  localStorage.removeItem(key);
}

function reset() {
  localStorage.clear();
}

function all() {
  const items = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = get(key);
    items[key] = value;
  }
  return items;
}

function has(key) {
  return localStorage.getItem(key) !== null;
}

function setVar(name, val, id) {
  const key = `${name}_${id}`;
  set(key, val);
}

function getVar(name, id) {
  const key = `${name}_${id}`;
  return get(key);
}

export { set, get, remove, reset, all, has, setVar, getVar };
