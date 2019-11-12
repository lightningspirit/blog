---
title:      "Solving SSH Authentication with Permission Denied message"
subtitle:   "A tale about securing your most secured directories"
date:  2017-11-09 21:30:00
author:     "lightningspirit"
image: "./barrier-chain-chain-link-fence-951408.jpg"
comments: true
tags: "ssh, bad permissions, chmod, publickey, authentication"
---

So, I just tried to setup a login via public key to a new server and somehow got into the following error:

```bash
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

That wasn't useful at all... was my SSH config misconfigured? The client first offered the `publickey` authentication however that was skipped.

After sometime looking around I finally understood what the problem was and that was only about **bad permissions in the .ssh directory**.

It seems that SSH doesn't like to have your home `~/` and `~/.ssh` directories with group write permissions, and that makes total sense to me: your home directory should **only** be written by you, right? :D

So, I ran both `chmod 700 ~/.ssh` and `chmod 600 ~/.ssh/authorized_keys` commands to update these directories permissions.

There are other ways to solve this "issue", including disabling this *strict mode* (which I wouldn't recommend at all).

*Featured image by [Travis Saylor](https://www.pexels.com/@travis-saylor-271738?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)*
