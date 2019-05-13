workflow "New workflow" {
  resolves = ["Github Action for Gatsby CLI"]
  on = "push"
}

action "Github Action for Gatsby CLI" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
}
