# 9장 익스프레스로 SNS 서비스 만들어보기

8장까지의 배운 것을 바탕으로 실제 웹 서비스 구축.
프로미스 보다 async/await 문법을 적극 사용하자.

``` $ npm i -g sequelize-cli ```
``` $ npm i sequelize mysql2 ```
``` $ sequelize init ```

실행시 config, migrations, model, seeders 폴더 생김
이 후 템플릿파일을 넣을 views 라우터를 넣을 routes
정적파일을 넣을 public 폴더 생성.

9.3절에서 설명할 passport 패키지를 위한 passport까지 생성.

여기까지 폴더가 완성됐다면 폴더 구성은 끝.

이 후 필요한 module들을 설치.

``` $ npm i express cookie-parser express-session morgan connect-flash pug ```
``` $ npm i -g nodemon ```
``` $ npm i -D nodemon ```

서버 코드에 수정 사항이 생길때 마다 매번 서버를 재시작 하기 귀찮으므로 nodemon 모듈로
서버를 자동 재시작하는 코드를 작성. 서버 코드 수정시 알아서 자동으로 서버 재시작 합니다.

nodemon은 개발용으로만 사용할 것을 권장. 배포 후에는 서버 코드가 빈번하게 수정될 일이 많이 없으므로.

### app.js 작성하기

한번 쯤 다 쳐보는 게 괜찮을 거 같습니다.
6장에서 배운 미들 웨어 대부분을 사용합니다.
이제부터 비밀키 들은 하드 코딩 하지 않음.
유출 되었을 때 큰 문제가 될 수 있으므로.
이를 위해 dotenv 를 설치하고 관리해줍시다.

``` $ npm i dotenv ```

이후 .env 파일을 생성 한 후 거기에 키 = 값 형식으로 비밀키를 추가.
이 후 app.js에서 비밀키를 불러옵니다. 앞에서 작성한 'nodebirdsecret' 을 process.env.[키] 로 수정

### 기본적인 router 작성하기.

route/page.js 만들기.
이 역시 한번쯤 다 쳐봅시다.
express를 호출 한 뒤에 router를 호출 하고 
이후 모듈 export.

여기까지 router를 만들고 res.send('테스트') 하기.

<스크린샷 넣기>

여기까지 하면 대충 서버는 완성되었고
템플릿과 프론트 엔드 단은 제로초 님 깃허브에서 복사하기.

https://github.com/ZeroCho/nodejs-book/tree/master/ch9/9.1/nodebird/views

여기서 전부 복사하면 됩니다.

1. views/layout.pug 생성
2. views/main.pug 생성
3. views/profile.pug 생성
4. views/join.pug 생성
5. views/error.pug 생성

6. public/main.css 생성

위에서 서버 구조는 대충 만든 상태에서 이제
템플릿과 css만 한거기 때문에 간단히 복 붙으로 해결.

6번까지 완성하면 다음과 같은 화면

<스크린샷 넣기 img>


## 9.2 데이터 베이스 세팅하기

models 폴더 안에 3가지 파일 생성

1. user.js
2. post.js
3. hashtag.js

이후 index.js 를 수정합니다.
수정 완료 한 후에 콘솔 창에서 데이터 베이스를 생성합니다.

``` $ sequelize db:create ```

> config.json 에서 password를 스트링으로 작성해야. 그냥 숫자로 넣었다가 오류 떴음.

데이터베이스를 생성하는 것을 완료했으니,
모델을 서버와 연결 합시다. (app.js 수정)

연결한 후에 npm start 하면 테이블을 자동으로 생성합니다.(최초)

## 9.3 패스포트 모듈로 로그인 구현하기.

passport 관련 모듈 설치

``` $ npm i passport passport-local passport-kakao bcrypt ```

이후 app.js에 passport 모듈 연결하기. (먼저 연결 해놓고 작성.)
연결 후에 passport 모듈 작성하기 (passport/index.js)

패스포트 일련의 과정을 이해하기.

전체 과정

1. 로그인 요청
2. passport.authenticate 메서드 호출
3. 로그인 전략 수행
4. 로그인 성공 시 사용자 정보 객체와 함께 req.login 호출
5. req.login 메서드가 passport.serializeUser 호출
6. req.session 에 사용자 아이디만 저장
7. 로그인 완료


### 로컬 로그인 구현하기.

로컬 로그인이란 sns 서비스를 통해 로그인 하지 않고
자체적으로 회원가입 후 로그인 하는 것.
passport를 통해 구현하려면 passport-local이 필요합니다.

회원가입, 로그인, 로그아웃 라우터 만들기.
라우터는 접근조건이 있는데 로그인한 사람이 회원가입, 로그인 라우터에 접근하면 안된다는 예시!

따라서 라우터에 접근 권한을 제어하는 미들웨어가 필요하다.
미들웨어를 만들어보면서 isAuthenticated 메서드에 대해 알아봅시다.

1. middleware.js 작성
2. page.js 작성
3. routers/auth.js 작성
4. passport/localStrategy.js 작성

### 카카오 로그인 구현하기

1. passport/kakaoStrategy.js 작성


이후 카카오 개발자 센터에서 앱만들고 .env에 넣어주기

카카오에서 oauth > auth로 수정해주면 됩니다.



### Multer 모듈로 이미지 업로드 구현하기

``` $ npm i multer ```

이미지 모듈.

이후 post 라우터 작성하기.

### 프로젝트 마무리하기.