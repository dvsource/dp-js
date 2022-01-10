const createValidator = (currentData, validationStrategy) => {
  const data = currentData;
  let currentValidationStrategy = validationStrategy;

  return {
    updateValidator: (stategy) => (currentValidationStrategy = stategy),
    validate: () => currentValidationStrategy(data),
  };
};

const age = 18;
const ageValidator = createValidator(age, (data) => data > 18);

console.log(ageValidator.validate());

ageValidator.updateValidator((data) => data >= 18);

console.log(ageValidator.validate());
