const client = require('./db.js')
const express = require('express')
const app = express()

app.listen(3300, () => {
    console.log('Server is running on port 3300')
})

client.connect();

app.get('/tools', (req, res) => {
    client.query(`Select * from tools`, (err, result)=> {
        if(!err){
            res.send(result.rows)
        }
    });
    client.end;
})

app.get('/tools/:id', (req, res) => {
    client.query(`Select * from tools where id = ${req.params.id}`, (err, result)=> {
        if(!err){
            res.send(result.rows)
        }
    });
    client.end;
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/tools', (req, res) => {
    const tool = req.body;
    let insertQuery = `Insert into tools (id, "toolName", reference, ecosystem, "contentType", category, "compCategory", "freeVersion", "paidVersion", licensing, "toolDescription") values (${tool.id}, '${tool.toolName}', '${tool.reference}', '${tool.ecosystem}', '${tool.contentType}', '${tool.category}', '${tool.compCategory}', '${tool.freeVersion}', '${tool.paidVersion}', '${tool.licensing}', '${tool.toolDescription}')`;

    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Tool added successfully')
        } else {
            console.log(err.message)
        }
    })
    client.end;
})

app.put('/tools/:id', (req, res) => {
    let tool = req.body;
    let updateQuery = `Update tools set "toolName" = '${tool.toolName}', reference = '${tool.reference}', ecosystem = '${tool.ecosystem}', "contentType" = '${tool.contentType}', category = '${tool.category}', "compCategory" = '${tool.compCategory}', "freeVersion" = '${tool.freeVersion}', "paidVersion" = '${tool.paidVersion}', licensing = '${tool.licensing}', "toolDescription" = '${tool.toolDescription}' where id = ${req.params.id}`

    client.query(updateQuery, (err, result) => {
        if(!err){
            res.send('Tool updated successfully')
        } else {
            console.log(err.message)
        }
    })
    client.end;
})

app.delete('/tools/:id', (req, res) => {
    let insertQuery = `Delete from tools where id = ${req.params.id}`;

    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Tool deleted successfully')
        } else {
            console.log(err.message)
        }
    })
    client.end;
})

