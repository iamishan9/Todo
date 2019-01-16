/**
 *
 *
 *
 * @returns
 */
export function get() {
  const list = JSON.parse(localStorage.getItem('list'));

  return list;
}


/**
 *
 *
 *
 * @param {*} arrayList
 */
export function set(arrayList) {
  // const arrayList = this.state.list;

  localStorage.setItem('list', JSON.stringify(arrayList));
}
