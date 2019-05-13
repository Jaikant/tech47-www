workflow "New workflow" {
  resolves = ["Github Action for Gatsby CLI"]
  on = "check_run"
}

action "Github Action for Gatsby CLI" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
  args = "args = \"gatsby build\""
}
