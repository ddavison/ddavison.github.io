---
layout: post
title: "Java Annotation Inheritance"
description: ""
cover: cover.jpg
category: 
tags: [java,reflection]
---

I ran into an issue recently with Java, where I had two classes, one extending from the other, and an annotation attached to the super class.

I was using reflection to detect the annotation, but it was returning false!  Here is my findings, and my solution to:

> How can your subclasses inherit the super classes annotations?

## Answer is: `java.lang.Inherited`

```java
public class Main {
    public static void main(String ... args) {
        A a = new A();
        B b = new B();
        System.out.println(a.getClass().isAnnotationPresent(Annotation.class));
        System.out.println(b.getClass().isAnnotationPresent(Annotation.class));
    }
}

@Annotation
class A {}
class B extends A {}

@Retention(RetentionPolicy.RUNTIME)
@Inherited // <- here's the key!
@interface Annotation {}
```

### Console Output:

```java
true
true
```

If you take out `@Inherited` the result would be:

### Console Output:

```java
true
false
```
