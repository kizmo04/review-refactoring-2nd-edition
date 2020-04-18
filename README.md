## 1.2 예시 프로그램을 본 소감
### 리팩토링이 필요한 이유
- `statement`함수를 수정해야 한다
- HTML태그를 삽입하거나 더 많은 타입의 연극에 대응해야 할 수 있다 -> 스펙 변경의 가능성이 있음
- `statement`함수, 혹은 복사본을 매번 수정해야 한다면 관리에 부담이 생긴다

## 1.3 리팩터링의 첫 단계
- 리팩터링 과정에서 테스트를 이용해 검증하는 것은 매우 중요하다. 시간단축 및 안정성 보장

## 1.4 statement() 함수 쪼개기
### `amountFor` 함수 추출하기
- `switch`문이 눈에 띈다
  - 한번의 공연에 대한 요금을 계산하는 로직
  - 6.1 `함수 추출하기` 참고
  - `amountFor`함수로 추출했음
### `amountFor` 리팩토링
#### 함수 내부에서 변수 이름을 명확하게 하기
  - 함수 내부에서 변수의 역할에 따라 이름을 짓는다
  - `thisAmount` -> `result`: 결과가 담긴다는 역할을 명확히 한다
  - `perf` -> `aPerformance`: js에서는 prefix로 타입이름을 명시해주면 좋은데, 타입이 명확하지 않다면 a/an을 붙인다.
    - 이 변수는 루프 안에서 매번 다른 값을 전달받는 변수다.
#### `play` 변수 제거하기
  - `aPerformance`를 통해 얻을 수 있기 때문에 `amountFor`안에서 다시 계산하면 된다.
  - 긴 함수를 쪼갤때, 이런 변수들은 제거하는 편
  - 왜냐하면, 로컬 범위에 이름이 너무 늘어나면 작업이 복잡해지기 때문
    - 7.4 `임시 변수를 질의 함수로 바꾸기`를 참고
  - `play` 변수를 제거: 6.4 `변수 인라인하기`, 6.5 `함수 선언 바꾸기`
  - 지금은 반복문에서 공연을 더 많이 조회한다. 하지만,
  - 지역 변수를 제거하면 유효범위를 신경 써야 할 대상이 줄어들어 추출 작업이 쉬워진다.
#### `thisAmount` 제거하기
  - 포인트 적립 부분을 편하게 추출하기 위해 이 변수도 인라인한다
