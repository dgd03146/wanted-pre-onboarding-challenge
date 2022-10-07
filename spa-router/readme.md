# **원티드 프론트엔드 챌린지**
React와 History API 사용하여 SPA Router 기능 구현하기

<br/>

## 과제 요건
**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```
    
<br/>


## 고민한 점

힌트를 보고 `history.pushState( )`를 사용하여서 페이지 이동없이 url 변경만 가능하게 한다. 브라우저 페이지를 이동하게 되면 **`window.onpopstate`** 라는 이벤트가 발생하게 되는데, `pushState` 를 했을때는 `popstate` 이벤트가 발생하지않아 화면이 렌더링이 되지 않는 문제가 생겼다. 오직 뒤 / 앞으로 가기를 클릭 했을때 `popstate` 이벤트가 발생하게 되었다.`pushstate`로 url이 변하였음에도 `pathname`이 변경이 인식이 되지 않아 컴포넌트가 보이지 않았다.

`custom event`를 만들어서 `[dispatchEvent](https://ko.javascript.info/dispatch-events#ref-1072)`로 호출을 하여`popstate` 이벤트를 발생시켜서 화면을 렌더링 시켰다.

> 참고
> 

[https://ko.javascript.info/dispatch-events#ref-208](https://ko.javascript.info/dispatch-events#ref-208)

[https://kwangsunny.tistory.com/28](https://kwangsunny.tistory.com/28)

[https://nukw0n-dev.tistory.com/29](https://nukw0n-dev.tistory.com/29)
