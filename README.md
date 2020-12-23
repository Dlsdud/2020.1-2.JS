# 웹개발기초II 프로젝트
***

* 실행해야 할 파일
 - 결과물을 제대로 보실려면 **JSProject.zip**파일을 전부 압축해제하여 한 폴더(폴더명: JSProject)에 넣으셔야 합니다.
 - 폴더명을 JSProject로 한 이유는 폰트 적용을 위해서 입니다.
 - 폴더에 들어있는 파일들 중 **main.html**을 실행하시면 됩니다.

***

* 기능 안내
    - 결재금액 확인 버튼을 누르면 1,000단위로 콤마가 찍혀 나옵니다. 값의 범위는 1,000~100,000 입니다.
    - 결재금액 확인 버튼을 눌러야 전화번호를 입력할 수 있는 div가 나타납니다.(opacity와 height를 animate 효과로 사용하였습니다.)
    - 키패드로 전화번호를 입력하면 자동으로 하이픈 기능이 동작합니다. 하이픈 포함 13자가 입력되면 이 이후에 키패드로 번호를 클릭하여도 입력되지 않습니다.
    - 마일리지 적립 버튼을 누르면 alert창에 현재 마일리지가 적립될 전화번호, 누적 금액, 누적 적립액이 표시됩니다.
    - 마일리지 적립 버튼을 누르면 구매시간, 구매횟수(적립횟수),총 구매금액, 총 적립금, 현재 구매금액, 현재 적립금, 전화번호 이렇게 7가지가 localStorage에 저장됩니다.

  
  - 관리자 기능 
    + "총 마일리지 적립확인" 버튼은 관리자 기능을 위한 버튼(일명 관리자 페이지) 입니다.
    + 관리자 페이지에서는 localStorage에 저장된 정보들이 테이블로 나타내어집니다.
    + 관리자 페이지에서 전체 정보 삭제 버튼을 클릭 시, 저장되어 잇던 정보들이 전체 삭제 됩니다.
  
  
  

  
