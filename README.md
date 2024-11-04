# javascript-lotto-precourse

## 📄 구현할 기능 목록 
1. 사용자로 입력 받는다.
    - 구입 금액
    - 당첨 번호
    - 보너스 번호
2. 구매한 개수만큼 로또 구매
    - 1개의 로또를 발행할 때 **중복**되지 않도록 6개의 숫자를 뽑는다.
        - 로또 번호의 숫자 범위는 1~45까지이다.
3. 정답 로또 생성
    - 사용자가 입력한 당첨 번호로 로또를 생성한다.
        - 소수점을 기반으로 당첨 번호를 추출한다.
4. 계산
    - 사용자가 구매한 로또 번호와 당첨 번호 비교
        - 3개 일치하는 경우/ 4개 일치하는 경우/ 5개 일치하는 경우/ 5개 + 보너스 일치하는 경우 / 6개 일치하는 경우
    - 수익률 (소수점 둘째 자리에서 반올림)
5. 화면에 출력
    - 로또 번호 출력
        - 오름차순으로 정렬하여 출력한다.
    - 당첨 통계 출력
    - 총 수익률 출력
6. 예외 처리
    - 사용자가 입력한 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우
    - 주어진 개수 이상으로 입력한 경우
        - 당첨 번호를 5개 혹은 7개 이상 입력한 경우
        - 보너스 볼을 2개 이상 입력한 경우
    - 숫자를 입력하지 않은 경우
    - 중복된 로또 번호를 입력한 경우
    - 아무것도 입력하지 않은 경우