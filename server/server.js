'use strict'
import express from "express";
import parser from "body-parser";
import path from "path";
import db from '../db';
import io from './socket';

const app = express();

app.use(parser.json());
app.use(parser.urlencoded( {extended: false} ));

app.use(express.static(path.join(__dirname, '../public')));


app.get('*', (req, res) => {
	console.log('getting here');
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})