const express = require('express');
const helmet = require('helmet');
const cohortsRoutes = require('./routes/cohortRoutes');
const studentsRoutes = require('./routes/studentRoutes');




const server = express();

// endpoints here

server.use(express.json());
server.use(helmet());

server.use('/api/cohorts', cohortsRoutes);
server.use('/api/students', studentsRoutes)


server.get('/', (req, res) =>{
  res.send("it's alive");
});



const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
