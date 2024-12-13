import InputHandler from './InputHandler.js';
import { MissionUtils } from '@woowacourse/mission-utils';

//     TODO : 기능 1) 돈 입력 받고 로또 몇장인지.
//  TODO : 기능 2) 로또 발행
// TODO :기능 3) 당첨 번호 + 보너스 번호 입력
// TODO :기능 4) 당첨 결과 계산
// TODO :기능 5) 수익률 계산

class App {
  async run() {
    try {
      const money = InputHandler.getMoney('구입금액을 입력해 주세요.\n');

      return money;
    } catch (error) {}
  }
}

export default App;
