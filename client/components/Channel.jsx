import { useState, useEffect } from 'react'
import { ApiClient, Channel } from 'twitch'
import { StaticAuthProvider } from 'twitch-auth'

const DisplayChannel = ({ channel }) => {
  const [isOnline, setIsOnline] = useState(false)
  const [stream, setStream] = useState('')

  const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID
  const clientSecret = import.meta.env.VITE_TWITCH_CLIENT_SECRET
  const accessToken = import.meta.env.VITE_TWITCH_CLI_TOKEN
  const authProvider = new StaticAuthProvider(clientId, accessToken)
  const apiClient = new ApiClient({ authProvider })

  async function isStreamLive(userName) {
    const user = await apiClient.helix.users.getUserByName(userName)
    if (!user) {
      return false
    }
    return await user.getStream()
  }

  useEffect(async () => {
    const data = await isStreamLive(channel)
    if (!data) return
    setIsOnline(true)
    setStream(data)
  }, [])

  const userLink = 'https://twitch.tv/' + channel

  console.log(stream)

  return isOnline ? (
    <div className='channel online'>
      <a href={userLink} target='_blank'>
        {stream.userName}
      </a>
      <br />
      {stream.gameName}
      <br />
      {stream.title}
    </div>
  ) : (
    <div className='channel'>
      <a href={userLink} target='_blank'>
        {channel}
      </a>
      <br />
      Offline
    </div>
  )
}

export default DisplayChannel
