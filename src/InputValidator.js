// 돈 검증
class Validator {
  static isNumber(money) {
    if (isNaN(money)) {
      throw new Error('[ERROR] : 숫자로 입력해주세요');
    }
  }

  static is1000WonUnts(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] : 1000원 단위로 입력해주세요');
    }
  }

  
}

export default Validator;
