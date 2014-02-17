---
layout: post
title: "Getting started with Selenium"
cover: cover.jpg
description: ""
category: 
tags: [selenium]
---

As a regular user on [StackOverflow]({{site.links.stackoverflow}}) and one of the [top answerers for Selenium](http://stackoverflow.com/tags/selenium/topusers), one of the most frequent issues I notice on the questions, is that people do not know how to get started with using Selenium.

First let's discuss _what_ selenium even is.  Directly from the [Selenium website](http://seleniumhq.org),

> Selenium automates browsers. That's it!

This being said, Selenium is designed in particular for testers and other automation experts that want to automate some website.

## So what about getting started?

As I said previously, not a lot of people are aware on how to get started, so I've actually designed a framework particularly for those users not sure where to start.
Now you can use the base Selenium API, sure.. but why not use a proven solution in automation?

The [Getting Started with Selenium](https://github.com/ddavison/getting-started-with-selenium) framework was designed for users wanting to get started with selenium, and have an easy and effective method of doing so.

This framework provides a few effective modern web testing techniques including [fluent interfaces](http://en.wikipedia.org/wiki/Fluent_interface).

The framework was designed to be incredibly simple and intuitive:

<script src="https://gist.github.com/ddavison/8078879.js"></script>

You can see that this test is insanely simple.

We will

1. Simply print to the output: ```"Attempt: 1"```; then we will
2. Set the text of an email field using the ```name``` selector strategy, to ```"example@something.net"```
3. We'll then utilize CSS selectors to click some button that does something, then
4. After the click, something will happen. We will then just simply log to the console ```"Finished"```

This test is very easy to follow, and intuitive.

### Convinced yet?

How about this one:

<script src="https://gist.github.com/ddavison/7234204.js"></script>

This is a simple test to automate [flipkart](http://flipkart.com)

Here we utilize some CSS selectors and some inline validation calls.  Consult [the readme](https://github.com/ddavison/getting-started-with-selenium/blob/master/README.md#in-line-validations) for more information about inline validations.

I have a few people that use this framework so far as it's a fairly new project.  These people include [Major League Gaming](http://majorleaguegaming.com) for their front-end automated regression suite!