---
title: "Rest PUT vs POST actions by example"
description: "The only significant difference between PUT and POST"
date: 2018-12-18 19:15:00
author: "lightningspirit"
image: "./photo-of-person-s-open-hands-2258248.jpg"
comments: true
tags: "rest, put vs post, idempotent, http"
---

As a technical interviewer in Talkdesk, I had the chance to meet many interesting people for the past two years. Most of them very technical, others less technical, all seemed to be very professional and talented people - it's so good to work in an industry where you can find so many interesting people!

An interesting thing happens when we ask the candidate *What's the main difference between POST and PUT verbs?* 99% of the answers were like *POST is for creating things, PUT for updating*.

### What is the origin of this idea?

According to the HTTP/1.1 Spec:

> The POST method is used to request that the origin server accept the entity enclosed in the request as a new subordinate of the resource identified by the Request-URI in the Request-Line.

In other words, that means the client is telling to **create** a new representation of the identified resource.

> The PUT method requests that the enclosed entity be stored under the supplied Request-URI. If the Request-URI refers to an already existing resource, the enclosed entity SHOULD be considered as a modified version of the one residing on the origin server.

In this case, when I want to **update** an identity, I should use this verb.

Cool, so we reached to the traditional idea of **creating** versus **updating**.


### Some examples to exercise

Let's imagine there's a `people` resource. We're going to perform some operations.

1. Let's create one person:
```json
> POST /people
{
  "name": "Vitor Carvalho",
  "currency": "EUR"
}
```
```json
< Location: /people/1
{
  "id": "1",
  "name": "Vitor Carvalho",
  "currency": "EUR",
  "credit": "0.00"
}
```
Great! A person was created.

2. Let's update it's content:
```json
> PUT /people/1
{
  "name": "Vitor de Carvalho",
  "currency": "USD",
  "credit": "10.00"
}
```
```json
< Location: /people/1
{
  "id": "1",
  "name": "Vitor de  Carvalho",
  "currency": "USD",
  "credit": "10.00"
}
```

3. Let's give this person some more credit:
```json
> POST /people/1/credit
{
  "amount": "2.00"
}
```

In the last example, POST was used to add credit.
As the `credit` property is already there, **why not PUT instead?**

### Enters Idempotence

The properties of [idempotence](https://en.wikipedia.org/wiki/Idempotence) are here to guarantee that even if one action is performed one million times with the same input, the output will always be the same.
In other words, there's no *side-effects* whenever an action is performed more than one time.

In section 9.1.2 of [RFC2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) it is refered that:

> Methods can also have the property of "idempotence" in that (aside from error or expiration issues) the side-effects of N > 0 identical requests is the same as for a single request. The methods GET, HEAD, PUT and DELETE share this property.

That means **PUT** should always be idempotent. In the case above, adding credit with an amount is not an idempotent operation, it will always sum with the current value (that on the backend side should also work on an atomic fashion), which breaks the idempotency property of **PUT**.

### Conclusions

**PUT** is always **idempotent**, and that is the **main difference between POST and PUT** and why one should use **POST** to create a new representation.

### TL;DR

- No need for idempotency: use **POST**
- Need **idempotent** actions: use **PUT** (or **POST** when **PUT** is not desirable or unpractical)

#### Examples:
- Creating a new instence of a resource `POST /people`
- Perform actions to existing resources `POST /people/1/credits`
- Updating a representation `PUT /people/1`, `PUT /people/1/avatar`
- Perform idempotent actions `PUT /settings` or `POST /settings`

This is a convention that **all API designers should seriously follow**, at least this has the potential to **indicate clients if an operation is idempotent** aware or not. That practice can save us developers lots of toubles when our product hits production.

<style>
ul { margin-left: 1rem; }
</style>

*Featured image by [Luis Quintero](https://www.pexels.com/@jibarofoto?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)*
