// 돈 검증
class Validator {
  static isNumber(money) {
    if (isNaN(money)) {
      throw new Error('[ERROR] : 숫자로 입력해주세요');
    }
  }
}

export default Validator;
