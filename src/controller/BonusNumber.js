import ValidateNumber from './ValidateNumber.js';
import { NUMBER_ERROR_MESSAGES } from '../contents/InputErrorMessages.js';

class BonusNumber {
  #bonusNum;
  constructor(bonusNum, winningNum) {
    this.#validateBonus(bonusNum, winningNum);
    this.#bonusNum = bonusNum;
  }

  #validateBonus(bonusNum, winningNum) {
    ValidateNumber.checkMissing(
      bonusNum,
      NUMBER_ERROR_MESSAGES.BonusNumberGuid,
    );
    ValidateNumber.validateNumber(
      bonusNum,
      NUMBER_ERROR_MESSAGES.BonusNumberGuid,
    );
    if (winningNum.includes(bonusNum)) {
      throw new Error(NUMBER_ERROR_MESSAGES.duplicateWithWinningNumbers);
    }
  }
}

export default BonusNumber;
