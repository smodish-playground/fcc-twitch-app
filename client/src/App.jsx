import './App.css'

import DisplayChannel from '../components/Channel'

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

function App() {
  console.log(import.meta.env)
  return (
    <div className='App'>
      <div className='headline'>Twitch Streamers</div>
      <div className='requirements'>
        - User Story: I can see whether freeCodeCamp is currently streaming on Twitch.tv.
        <br />
        - User Story: I can click the status output and be sent directly to the freeCodeCamp's Twitch.tv channel.
        <br />
        - User Story: if a Twitch user is currently streaming, I can see additional details about what they are
        streaming.
        <br />
        Is FCC Streaming ? what are they streaming : link to FCC twitch
        <br />
      </div>
      {channels.map((channel) => (
        <DisplayChannel channel={channel} key={channel} />
      ))}
    </div>
  )
}

export default App
