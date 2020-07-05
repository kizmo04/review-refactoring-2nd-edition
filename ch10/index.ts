import Rating, { Voyage, Record } from './Rating';
import ExperiencedChinaRating from './ExperiencedChinaRating';

export default function rating(voyage: Voyage, history: Record[]) {
  return createRating(voyage, history).value;
}

function createRating(voyage: Voyage, history: Record[]) {
  if (voyage.zone === '중국' && history.some(v => '중국' === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else return new Rating(voyage, history);
}
