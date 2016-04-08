---
layout: post
title: "SoapUI Containerization"
description: "Run SoapUI tests in Docker"
cover: soapuidocker.png
category:
tags: [soapui,testing]
---

[Docker](https://www.docker.com) and [SoapUI](https://www.soapui.org) were not
technologies that I had prior experience in, nor any desire really to learn them.

For my task at my current employer, I was to containerize SoapUI in an OpenShift
environment by taking a SoapUI runner, and incorporating it inside of a Docker
container.

** I did just that! **

> [https://github.com/ddavison/docker-soapui](https://github.com/ddavison/docker-soapui)

### What does it do?
> By containerizing SoapUI and its runner, this allows you to have a portable
SoapUI installation that lets you run your SoapUI projects anywhere!

Included in this docker container, is the following:

- A Centos operating system
- A Python interpreter
- A Java JDK
- A SoapUI Installation

This container utilizes the standard Python library to launch a simple http server
that will listen on port 3000 for POST requests.  These POST requests would contain
pertinent information for your SoapUI tests.  That would include:
- The URL to test against
- The Suite to run
- The SoapUI Project XML

Tutorial
===
Currently I use this setup in an OpenShift configuration to listen on a URL

> http://soapui.apps.example.demo

Which will accept said POST requests, and run any SoapUI tests fired at it.

*note: I recommend familiarizing yourself with Docker, at least to the point where you know how to run a container.*

### Steps
1. `docker pull ddavison/soapui`
2. `docker run -it -p 3000:3000 ddavison/soapui`
3. Curl the service by sending a SoapUI project xml file

```
  curl -F "project=@/path/to/soapui-project.xml" \
    -F "suite=YourSuite" \
    http://localhost:3000
```

After running the SoapUI tests, there are different HTTP status codes
associated with the run.

<table>
<tr>
  <th>Code</th>
  <th>Message</th>
  <th>Description</th>
</tr>
<tr>
  <td>200</td>
  <td>OK</td>
  <td>All SoapUI Tests ran successfully and passed</td>
</tr><tr>
  <td>550</td>
  <td>Test Failure(s)</td>
  <td>You have failures in the SoapUI Test suite / cases. You can check the content of the request to determine what failed</td>
</tr><tr>
  <td>551</td>
  <td>No Suite</td>
  <td>You did not specify the `suite` POST parameter with the name of the suite you wanted to run </td>
</tr><tr>
  <td>552</td>
  <td>No SoapUI Project</td>
  <td>You did not specify the 'project' POST parameter with the proper SoapUI XML data. <em>Remember</em>: This needs to be the actual file itself sent as multipart/form-data. E.g: <pre>curl -F "project=@the-soapui-project.xml" ...</pre></td>
</tr><tr>
  <td>500</td>
  <td>Internal Server Error</td>
  <td>An exception occured while running the SoapUI Tests</td>
</tr>
</table>
