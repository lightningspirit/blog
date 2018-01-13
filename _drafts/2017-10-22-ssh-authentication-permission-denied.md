---
layout:     post
title:      "Solving SSH Authentication with Permission Denied message"
subtitle:   "A tale about securing"
date:       2017-09-24 22:30:00
author:     "lightningspirit"
header-img: "assets/images/azores-green-mountain.jpg"
comments: true
tags: "hello, world, azores, firstpost"
---

https://www.daveperrett.com/articles/2010/09/14/ssh-authentication-refused/

```
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: SSH2_MSG_SERVICE_REQUEST sent
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey,gssapi-keyex,gssapi-with-mic,password
debug1: Next authentication method: publickey
debug1: Offering RSA public key: /Users/lightningspirit/.ssh/id_rsa
debug1: Authentications that can continue: publickey,gssapi-keyex,gssapi-with-mic,password
debug1: Next authentication method: password
```
Da hell?!

