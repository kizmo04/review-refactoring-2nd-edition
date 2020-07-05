import rating from './index';

describe('변형 동작을 다형성으로 표현하기', () => {
  describe('Rating', () => {
    const voyage = { zone: '서인도', length: 10 };
    const history = [
      { zone: '동인도', profit: 5 },
      { zone: '서인도', profit: 15 },
      { zone: '중국', profit: -2 },
      { zone: '서아프리카', profit: 7 },
    ];

    it('', () => {
      const myRating = rating(voyage, history);

      expect(myRating).toBe('B');
    });
  });
});
