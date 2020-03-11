export default class Constants {
  constructor(constants) {
    this.constants = constants;
  }

  get(constant) {
    if (!this.constants[constant]) {
      throw new Error("You didn't specify a valid constant dummy! " + constant);
    }
    return constant;
  }
}
