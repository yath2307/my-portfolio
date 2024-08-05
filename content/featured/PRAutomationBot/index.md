---
date: '2' title: 'PR Automation Bot' cover: './bot.png' github: 'https://github.com/yath2307/PR-Automation-Bot'
external: ''
tech:

- Probot
- Github_Bot
- Github_Webhooks
- JavaScript
- AWS_Lambda

---

I developed this bot as a side project for myKaarma. Whenever we take BM, the PR approval is dismissed, and it's a
hassle to get it approved again just to realise another PR has been merged into master in the meantime. This bot runs as lambda function
on AWS and whenever a PR dismissed event is received, it makes all the proper checks and sends a PR approval or comment
request to a GitHub bot.
