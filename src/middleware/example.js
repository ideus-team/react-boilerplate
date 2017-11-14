/* global window */
const apiMiddleware = store => next => (action) => {
  window.console.log(store, next, action);
};

export default apiMiddleware;
