require('dotenv').config()

const request = require('request')

const getToken = (url, callback) => {
  const options = {
    url: process.env.GET_TOKEN,
    json: true,
    body: {
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    },
  }

  request.post(options, (err, res, body) => {
    if (err) {
      return console.error(err)
    }

    callback(res)
  })
}

let AT = ''
getToken(process.env.GET_TOKEN, (res) => {
  AT = res.body.access_token
  return AT
})

const getGames = (url, accessToken, callback) => {
  const gameOptions = {
    url: process.env.GET_GAMES,
    method: 'GET',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Authorization: 'Bearer ' + accessToken,
    },
  }

  request.get(gameOptions, (err, res, body) => {
    if (err) return console.error(err)
    console.log(`Status: ${res.statusCode}`)
    console.log(JSON.parse(body))
  })
}

const getStreams = (url, accessToken, callback) => {
  const streamOptions = {
    url: process.env.GET_STREAMS,
    method: 'GET',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Authorization: 'Bearer ' + accessToken,
    },
  }

  request.get(streamOptions, (err, res, body) => {
    if (err) return console.error(err)
    console.log(`Status: ${res.statusCode}`)
    console.log(JSON.parse(body))
  })
}

// setTimeout(() => {
//   getGames(process.env.GET_GAMES, AT, (res) => {})
// }, 1000)

setTimeout(() => {
  getStreams(process.env.GET_STREAMS, AT, (res) => {})
}, 1000)
