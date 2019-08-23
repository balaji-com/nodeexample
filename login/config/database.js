module.exports = {
  database:'mongodb://localhost:27017/login',
  secret:'yoursecreat'
  // mongoose.connect("mongodb://localhost:27017/login" , { useNewUrlParser: true }).then(
  //   (res) => {
  //    console.log("Connected to Database Successfully.")
  //   }
  // ).catch(() => {
  //   console.log("Conntection to database failed.");
  // });
}
