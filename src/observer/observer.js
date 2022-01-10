const createCart = (data) => {
  let currentData = data;
  let actions = [];

  const _notifyAll = () => {
    actions.forEach((action) => action(currentData));
  };

  return {
    updateTotalPrice: (data) => {
      currentData = data;
      _notifyAll();
    },
    register: (action) => {
      actions.push(action);
    },
    unregister: (action) => {
      actions = actions.filter((_) => _ !== action);
    },
  };
};

module.exports = createCart;
