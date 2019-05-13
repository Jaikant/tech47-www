workflow "New workflow" {
  on = "push"
  resolves = ["Build"]
}

action "Build" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
  args = "args = \"build\""
}
