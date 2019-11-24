---
title: "How to redirect a Heroku subdomain"
description: "Introducing the Permanent Redirect Server written in Node.js."
date: 2019-07-03 23:44:00
author: "lightningspirit"
image: "./road-street-sign-way-536.jpg"
comments: true
tags: "heroku, redirect, node.js, http, migration, zero-downtime deployment"
---

This article is about how to redirect all requests from `my-app.herokuapp.com`
to a different address such as `my-app.github.io` or `my-app.com`.

The procedure will also apply to different scenarios where a permanent redirect is needed
to maintain the consistency with previous URLs.

We reached to this problem when we were planning to migrate some apps out of Heroku
to our own Kubernetes instance.

They also had a custom domain configured and we needed to redirect all upcoming requests
to a new one pointing to the instance inside our Kubernetes cluster.

For that purpose, I created a small app written in Node.js that would respond to every request
with a `HTTP/1.1 301 Moved Permanently` with the exact location, keeping the path structure.

We monitored for some months the Heroku instance and watched a gradual decrease of
requests for the first days until it reached the absolute zero in the last 30 days. After that period
of time, we switched it off and finally completed the migration.

## How to use?

**It's all done in four simple steps.**

The source code lives under [this Github repository](https://github.com/lightningspirit/permanent-redirect-server)
and you can use it for your own purpose as well.

Looking at the codebase you'll see that it's a simple Node.js app that creates an HTTP server and handles
a raw HTTP response, using the native `http.createServer` method.

This also includes a `Procfile` which will be enabled as soon as it reaches the Heroku instance.

### Steps
#### 1. Clone the repository

First, clone the repository and configure the Heroku git remote to push:
```bash
$ git clone https://github.com/lightningspirit/permanent-redirect-server.git
```
```bash
$ git remote add heroku https://git.heroku.com/my-app.git
```

#### 2. Run the tests

Make sure you'll run the automated tests before using this for real.
```bash
$ npm test
```

If anything went wrong in this part, you should not proceed but [file an issue](https://github.com/lightningspirit/permanent-redirect-server/issues) in the repository.

#### 3. Configure the address to redirect

Now, you need to tell the script where to redirect all new requests by adding
a new environmental variable to the container:

```bash
$ heroku config:set NEW_BASE_URL=https://my-app.com -a my-app
Setting NEW_BASE_URL and restarting ⬢ my-app... done, vX
NEW_BASE_URL: https://my-app.com
```

All set! Now we just need to deploy it.

#### 4. Zero-downtime deployment

The Heroku deployment strategy tries to reduce to the very minimum the downtime
when uploading a new version. **The existing containers are only removed when the
new one is ready and all existing requests are fulfilled.**

You even have a pre-boot option for apps that need to warm-up their first content,
which for this case, you can ignore it.

Before you do this step, make sure **the new instance is properly working and
can handle the traffic shift** that comes from Heroku.

So, let's deploy it:
```bash
$ git push heroku master
```

Wait for the build process to finish, and test it:

```bash
$ curl http://my-app.herokuapp.com/foo/bar?param=value -v
< HTTP/1.1 301 Moved Permanently
< Location: http://my-app.com/foo/bar?param=value
```

Finished! For now on, all requests will be redirect to the new instance. :D

*Featured image by [Gratisography](https://www.pexels.com/@gratisography?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)*
