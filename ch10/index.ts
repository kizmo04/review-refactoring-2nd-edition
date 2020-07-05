interface Voyage {
  zone: string;
  length: number;
}

interface Record {
  zone: string;
  profit: number;
}

export default function rating(voyage: Voyage, history: Record[]) {
  return createRating(voyage, history);
}

class Rating {
  private voyage: Voyage;
  private history: Record[];

  constructor(voyage: Voyage, history: Record[]) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr * 2) return 'A';
    else return 'B';
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if ((['중국', '동인도'] as string[]).includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter(v => v.profit < 0).length;
    if (this.voyage.zone === '중국' && this.hasChinaHistory) result -= 2;
    return Math.max(result, 0);
  }

  get hasChinaHistory() {
    return this.history.some(v => '중국' === v.zone);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === '중국') result += 1;
    if (this.voyage.zone === '동인도') result += 1;
    if (this.voyage.zone === '중국' && this.hasChinaHistory) {
      result += 3;

      if (this.history.length > 10) result += 1;
      if (this.history.length > 12) result += 1;
      if (this.history.length > 18) result += 1;
    } else {
      if (this.history.length > 8) result += 1;
      if (this.history.length > 14) result += 1;
    }
    return result;
  }
}

class ExperiencedChinaRating extends Rating {}

function createRating(voyage: Voyage, history: Record[]) {
  if (voyage.zone === '중국' && history.some(v => '중국' === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else return new Rating(voyage, history);
}
