import * as dotenv from 'dotenv';
dotenv.config({ debug: true, path: '../.env'});

import express from 'express';
import request from 'request';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import axios from 'axios';

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

console.log(process.env);