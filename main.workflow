action "Build" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
  args = "build"
}

workflow "Merge Reminder" {
  on = "push"
  resolves = ["Action for Slack"]
}

action "Action for Slack" {
  uses = "Ilshidur/action-slack@6aeb2acb39f91da283faf4c76898a723a03b2264"
  secrets = ["SLACK_WEBHOOK"]
  args = "\"A new commit has been pushed! Do a git pull!\""
}
