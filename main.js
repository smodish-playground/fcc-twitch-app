const { default: axios } = require('axios')

require('dotenv').config()

const channels = [
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas',
]

function getData(data) {
  console.log(data)
  return data
}

function makeURL(type, name) {
  return process.env.BASE_URL + '/' + type + '?user_name=' + name
}

const getStreams = async (channel) => {
  const streamsURL = makeURL('streams', channel)
  let response = await axios.get(streamsURL)
  let json = await response.json()
  console.log(json)
}

getStreams(channels[0])
