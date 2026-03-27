const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from Home!");
});
app.get("/contacts", (req, res) => {
  res.send("Hello World from Contacts!");
});
app.get("/profile", (req, res) => {
  res.send("Hello World from Profiles!");
});

const users = [
  { id: 1, name: "user-1" },
  { id: 2, name: "user-2" },
  {id:1000,name:"user-1000"}
];

app.get("/users",(req,res) =>{
  res.status(200).json({message:"All Users",users})
})

app.get("/users/id/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);
  if(!user){
    return res.status(404).json({message:"User Not Found"})
  }
  return res.status(200).json({ message: "User Found", user });
});
app.get("/users/name/:name", (req, res) => {
  const userName = req.params.name;
  const user = users.find((u) => u.name === userName);
  console.log(userName)
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }
  return res.status(200).json({ message: "User Found", user });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
