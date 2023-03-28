const Express =  require('express')
const app = Express()

app.listen(3000,() => {
  console.log("Server on");
})

app.get('/teste', (req, res) => {
  return res.status(200).send('deploy deu certo!')
})