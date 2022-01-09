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
  return 'https://twitch-proxy.freecodecamp.rocks/twitch-api/' + type + '/' + name + '?callback=getData'
}

// let script = document.createElement('script')
// script.src = `https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${channels[0]}?callback=getData`
// document.body.append(script)

const getStreams = async (channel) => {
  const streamsURL = makeURL('streams', channel)
  let response = await fetch(streamsURL)
  let json = await response.json()
  console.log(json)
}

getStreams(channels[0])

/*

    function makeURL(type, name) {
      return 'https://twitch-proxy.freecodecamp.rocks/twitch-api/' + type + '/' + name + '?callback=?';
    };
*/
