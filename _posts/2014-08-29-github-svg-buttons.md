---
layout: post
title: "GitHub SVG Buttons"
description: "Buttons for your GitHub Account"
cover: cover.jpg
category:
tags: [github, svg, buttons]
---

I've always loved badges.. Ever since I found out about Travis's badge that allows you to see whether a build passes or fails,
I've always enjoyed it..  It's even better that you can plug the badge into the readme!

Now, a while back, I was looking through my stargazers on my [sublime-tabs](https://github.com/ddavison/sublime-tabs) project on [atom](http://atom.io/packages/sublime-tabs/stargazers)
and I noticed that [@mdo](http://twitter.com/mdo) (one of the creators of [Twitter Bootstrap](http://getbootstrap.com)) had starred my project!

I started browsing through his GitHub repositories, and noticed that he had a project called [github-buttons](https://github.com/mdo/github-buttons).  Sweet project indeed,
but you weren't able to plug in those buttons inside of a GitHub ReadMe since they were `<iframe>`'s..  I created a project that fixes this! :smile:

## Creating buttons for your repository

The basic syntax for creating your own repository is to get:

**To get a badge to star your repository:**
`http://github-svg-buttons.herokuapp.com/star.svg?user=<github-user>&repo=<github-repo>`

**To get a badge to fork your repository:**
`http://github-svg-buttons.herokuapp.com/star.svg?user=<github-user>&repo=<github-repo>`

Or if you want to generate them to different formats like Markdown, Haml, or HTML, you can use: http://github-svg-buttons.herokuapp.com/

Soon, you'll have your own cool buttons!
[![star this repo](http://github-svg-buttons.herokuapp.com/star.svg?user=ddavison&repo=github-svg-buttons)](https://github.com/ddavison/github-svg-buttons)
[![fork this repo](http://github-svg-buttons.herokuapp.com/fork.svg?user=ddavison&repo=github-svg-buttons)](https://github.com/ddavison/github-svg-buttons/fork)
