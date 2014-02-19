---
layout: post
title: "Effective CSS Selectors"
description: "Formulating effective CSS selectors is crutial in your journey as a developer, or as an automator."
cover: css.jpg
category: css
tags: [css, css selector, effective, effective css, selector]
---

Little Disclaimer:

> This post, as is this blog, is targeted at individuals who would like to use CSS selectors while using Selenium to automate their web applications. This article could also be useful for developers wanting to find a better way to utilize CSS.

### What is a CSS Selector?

We all know what CSS is, but how do we find and select the objects we need? A CSS selector is a formula that finds any one or many elements that you want.

### Back to Basics

Formulating a CSS selector is defined by this algorithm:

```css
element[attribute(*|^|$|~)='value']
```

 - The ```element``` portion will be what element you are selecting. The ```attribute``` portion will be what attribute you are selecting on. The ```(*|^|$|~)``` portion is an optional comparison operator depending on what you need (put link here)

### KISS (Keep it Simple Stupid)

Any element that you want is able to be selected using CSS. It's important to keep in mind to keep it simple. One reason to even *use* css is the simplicity. Consider the following:

```html
<input type="text" name="username" />
```

To select this, we have several options.

1. We can match by the type attribute. e.g: ```input[type='text']``` but is this really effective? What if we have more elements than that one. That CSS selector would select an array of all elements that have the type attribute set to "text".
2. We can match by the name attribute. e.g: ```input[name='username']```. Now this would be absolutely unique (assuming there is no more elements on the page with the name='username')

### The 3 Unique Attributes
In order, there is:

 - ```id```
 - ```name```
 - ```title```

In my years of experience with selecting unique elements, and semantically, these are the three top attributes that can be selected with 95% certainty.

Consider the following:

```html
<input type="text" id="username_field" name="username" />
```

This is an excellently designed element because it has both the ```id``` and ```name``` attributes. Unnecessary? Maybe, but we aren't complaining.

*Using CSS Selectors*, we can match on either the id or name attribute because these two attributes are the top 2 unique attributes to match on. So our selectors could be:

```css
input[id='username_field']
input[name='username']
```
or even 

```css
input[id='username_field'][name='username'] /*(for ultimate uniqueness.)*/
```

### Why element name?
When using technology like Selenium, attempting to perform actions on one specific element happens more often than not. In my selectors above, I had specified the element name ```input``` in my selector. Why? I believe that to simplify things, and even make things faster (it's microscopic, but still faster) to specify the element name in the CSS selector. Consider the following:

 - In a page that contains hundreds of elements, a css selector like ```[name='something']``` will scan *ALL* of the elements on the page to find an attribute ```name``` that equals ```something```.
 - In that same page, ```input[name='something']``` will scan *ONLY THE INPUT ELEMENTS* for the ```name``` attribute that equals ```"something"```. It's purely subjective, but it also helps with anybody else that looks at your code. It's obvious what type of element you are selecting.

### Shorthand
In CSS, there are only 2 shorthand selectors. These selectors are:

 - ```id```
 - and ```class```

Both of these attributes can be matched very easily using their respective shorthand symbol. Consider the following for ```id```:

```html
<input type="text" id="username_field" name="username" />
```

From our selector above (```input[id='username_field']```).. This can be simplified using a shorthand selector to:

```css
input#username_field
```

As you can see from above, the hash (```#```) symbol is the shorthand symbol for the ```id``` attribute. ```input[id='username_field'] === input#username_field```

For class, consider the following:

```html
<a href="#" class="home-link link bold" />
```

From that field above, we can use the selector:

```css
a[class='home-link link bold']
```

but what if the class is dynamic?  What if the web app adds a new class? The ```class``` attribute will no longer equal that.  If we use the shorthand:

```css
a.home-link.link.bold
```

We can be sure that we will still select it even if they add a class to it.  This is the shorthand for:

```css
a[class~='home-link'][class~='link'][class~='bold']
```

### Comparison operators
There are only a few comparison operators that are in existance and should all be memorized.

 - Equals (```=```)
 - Starts with (```^=```)
 - Ends with (```$=```)
 - Contains (```*=```)
 - Contains in a list (```~=```)

#### "Equals (```=```)" operator
This operator will be used when an attribute is static. For example: ```<input id="username" />```; The ```"username"``` value is static, therefore = should be used for the comparison.

#### "Starts with (```^=```)" operator
Consider the input that was mentioned above. What if the page is dynamically generated and it ensured that each ID is unique and there was no duplication? What would happen, is that page generator would use some dynamic number or string of characters and concatenate that to the id. For example:

```html
<a href="#" id="link_1" />
```

Ask yourself, what is going to always be the same.. since the ```1``` in the attribute value is dynamic, we can say that ```link``` will be static.  And since the id Starts With ```link```, let's match on that using the ```Starts With (^=)``` selector:

```css
a[id^='link']
```

#### "Ends with (```$=```)" operator
This operator can be particularly useful when you have dynamic attributes similar to the element above.  Consider the following html:

```html
<a href="#" id="link_1"
<a href="#" id="link_12323aasdf_something" />
```

Unfortunately with these two elements when we want to select the second element, won't work with just ```a[id^='link']``` because that would not be unique enough. What we can do, is utilize the ends with (```$=```) CSS operator.

```css
a[id^='link'][id$='something']
```

Here we can actually combine the two different selectors!  This is a sure way to make sure we select the element we need.

#### "Contains (```*=```)" operator
This is one of the most frequently used operator, and can be used for many different purposes.  It's quite simple.  We just find an element that has an attribute that *contains* something.

```html
<div id="12345_my-div_abcde" />
```

For arguments sake, let's say that the ```12345``` and the ```abcde``` are dynamic, therefore we can't use Starts with, or Ends with.  In this case, we would use *contains*!

```css
div[id*='my-div']
```

#### "Contains in a list (```~=```)" operator
This is the single most operator that is underrated in CSS.  Most people will go right above it by using the contains operator, but is that really the best option?

Lets start by defining what this selector does.  

The ```~=``` selector will find the attribute that you specify, and will look for something in a list that is **SPACE SEPERATED**.  This is most particularly applied to the ```class``` attribute since we usually specify something like:

```html
<div class="class1 class2" />
```

So in essence:

```css
div[class~='class1'][class~='class2']
```

is the **EXACT** same as:

```css
div.class1.class2
```

It will not care where the words are, but as long as the words are seperated by **spaces**, then it will find what you need.