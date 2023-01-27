import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

// This is a sample build hook URL
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/63d30c033d3d2a10ff43157a';

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule('* * * * *', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:')
  })

  return {
    statusCode: 200
  }
})

export { handler }