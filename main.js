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

function getData({ stream }) {
  console.log(stream)
  return stream
}

// function makeURL(type, name) {
//   return 'https://twitch-proxy.freecodecamp.rocks/twitch-api/' + type + '/' + name + '?callback=getStream'
// }

let script = document.createElement('script')
script.src = `https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/${channels[0]}?callback=getData`
document.body.append(script)

// const getStreams = (user) => {
//   const streamsURL = makeURL('streams', user)
//   fetch(streamsURL).then((response) => console.log(response))
//   // .then((data) => console.log(data))
//   // .catch((e) => console.log(e))
// }

// getStreams(channels[0])

/*

    function makeURL(type, name) {
      return 'https://twitch-proxy.freecodecamp.rocks/twitch-api/' + type + '/' + name + '?callback=?';
    };
*/
