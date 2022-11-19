# 시장에 가면

## 📚 서비스 소개 및 이름

우리는, 모든 것이 변화하는 세상에서 살고 있다. 이러한 변화의 흐름속에서 누군가의 변화의 시간은 멈춰있다. 전통시장이라는 시간의 흐름속에서 그대로 멈춰있는 시장에 '변화'라는 것을 주고자 하였다. 서비스 '시장에 가면'은 오프라인에 있는 재래시장 사장님들의 명함을 쉽고 빠르게 만들어주는 서비스이다.

가치 제안 : 변화는 멀게 느껴지지만 우리에게 가장 밀접하게, 서서히 하지만 빠르게 일어난다. 하지만 이런 조용하면서도 급격한 변화에 따라오지 못하는 분들이 있다. 우리 조는 소외를 받고 있는 사회의 한켠에 집중하고자 했다. 온라인 시장이 활성화되고 있는 가운데 오프라인에만 머물러 있는 재래시장의 상황을 변화시킬 수 있는 작은 트리거, 온라인 시장 명함이라는 가치를 제안한다.


## 👨‍💻 팀원 정보
<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/Nahee-Park">
              <img src="https://github.com/Nahee-Park.png" width="100">
              <br />
              <b>박나희 (Nahee-Park</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/hayounSong">
              <img src="https://github.com/hayounSong.png" width="100">
              <br />
              <b>송하윤 (hayounSong)</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/seojisoosoo">
              <img src="https://github.com/seojisoosoo.png" width="100">
              <br />
              <b>서지수 (seojisoosoo)</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
    </tr>
</table>

## 🤝 역할 분배

<table>
    <tr align="center">
        <td>
            👩‍💻 박나희
        </td>
        <td>
        </td>
    </tr>
    <tr align="center">
        <td>
            👨‍💻 송하윤 
        </td>
        <td>
        </td>
    </tr>
    <tr align="center">
        <td>
             👩‍💻서지수 
        </td>
        <td>
        </td>
    </tr>
</table>


## 🤙 컨벤션
## 1️⃣ 폴더구조

- **📚 components 구성 방식**
    
    **src > assets** 
    
    필요한 이미지, 아이콘 파일은 Figma 에서 **svg로 export** 한 후 `assets/icon` `assets/image`폴더에 넣기
    
    **src > components**
    
    **common 폴더**
    
    ⇒ 두 개의 페이지에서 사용할 공통 컴포넌트
    
    **각자 담당 영역 폴더**
    
    ⇒ 자유롭게 파일 및 컴포넌트 생성 후 최상위 컴포넌트(해당 폴더 안에서 Header.js or Footer.js)에서 호출하기
    
    **src > pages**
    
    각 컴포넌트를 하나의 페이지에서 호출하는 곳
    
    **src > core** 
    
    `core/router.jsx` 라우팅에 사용
    
    `core/api`   → 서버 연결에 사용 
    
    **src > hooks**
    
    custom hooks 정의하는 경우 이곳에서 정의 후 사용
    
    **src > constants**
    
    상수 정의하여 사용하는 경우 이곳에서 정의 후 사용
    

## 2️⃣ 컨벤션 설정

- **⚙ eslint & prettier 사용하기 위한 설정**
    1. **vscode extension에서 eslint + prettier 설치**
        
    
        
    2. setting.json (`command + ,` or `ctrl + ,`) 수정하기
        
        ```json
        "editor.formatOnSave": true,
        ```
        
    
- **💯 eslint 설정**
    
    ```json
    {
      "extends": ["react-app", "plugin:prettier/recommended"],
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": [
          "error",
          {
            "endOfLine": "auto"
          }
        ]
      }
    }
    ```
    
- **🌸 prettier 설정**
    
    ```jsx
    module.exports = {
      printWidth: 100,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      semi: true,
      useTabs: false,
      arrowParens: 'avoid',
      endOfLine: 'lf',
    };
    ```
    
- **👻 패키지 매니저 설정**
    - yarn / pnpm
    1. **yarn** 사용하기
        
        [YARN에 대한 사용법 및 설치](https://velog.io/@ddusi/Linux-4)
        
    2. **패키지 다운로드 받을 때 —save 꼭 작성하기**
        
        **Ex) yarn add react-router-dom —save**
        
    
- **🍞 컴포넌트 및 함수 이름 컨벤션**
    
    <aside>
    🐥 **컴포넌트 생성 방식**
    
    - 컴포넌트 생성 시에만 function 키워드 사용 `function Main (){}`
    - 그 외 함수 생성 시에는 화살표 함수 사용
    </aside>
    
    <aside>
    🐳  **함수 이름 컨벤션**
    
    - const handle이벤트명 = () ⇒ {}
    - handleClick, handleSubmit, ...
    </aside>
    
    ```jsx
    function Main (){
      
      const handleClick = () => {}
    } 
    ```
    

## 3️⃣ Git 사용 방법

- **🖥 git 명령어 모음**
    
    <aside>
    ➡️ **맨 처음 딱 한 번 필요한 명령어 모음**
    
    1. 클론으로 저장소 코드 받아오기
    **git clone** [https://github.com/SOPTube/SOPTube-frontend](https://github.com/SOPTube/SOPTube-frontend)
    
    2. 원격 저장소 상태로 로컬 저장소 최신화
    **git fetch**
    
    3. 각자의 브랜치로 이동 (브랜치 미리 만든 상황)
    **git checkout "본인의 브랜치 이름"**
    
    4. 로컬 코드를 develop 브랜치 코드로 최신화하기
    **git pull origin develop**
    
    5. 프로젝트 패키지 설치
    **yarn**
    
    </aside>
    
    <aside>
    ➡️ **작업하면서 계속 필요한 명령어 모음**
    
    1. 작업하면서 변경된 파일 내용 확인하는 명령어
    **git status**
    
    2. 변경된 파일 전체 선택
    **git add .**
    
    3. 선택한 파일 커밋 
    **git commit -m "commit 규칙 참고"**
    
    4. 본인의 브랜치로 커밋 올리기
    **git push origin "본인의 브랜치 이름"**
    
    5. repository 접속한 후 본인의 브랜치에서 develop 브랜치로 pull request 생성하기
    **github pull request 생성**
    
    6. 팀원 전부 코드 확인 후 develop 브랜치로 코드 합치기
    **팀원 전부 확인 후 merge**
    
    7. 로컬 코드를 develop 브랜치 코드로 최신화하기
    **git pull origin develop**
    
    8. 다시 작업 시작한 후 마치면 git status 로 돌아가기
    
    </aside>
    

    
- **📍 commit 규칙**
    
    **Ex) git commit -m "fix: 메인 뷰 서버 연결 에러 해결"**
    
    <aside>
    🗣 **type(타입): title(제목)**
    
    제목은 최대 50글자까지만 입력
    
    body(본문, 생략 가능)
    
    본문은 한 줄에 최대 72글자까지만 입력
    
    types = {
          init: 브랜치 첫 커밋
          feat: 새로운 기능에 대한 커밋
          fix: 버그 수정에 대한 커밋
          build: 빌드 관련 파일 수정에 대한 커밋
          chore: 그 외 자잘한 수정에 대한 커밋
          ci: CI 관련 설정 수정에 대한 커밋
          docs: 문서 수정에 대한 커밋
          style: 코드 스타일 혹은 포맷 등에 관한 커밋
          refactor: 코드 리팩토링에 대한 커밋
    }
    
    </aside>
    

## 4️⃣ Style 설정 및 사용 방법

- **💄 global 스타일 생성**
    
    **src > styles > global.js 에서 생성**
    
    1. styled-reset 을 통해 기본 css 설정 reset
    2. rem 단위를 쉽게 사용하기 위해 font-size: 10px; 선언
    
    ```jsx
    import { createGlobalStyle } from 'styled-components';
    import reset from 'styled-reset';
    
    const GlobalStyle = createGlobalStyle`
      ${reset}
    
      * {
        box-sizing: border-box;
      }
      
      html,
      body {
        font-size: 10px; 
      }
    `;
    
    export default GlobalStyle;
    ```
    
- **🎨 styled-components 에서 theme 사용 방법**
    
    **Ex) background-color: ${({ theme }) => theme.color.main_red};**
    
    ```jsx
    const color = {
      main_red: '#E93222',
      point_blue: '#295ECC',
      black: '#000000',
      white: '#FFFFFF',
      alpha_black: `rgba(0, 0, 0, 0.8)`,
      dark_grey: '#030403',
      grey_01: '#606060',
      default_grey: '#C4C4C4',
      light_grey_01: '#D3D3D3',
      light_grey_02: '#ECECEC',
      light_grey_03: '#F9F9F9',
      light_grey_04: '#F8F9F8',
      light_grey_05: '#E3E3E3',
    };
    
    const theme = { color };
    
    export default theme;
    ```
    
    **Figma Color Styles 기준으로 작성할 예정**
    
- **📝 font 설정**
    
    <aside>
    💡 **1. src > assets > fonts 폴더에 폰트 파일 저장
    2. index.css 에서 폰트 선언
    3. src > styles > global.js 에서 전체 적용**
    
    </aside>
    
    **index.css**
    
    ```css
    @font-face {
      font-family: 'AppleSDGothicNeoL';
      src: url('./assets/fonts/AppleSDGothicNeoL.ttf') format('truetype');
    }
    ```
    
    **src > assets > styles > global.js**
    
    ```jsx
    import { createGlobalStyle } from 'styled-components';
    import reset from 'styled-reset';
    
    const GlobalStyle = createGlobalStyle`
      ${reset}
    
      * {
        box-sizing: border-box;
      }
      
      html,
      body {
        font-size: 10px;
        font-family: "AppleSDGothicNeoL";  
      }
    `;
    
    export default GlobalStyle;
    ```
    
- 💋 **styled-component 선언 방식**
    
    <aside>
    ✅ **Styled 객체 내부에 선언하기**
    
    </aside>
    
    - **예시 !**
        
        ```jsx
        import { LocationType } from '@api/LocationApi';
        import React from 'react';
        import styled from 'styled-components';
        
        interface CardProps {
          locationData: LocationType | undefined;
        }
        function Card({ locationData }: CardProps) {
          return (
            <StCard>
              <StTitle>
                <h2>{locationData?.place_name}</h2>
                <button>
                  <a href={locationData?.place_url} target="_blank">
                    Go to Link
                  </a>
                </button>
              </StTitle>
              <p>{locationData?.phone}</p>
              <p>{locationData?.address_name}</p>
            </StCard>
          );
        }
        
        export default Card;
        
        const StCard = styled.div``;
        const StTitle = styled.h1``;
        
        ```
        
    
- **🤹‍♀️ 스타일링시 단위 사용 방식**
    
    <aside>
    ✅ **rem 단위만 사용하기 
    
    Ex) Figma에서 컴포넌트 길이가 73px이면 7.3rem으로 작성**
    
    </aside>
    
    - 10px → 1rem
    - px
## 🌳 브랜치 전략

   
    
    💫 main > develop > 각자의 브랜치
    ex ) main ← develop ← feat/기능이름  
    각자의 브랜치 ⇒ develop 으로 pull request 하고 코드 리뷰 후 merge
    
 
