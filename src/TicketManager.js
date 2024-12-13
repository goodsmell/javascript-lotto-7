import { MissionUtils } from '@woowacourse/mission-utils';

class TicketManager {
  // 로또 장 수 계산
  static lottoCountCalculation(money) {
    const result = money / 1000;
    return result;
  }

  static generateSingleLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
  }

  // 로또 생성
  static generateMultipleLottos(count) {
    return Array.from({ length: count }, TicketManager.generateSingleLotto);
  }
}
export default TicketManager;
