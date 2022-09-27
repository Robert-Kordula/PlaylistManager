import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import request from 'request';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import axios from 'axios';

console.log(process.env);

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

