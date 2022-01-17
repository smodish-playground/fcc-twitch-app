require('dotenv').config()

const express = require('express')
const axios = require('axios')
const app = express()

const twitchClientSecret = process.env.TWITCH_CLIENT_SECRET
const twitchClientId = process.env.TWITCH_CLIENT_ID
