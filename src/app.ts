import * as dotenv from 'dotenv';
dotenv.config({ debug: true, path: '../.env'});

import React from 'react';
import express from 'express';
import request from 'request';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import * as url from 'url';

const __dirname = url.fileURLToPath(import.meta.url);
const CORS_OPTIONS = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

let app = express();

app.use(express.static(__dirname + '/public'))
    .use(cors(CORS_OPTIONS))
    .use(cookieParser());