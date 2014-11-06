---
layout: post
title: ".editorconfig"
description: ""
cover: cover.jpg
category: 
tags: [ide]
---

Implementing `.editorconfig` in **your** workspace!

For the longest time, I didn't have much of a care about how projects had organized themselves.  One thing I did find particularly frustrating though, is *inconsistency*.
Many programmers lack the ability to keep to one coding style, and adhering to the basic conventions of their language of choice.  

Won't name names, but an example would a former coworker programming Java using A mix between K&R, Allman, as well as using PascalCase for methods.

Another peeve of mine, is spacing.  In some files, one individual would use 2 spaces, and in another file of the same type, they would use 4 spaces.

Luckily, there **is** a standard out there!  It's called the [.editorconfig](http://editorconfig.org/) file! 

## what is a .editorconfig?
The .editorconfig file is a meta file that basically provides rules that your particular IDE or editor should follow.  Including Sublime, Atom, IntelliJ, etc.

## what rules can you specify in the .editorconfig file?
There is a [complete list of properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) that you can read yourself, but the more common options are:

 - `indent_style`
 - `indent_size`
 - `insert_final_newline`
 - `trim_trailing_whitespace`

My favorite, of course, being the first, and second options.  You are able to specify something like

```ini
[*]
indent_style = space
indent_size = 2
```

Depending on where the `.editorconfig` file is, dictates which directories are affected.  Here is my `.editorconfig` file that exists within my `~/workspace` directory (where i house ALL projects)

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.java]
indent_style = space
indent_size = 4
continuation_indent_size = 0
```

You can see that I have a couple options, in particular, the `[*.java]` bit.

## IntelliJ 14 and .editorconfig
With the release of IntelliJ 14, came shipped the capability to actually READ this `.editorconfig` file.. Unfortunately that also came with some baggage.  IntelliJ was reading my `~/workspace/.editorconfig` config file while i was editing `~/workspace/java-project`.
Without that `[*.java]` piece, IntelliJ was defaulting all Java files to 2 spaced.  **Note the place, too!** After some debugging, I noticed that if you put anything **before** the `[*]`, it will be overridden by the `[*]` so if you are going to specify an extension,
make sure you put this bit **after** the `[*]`.

After some quick google-fu, I had also found that IntelliJ actually can look for another attribute. `continuation_indent_size`.  Now **THIS** property is extremely important if you are doing something in java like [method chaining](http://wikipedia.org/wiki/Method_chaining)

Before that method, I was getting results like:

```java
object
    .method()
    .anotherMethod()
```

When in fact i wanted:

```java
object
.method()
.anotherMethod()
```

### root = true
Within the `.editorconfig` file, there is also an option called `root`.  It defaults to `false`, but when it's set to `true`, then this `.editorconfig` will apply recursively.

In my example, my workspace looks like:

```sh
$ ls -a $WORKSPACE
.
..
.editorconfig
some-project/
some-other-project/
yet-another-project/
```

With `root` being `true`, it will apply to all projects.  If you wanted, you could of course override a specific project by putting an `.editorconfig` file in the specific project directory.

### All-in-all....
I think this `.editorconfig` file is an amazing tool, and can help you, as a programmer, keep your code universal, and same format all the way around.
