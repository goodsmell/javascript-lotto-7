import { MissionUtils } from '@woowacourse/mission-utils';

class OutputHandler {
  static printTicketCount(ticketCount) {
    MissionUtils.Console.print(`${ticketCount}개를 구매하였습니다.`);
  }
}

export default OutputHandler;
