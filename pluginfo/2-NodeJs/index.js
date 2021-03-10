const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
require('dotenv/config');
    
const port = 8088;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = new Sequelize('db_lapadarie', 'root', process.env.pwd,{
    host:'localhost',
    dialect: 'mysql',
});

const DataTypes = Sequelize.DataTypes;
const cadastro_pedidos = sequelize.define('cadastro_pedidos',{
    nome: {
    type: DataTypes.STRING,
    allowNull: false
    },
    quantidade_paes: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
});

sequelize.authenticate().then (() => {
    console.log('Banco de dados conectado.')
}).catch ((error) => {
console.error('Erro ao se conectar: ', error)
});

//cadastro_pedidos.sync({ force: true });

app.get('/', (req, res) => {
    res.json('La Padarie. Seja bem vindo(a). Faça seu pedido em /pedido e acesse /listapedido para acompanhar os pedidos realizados.')
});

app.post('/pedido', (req, res) => {
    const createPedido = cadastro_pedidos.create({
        nome: req.body.nome,
        quantidade_paes: req.body.quantidade_paes
    })
    .then((createPedido) => res.json(createPedido))
    .catch((erro) => res.json(erro)) 
});

const Op = Sequelize.Op;
app.get('/listapedidos', (req, res) =>{
    const findPedido = cadastro_pedidos.findAll({
        where: {
            createdAt: {
                [Op.gt]: new Date(Date.now() - 1000 * (60 * 5))
            }
        }
    })
    .then((findPedido) => res.json(findPedido))
    .catch((erro) => res.json(erro)) 
});

app.listen(port, () => {console.log('Servidor on na porta 8088.')});