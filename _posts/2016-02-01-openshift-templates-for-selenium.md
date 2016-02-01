---
layout: post
title: "OpenShift Templates for Selenium"
description: "Create a scalable Selenium infrastructure in OpenShift"
cover: cover.jpg
category:
tags: [selenium,openshift,devops]
---


I've recently started using OpenShift, and grown to love it.  For those of you who do not know what OpenShift does, the excerpt from [OpenShift's website](https://www.openshift.com/) says

> OpenShift is Red Hat's Platform-as-a-Service (PaaS) that allows developers to quickly develop, host, and scale applications in a cloud environment

Where OpenShift shines, is its ability to take docker containers, and deploy them in any configuration you could imagine.

The way this post pertains to Selenium, is the fact that you are able to leverage OpenShift, and the existent Selenium Docker containers, to create a scalable Selenium infrastructure.

## The Templates

- ### [Selenium Hub](https://github.com/ddavison/selenium-openshift-templates/tree/master/selenium-hub.yaml)
> Defines the parameters in which the Selenium Grid will run

- ### [Selenium Node (Chrome)](https://github.com/ddavison/selenium-openshift-templates/tree/master/selenium-node-chrome.yaml)
> A Chrome specific configuration to enable replication controllers in OpenShift which allow free-scaling of a Selenium Node with the Chrome browser, and the ability to connect to any hub.

- ### [Selenium Node (Firefox)](https://github.com/ddavison/selenium-openshift-templates/tree/master/selenium-node-firefox.yaml)
> A Firefox specific configuration to enable replication controllers in OpenShift which allow free-scaling of a Selenium Node with the Firefox browser, and the ability to connect to any hub.

## Tutorial
This tutorial will show you step-by-step instructions on getting your infrastructure in place using one hub, and one Chrome node connecting to the hub.

1. Download the OpenShift Templates by cloning, or [downloading directly](https://github.com/ddavison/selenium-openshift-templates/archive/master.zip).
2. Login to your OpenShift instance using the `oc` CLI.
3. Create the Selenium Hub template by using `oc create -f selenium-hub.yaml`
4. Create the Selenium Node Chrome template by using `oc create -f selenium-node-chrome.yaml`
5. From the OpenShift WebApp, switch to your desired project, and click **"Add to Project"**
6. Search for **"selenium"** and add the **"selenium-hub"** template to the project.
7. Click **Create**
8. Click **"Add to Project"**
9. Search for **"selenium"** and add the **"selenium-node-chrome"** template to the project.
10. Upon configuration of the Selenium Node, change the *HUB_PORT_4444_TCP_ADDR* and *HUB_PORT_4444_TCP_PORT* to the route [defined here](https://github.com/ddavison/selenium-openshift-templates/blob/master/selenium-hub.yaml#L66).
11. Click **Create**

You now have a scalable infrastructure with one hub, and any amount of nodes ready to run tests in the Chrome browser.  Add to this as necessary.  You may also `oc create -f selenium-node-chrome.yaml` and follow steps 8-11 in the context of *"firefox"* instead of chrome.

## Links
GitHub: https://github.com/ddavison/selenium-openshift-templates
