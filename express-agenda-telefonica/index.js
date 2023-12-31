const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })


const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number:"040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number:"39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number:"12-43-234345"
  },
  {
    id: 4,
    name: "Mary poppendick",
    number:"39-23-6423122"
  }
]

app.use(morgan(':method :url :status :res[content-length] - :response-time ms  :body'));


app.get('/api/persons', (req, res)=>{
  res.json(persons)
})

app.get('/api/persons/:id', (req, res)=>{
  const { id } = req.params
  const person = persons.find(person => person.id === Number(id))  
  if (!person){
    res.status(404).send('<p>Person not found</p>')
  } else{
  res.json(person)
  }
})

app.get('/info', (req, res)=>{
  res.send(`<p> Phonebook has info for ${persons.length} peope! </p>
  ${Date()}`)
})

app.delete('/api/persons/:id', (req, res) =>{
  const {id} = req.params
  const index = persons.findIndex(person => person.id === Number(id))
  if(!index){
    res.status(404).send('<p>Person not found</p>')
  } else{
    persons.splice(index,1)
    res.send('<p>Deleted person</p>')
  }
})

app.post("/api/persons", (req, res) => {
  const newPerson = req.body;
  const { name, number } = newPerson;
  if (name.length > 0 && number.length > 0) {
    const nameFound = persons.find((person) => person.name === name);
    if (!nameFound) {
      const random = Math.floor(Math.random() * 100);
      const person = {
        ...newPerson,
        id: random,
      };
      persons.push(person);
      res.status(201).json(person);
    } else {
      res.send(`<h2> error: 'name must be unique'</h2>`);
    }
  } else {
    res.send(`<h2> error: 'name or number not found'</h2>`);
  }
});

app.listen(3001, () => {
  console.log('Server on port 3001')
})