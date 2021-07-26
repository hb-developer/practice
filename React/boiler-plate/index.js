const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/User");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false }, err);
    return res.status(200).json({ success: true });
  });
});

app.post("/login", (req, res) => {
  // 요청된 이메일이 데이터베이스에 있는지 확인한다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
  });
  //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는지 확인한다.
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (!isMatch)
      return res.json({
        loginSuccess: false,
        message: "비밀번호가 틀렸습니다.",
      });
  });
  //비밀번호 까지 맞다면 토큰을 생성하기.
  user.generateToken((err, user) => {
    if (err) return res.status(400).send(err);

    //토큰을 저장한다 어디에?
    res
      .cookie("x_auth", user.token)
      .status(200)
      .json({ loginSuccess: true, userId: user.id });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
