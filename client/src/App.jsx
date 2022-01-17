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
      {channels.map((channel) => (
        <DisplayChannel channel={channel} key={channel} />
      ))}
    </div>
  )
}

export default App
