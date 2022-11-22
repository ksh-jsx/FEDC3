## 📌 과제 설명

노션 클로닝 과제

### [김성현의 노션클로닝](https://ss2mde.csb.app/)

(복붙해서 옮긴거라 에러가 있을 수 있음)

## 👩‍💻 요구 사항과 구현 내용

### 기본 요구사항

바닐라 JS만을 이용해 노션을 클로닝합니다.

기본적인 레이아웃은 노션과 같으며, 스타일링, 컬러값 등은 원하는대로 커스텀합니다.

- 글 단위를 Document라고 합니다. Document는 Document 여러개를 포함할 수 있습니다.
- 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링합니다.
- Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링합니다.
- 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.
- Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집화면으로 넘깁니다.
- 편집기에는 기본적으로 저장 버튼이 없습니다. Document Save API를 이용해 지속적으로 서버에 저장되도록 합니다.
- History API를 이용해 SPA 형태로 만듭니다.
- 루트 URL 접속 시엔 별다른 편집기 선택이 안 된 상태입니다.
- /documents/{documentId} 로 접속시, 해당 Document 의 content를 불러와 편집기에 로딩합니다.

### 보너스 요구사항

- 기본적으로 편집기는 textarea 기반으로 단순한 텍스트 편집기로 시작하되, 여력이 되면 div와 contentEditable을 조합해서 좀 더 Rich한 에디터를 만들어봅니다.
- 편집기 최하단에는 현재 편집 중인 Document의 하위 Document 링크를 렌더링하도록 추가합니다.
- 편집기 내에서 다른 Document name을 적은 경우, 자동으로 해당 Document의 편집 페이지로 이동하는 링크를 거는 기능을 추가합니다.
- 그외 개선하거나 구현했으면 좋겠다는 부분이 있으면 적극적으로 구현해봅니다!

### 개인 추가 구현사항

- 즐겨찾기 기능을 추가하였습니다.
  - 우측 상단의 ☆을 통해 츨겨찾기를 추가/삭제하고 좌측의 사이드바에서 빠르게 접근할 수 있습니다.
- 최종 수정시간과 공유 기능 또한 추가하였습니다.
  - 공유기능은 클릭 시, 현재 URL이 클립보드에 복사되도록 하였습니다.
- 상단의 BreadCrumb를 만들어 상위 문서에 접근할 수 있도록 하였습니다.
- 노션과 최대한 비슷한 느낌으로 디자인을 입혔습니다

## ✅ 피드백 반영사항

## ✅ PR 포인트 & 궁금한 점

- 전체적으로 컴포넌트화를 제 입맛대로? 해보았는데 구조적으로 괜찮은지, 고쳐야되거나 이상한 부분이 있는지 궁금합니다.
- 에러 처리에 관련된 궁금증이 있습니다.
  - 처음에 기획한 코드에서 예상치 못한 부분들 때문에 이런 저런 방어 코드가 계속해서 추가되는데, 이런 식으로 개발하는 것이 맞는지에 대한 의문이 생겼습니다.
  - 또한 에러를 모두 발견하기 어렵고, 현재도 아마 예상치 못한 부분에서 에러가 발생할 거 같은데, 이런 점을 어떻게 커버(?)하는 것이 좋을까요?
  - 이번 과제뿐 아니라 규모가 조금 있는 프로젝트를 하면 항상 이런부분때문에 머리가 아팠던 것 같습니다.
- 저는 이벤트를 부모로 부터 받을 때 `this.onClickAdd = onClickAdd;` 이런식으로 만들어, 필요한 부분에서 this객체를 통해 this.onClick()으로 접근하는 것이 습관이 되어있습니다(언제,어떻게 들인 습관인지 모르겠는데 어느 순간부터 이렇게 하고 있더라구요). 강의에서는 onClick()으로 바로 사용하여서 내가 잘못하고 있나? 라는 생각이 들었는데, 별로 중요하지 않은 부분일까요? 😂
- css의 :before, :after를 여러 코드를 뜯어보았을때 많이 사용하는 것 을 본 기억이 있어 이번에 사용해보았습니다. 그런데 이벤트를 설정하는등, DOM을 조작해야 할 때 어려움이 많아서 괜히 사용했나? 라는 생각이 들었습니다. 특별히 사용하는 게 좋거나, 사용하면 안된다거나 하는 상황이 따로 있을까요?