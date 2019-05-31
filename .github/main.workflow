action "Build" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
  args = "build"
}

workflow "Merge Reminder" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@6aeb2acb39f91da283faf4c76898a723a03b2264"
  args = "A new commit has been pushed! Do a git pull!"
  env = {
    SLACK_WEBHOOK  = "https://hooks.slack.com/services/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"
  }
}
