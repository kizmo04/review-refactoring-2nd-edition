import Rating from './Rating';

class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageAndHistoryLengthFactor() {
    let result = 3;
    if (this.history.length > 10) result += 1;
    if (this.history.length > 12) result += 1;
    if (this.history.length > 18) result += 1;
    return result;
  }
}

export default ExperiencedChinaRating;
