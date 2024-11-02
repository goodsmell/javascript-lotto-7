import { NUMBER_ERROR_MESSAGES } from '../src/contents/InputErrorMessages.js';
import BonusNumber from '../src/controller/BonusNumberManager.js';

describe('BonusNumber 클래스 예외 테스트', () => {
  test.each([
    {
      input: '',
      description: '번호가 입력되지 않았을 때 예외 발생',
      expectedError: `[ERROR] : ${NUMBER_ERROR_MESSAGES.BonusNumberGuid}`,
    },
    {
      input: 'a',
      description: '문자가 입력되었을 때 예외 발생',
      expectedError: `${NUMBER_ERROR_MESSAGES.numberOutOfRange}`,
    },
    {
      input: '50',
      description: '1~45사이의 숫자가 아닐 때 예외 발생',
      expectedError: `${NUMBER_ERROR_MESSAGES.numberOutOfRange}`,
    },
  ])('$description', ({ input, expectedError }) => {
    expect(() => {
      new BonusNumber(input);
    }).toThrow(expectedError);
  });
});
