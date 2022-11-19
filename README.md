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
              <b>박나희 (Nahee-Park)</b>
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
        - 초기세팅, 명함 제작뷰, 로그인뷰, 공용 
        </td>
    </tr>
    <tr align="center">
        <td>
            👨‍💻 송하윤 
        </td>
        <td>
        - 초기세팅, 명함 제작뷰, 사진 업로드, 큐알코드뷰
        </td>
    </tr>
    <tr align="center">
        <td>
             👩‍💻서지수 
        </td>
        <td>
        - 초기세팅, 명함 제작뷰, 최종 공유뷰, 명함 링크뷰
        </td>
    </tr>
</table>


## 🤙 코드 컨벤션
> 단시간 서비스를 완성해야하는 해커톤의 특성에 따라 최대한 기본적인 세팅으로 구성한다.
1. 💯 eslint 설정
    
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
    
2. 🌸 prettier 설정
    
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
    
3. 👻 패키지 매니저 설정
    1. **yarn** 사용하기
        
        [YARN에 대한 사용법 및 설치](https://velog.io/@ddusi/Linux-4)
        
    2. **패키지 다운로드 받을 때 —save 꼭 작성하기**
        
        **Ex) yarn add react-router-dom —save**
        
    
4. 🍞 컴포넌트 및 함수 이름 컨벤션
    
    <aside>
    🐥  컴포넌트 생성 방식
    
    - 컴포넌트 생성 시에만 function 키워드 사용 `function Main (){}`
    - 그 외 함수 생성 시에는 화살표 함수 사용
    </aside>
    
    <aside>
    🐳   함수 이름 컨벤션
    
    - const handle이벤트명 = () ⇒ {}
    - handleClick, handleSubmit, ...
    </aside>
    
    ```jsx
    function Main (){
      
      const handleClick = () => {}
    } 
    ```
    
## 🌳 브랜치 전략
    💫 main > develop > 각자의 브랜치
    ex ) main ← develop ← feat/기능이름  
    각자의 브랜치 ⇒ develop 으로 pull request 하고 코드 리뷰 후 merge
    
 
