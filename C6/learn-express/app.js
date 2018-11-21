var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use( function(req, res, next) {
  console.log(req.url , '저도 미들웨어 입니다.')
  next()
  // 반드시 next()를 호출해야 다음으로 넘어간다.
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// 스태틱 미들웨어는 요청에 부합하는 정적 파일을 발견한 경우
// 응답으로 해당 파일 전달. 정적 파일 라우터 기능을 수행하므로
// 최대한 위쪽에 배치하는 것이 좋다는데 무슨 말일까.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret : 'secret code',
  cookie: {
    httpOnly : true,
    secure: false,
  },
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// use 대신 get,post 등의 HTTP 메서드 사용 가능.
// app.get('/', function(req,res,next) {
//   console.log('GET 메서드 / 주소의 요청일 때만 실행')
//   next();
// })


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
