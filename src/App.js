import InputHandler from './InputHandler.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './InputValidator.js';
import TicketManager from './TicketManager.js';
import OutputHandler from './OutputHandler.js';

class App {
  async run() {
    while (true) {
      try {
        //   [x] : 기능 1) 돈 입력 받고 로또 몇장인지.
        const money =
          await InputHandler.getMoney('구입금액을 입력해 주세요.\n');
        Validator.isNumber(money);
        Validator.is1000WonUnts(money);
        const ticketCount = TicketManager.lottoCountCalculation(money);
        OutputHandler.printTicketCount(ticketCount);

        //  [x] : 기능 2) 로또 발행
        const lotto = TicketManager.generateMultipleLottos(ticketCount);
        OutputHandler.printLotto(lotto);

        // [ ] :기능 3) 당첨 번호 쉼표 구문 입력 (쉼표로 구분 6개)
        const winningNumber =
          await InputHandler.getMoney('당첨 번호를 입력해 주세요\n');

          
           // [ ] :기능 4) 보너스 번호 입력 (1~45 사이 숫자 한개)
        // [ ] :기능 5) 당첨 결과 계산
        // [ ] :기능 6) 수익률 계산

        return ticketCount;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
}

export default App;
