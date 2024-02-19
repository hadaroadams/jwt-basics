const jwt = require("jsonwebtoken");
const { BadRequest } = require("./../errors/index");

const login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new BadRequest("username and password must be provide"))
  }

  const id = new Date().getDate();
//   console.log(id);

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30s",
  });

  res.status(200).json({ msg: "user created", jwt: token });
};

const dashboard = (req,res,next)=>{
    const randomScreteCode = Math.floor(Math.random()*100)

    res.status(200).json({msg:`Hello`,secret:`Here is your LuckyNumber, You secrete is ${randomScreteCode}`})

}

module.exports = { login ,dashboard};
