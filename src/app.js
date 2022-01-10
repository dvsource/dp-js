const createValidator = require('./strategy/strategy');

const age = 18;
const ageValidator = createValidator(age, (data) => data > 18);

console.log(ageValidator.validate());

ageValidator.updateValidator((data) => data >= 18);

console.log(ageValidator.validate());
