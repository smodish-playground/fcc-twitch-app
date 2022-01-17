import dotenv from 'dotenv'
dotenv.config()

import { ApiClient, Channel } from 'twitch'
import { StaticAuthProvider } from 'twitch-auth'

const clientId = process.env.TWITCH_CLIENT_ID
const clientSecret = process.env.TWITCH_CLIENT_SECRET
const accessToken = process.env.TWITCH_CLI_TOKEN
const authProvider = new StaticAuthProvider(clientId, accessToken)
const apiClient = new ApiClient({ authProvider })

async function isStreamLive(userName) {
  const user = await apiClient.helix.users.getUserByName(userName)
  if (!user) {
    return false
  }
  return (await user.getStream()) !== null
}

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

channels.map(async (channel) => {
  if (await isStreamLive(channel)) {
    console.log(channel)
  } else {
    console.log('false')
  }
})
