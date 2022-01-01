process.stdout.write('\033c')

const app = require('express')()

app.get('/',(req,res) => {
    res.send('RAIZ')
    console.log('RAIZ')
})

app.listen(process.env.port || 3000,() => console.log('SERVIDOR ONLINE'))