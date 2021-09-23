# 웹개발기초II 프로젝트

<h3>📌ReadMe📌</h3>
https://plastic-spaghetti-ffc.notion.site/b35399a238fe428ba7ff9106f5d3e20a

***

* 실행해야 할 파일
 - 결과물을 제대로 보실려면 **JSProject.zip**파일을 전부 압축해제하여 한 폴더(폴더명: JSProject)에 넣으셔야 합니다. ((진짜진짜 최종) 웹개발기초II 기말과제 입니다.) 이것입니다.
 - 폴더명을 JSProject로 한 이유는 폰트 적용을 위해서 입니다.
 - 폴더에 들어있는 파일들 중 **main.html**을 실행하시면 됩니다.

***

* 기능 안내
    - 결재금액 확인 버튼을 누르면 1,000단위로 콤마가 찍혀 나옵니다. 값의 범위는 1,000~100,000 입니다.
    - 결재금액 확인 버튼을 눌러야 전화번호를 입력할 수 있는 div가 나타납니다.(opacity와 height를 animate 효과로 사용하였습니다.)
    - 키패드로 전화번호를 입력하면 자동으로 하이픈 기능이 동작합니다. 하이픈 포함 13자가 입력되면 이 이후에 키패드로 번호를 클릭하여도 입력되지 않습니다.
    - 마일리지 적립 버튼을 누르면 alert창에 현재 마일리지가 적립될 전화번호, 누적 금액, 누적 적립액이 표시됩니다.
    - 마일리지 적립 버튼을 누르면 구매시간, 구매횟수(적립횟수), 총 구매금액, 기존 적립금, 현재 구매금액, 현재 적립금, 전화번호 이렇게 7가지가 localStorage에 저장됩니다.

  
  - 관리자 기능 
    + "마일리지 적립확인" 버튼은 관리자 기능을 위한 버튼(일명 관리자 페이지) 입니다.
    + 관리자 페이지에서는 localStorage에 저장된 정보들이 테이블(전화번호, 총 결제횟수, 총 결제금액, 기존 마일리지, 결제 날짜)로 나타내어집니다.
    + 관리자 페이지에서 오른쪽 상단 삭제 버튼을 클릭 시, 저장되어 있던 정보들이 전체 삭제 됩니다.
    

* "단계별 구현"에서 1, 2, 3, 4번 모두 구현하였습니다.
  
<br>

------------

### 메인화면

![image](https://user-images.githubusercontent.com/65286862/134458356-11e19c18-70cf-4299-b74e-b2c7db56a97b.png)
  

  
