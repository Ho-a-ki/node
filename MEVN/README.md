블로그 1: https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0

블로그 2: https://medium.com/@anaida07/mevn-stack-application-part-2-2-9ebcf8a22753

깃허브 : https://github.com/anaida07/MEVN-boilerplate

# MEVN 스택으로 웹앱 만들기

Mongo + Express + Vue + Node

http://mean.io/ (앵귤러)
http://mern.io/ (리액트)


## Prerequisites for this guide.

* Basic Knowledge of Javascript
* concepts of REST and CRUD
* Node.js / NVM installed.
* MongoDB installed

This guide will be focused on generating a skeleton for MEVN full stack application. 

``` 
$ mkdir posts
$ cd posts
$ npm install -g vue-cli
```

``` 
$ vue init webpack client
```

This command will ask you certain question like npm init.

```
$ cd client
$ npm install
$ npm run dev
``` 

server is running here : http://localhost:8080/#/

이제 expres install.


```
$ mkdir server
$ cd server
$ npm init
```

package.json에 start 명령어 추가하기.
start 명령어 : node src/app.js


```
$ mkdir src
```
src/app.js 생성.


```
$ npm start
```

하면 app.js에 작성한 헬로우 월드 출력까지 완성.

이제 본격적으로 express와 같이 서버에 필요한 모듈들 설치하기

1. express
2. body-parser
3. cors
4. morgan

이후 app.js를 서버 구성을 위한 기본 코드를 작성한다.

Up to this point, what we have is a skeleton for frontend project and a skeleton for a backend project. now we will create an endpoint in the server. Up to this point, we have a client which is running on port 8080 and a server which port 8081

다시 app.js 수정!
8081 포트에서 열리고 간단히 json 데이터를 send하는 logic 만들기.

이후 서버 실행 후 
http://localhost:8081/posts
접속

편의 기능 중 하나인 nodemon 설치

In client folder, let's add axios package!

axios is a library which is used to make htpp request to the backend.

Now let's create a folder called services in clients/src and a new file call Api.js

