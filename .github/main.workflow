workflow "New workflow" {
  resolves = ["Build"]
  on = "push"
}

action "Build" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
  args = "args = \"build\""
}
