require('dotenv').config()

const SlackWebhook = require('@slack/webhook')
const slack = new SlackWebhook(process.env.SLACK_WEBHOOK_KEY)
import axios from 'axios'

const fs = require('fs')

const report = fs.readFileSync('./health-check.json', 'utf-8')

let result
let tests
let failures
let title

const data = JSON.parse(report)

if (typeof data !== 'undefined' && data.failures.length) {
  failures = data.failures
  title = '<!channel> ' + 'Failing test(s) for yourawesomeapp.com'

  result = failures.map((failure) => {
    return {
      "fallback": "Test summary",
      "color": "danger",
      "text": ":x: " + failure.title
    }
  })

} else {
  title = 'Health check for yourawesomeapp.com'
  result = [
    {
      "fallback": "Test summary",
      "color": "good",
      "text": ":white_check_mark: All tests pass!" 
    }
  ]
}

axios.post("https://hooks.slack.com/services/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", {
    text: 'working'
})