import { MissionUtils } from '@woowacourse/mission-utils';

class OutputHandler {
  static printTicketCount(ticketCount) {
    MissionUtils.Console.print(`${ticketCount}개를 구매하였습니다.`);
  }

  static printLotto(lotto) {
    lotto.forEach(function (item) {
      MissionUtils.Console.print(item);
    });
    MissionUtils.Console.print('\n');
  }
}

export default OutputHandler;
