const createValidator = (currentData, validationStrategy) => {
  const data = currentData;
  let currentValidationStrategy = validationStrategy;

  return {
    updateValidator: (stategy) => (currentValidationStrategy = stategy),
    validate: () => currentValidationStrategy(data),
  };
};

module.exports = createValidator;
