const express = require(`express`);
const app = express();
const path = require(`path`);
const hbs = require(`hbs`);
const port = process.env.PORT || 5000;

const indexaddress = path.join(__dirname, `../public`);

const viewspath = path.join(__dirname, `../templates/views`);
const partialspath = path.join(__dirname, `../templates/partials`);

app.set(`view engine`, `hbs`);
app.set(`views`, viewspath);
hbs.registerPartials(partialspath);
app.use(express.static(indexaddress));

app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get(`/about`, (req, res) => {
  res.render(`about`);
});

app.get(`/weather`, (req, res) => {
  res.render(`weather`);
});

app.get(`*`, (req, res) => {
  res.render(`404`, {
    errormsg: `oops page not found`,
  });   
});

app.listen(port, () => {
  console.log(`listening to the port`);
});
