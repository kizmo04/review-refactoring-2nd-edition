import Rating from './Rating';

/**
 * 특수한 로직을 다형성으로 분리하기 위해 만들어진 서브클래스
 * 기본 클래스에서 특수 로직이 필요한 getter만 오버라이드 한다
 */
class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }
}

export default ExperiencedChinaRating;
