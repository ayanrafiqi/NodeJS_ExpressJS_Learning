module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide the age!!");
  } else if (req.query.age < 18) {
    res.send("Sorry you cant access the page");
  } else {
    next();
  }
};
