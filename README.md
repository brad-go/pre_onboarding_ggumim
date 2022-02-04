# 원티드 프리온보딩 기업과제<br>사진과 가구 정보를 조합하는 컴포넌트 구현하기

## :rocket: 배포

:link: **과제물**(Netlify): https://brad-go-ggumim.netlify.app

## :date: 제작 기간 & 참여 인원

- 2022년 2월 2일 ~ 4일
- 개인 프로젝트

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```
   git clone https://github.com/OnBoarding-Park-is-best/week1-adm_product_add.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```
   npm install
   ```
3. 아래 커맨드로 프로젝트를 실행합니다.
   ```
   npm start
   ```

## :open_file_folder: 디렉토리 구조

```bash
.
├── public
└──  src
      ├── api                 # api를 가져오는 함수
      ├── components
      │   ├── ProductSwiper   # 하단 상품 목록 컴포넌트
      │   ├── ProductTooltip  # 가구 정보 tooltip 컴포넌트
      │   └── Room            # 방 사진과 정보를 가져오는 컴포넌트
      ├── styles
      └── utils               # api, 상수, 함수 정보를 가지고 있는 폴더
```

## 🧰 기술 스택 및 구현 사항

### :wrench: 기술 스택

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### 📚 기능 구현 사항

#### Tooltip

<img src="./images/tooltip.gif" alt="tooltip 구현사항 영상" width="60%">

- [x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- [x] 돋보기를 클릭하면 상품정보 tooltip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- [x] 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- [x] tool tip은 하나만 노출. tooltip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있던 tooltip은 닫히고 새로 클릭한 가구 tooltip만 노출
- [x] 가구 입점 여부에 따른 툴팁 표시 방식 변경
  - 입점되어 있는 가구 (상품 이미지, 상품명, 할인율, 가격)
  - 입점되지 않은 가구 (상품 이미지, 상품명, 예상 가격)

#### 하단 가구 목록

<img src="./images/list.gif" alt="하단 가구목록 구현사항 영상" width="70%">

- [x] 선택된 가구는 선택되었으면 표시
- [x] 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
- [x] 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tooltip 출력

  ##### 추가 구현 사항

  - [x] 마우스 드래그에 의한 스크롤 기능
  - [x] 너무 많이 드래그 했을 경우 스크롤 한계치까지 되돌리기
