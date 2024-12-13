import { MissionUtils } from '@woowacourse/mission-utils';

// TODO : 기능 1) 돈 입력 받고 로또 몇장인지.

class InputHandler {
  static async getMoney(messages) {
    const input = await MissionUtils.Console.readLineAsync(messages);
    return input;
  }
}

export default InputHandler;
