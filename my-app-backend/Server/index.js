import express from "express";
import usersData from '../usersData.js'

const PORT = 3001;
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({status:'ok', payload: usersData});
});
   
app.get('/users/:id', (req, res) => {
  const id = req.params.id
  const filteredUser = usersData.filter(function(users){
    return users.id == id
  })
  return res.json({filteredUser})
});

app.post('/users', (req, res) => {
  const newUser = req.body
  usersData.push(newUser);
  res.json({status:'ok', payload:usersData})
});

// app.put() => {

// };

// app.delete() => {

// };

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




