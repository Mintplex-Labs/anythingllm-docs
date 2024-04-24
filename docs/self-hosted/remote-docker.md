---
title: Cloud AnythingLLM Docker
displayed_sidebar: docs
---

Running AnythingLLM on a cloud service is the best way to run a private multi-user instance of AnythingLLM with full control.

:::tip Easy cloud deployment
AnythingLLM offers easily integrated one-click docker deployment templates with [Railway](https://railway.app/template/HNSCS1?referralCode=WFgJkn) and [Render](https://render.com/deploy?repo=https://github.com/Mintplex-Labs/anything-llm&branch=render).

_this is the easiest way to self-host a cloud server version of AnythingLLM_
:::

<div class="special_table"></div>

| Provider	| Minimum Instance size |
|----|----|
| Amazon Web Services | t3.small |
| Google Cloud Provider | e2-standard-2 |
| Azure Cloud | B2ps v2 |

:::tip
AnythingLLM offers community-maintained deployment templates for cloud providers
https://github.com/Mintplex-Labs/anything-llm/tree/master/cloud-deployments
:::

Once you are prepared to run AnythingLLM on your server the process is quite simple. You should provision a folder somewhere on the host machine so that you can re-pull the latest versions of AnythingLLM and persist data between container rebuilds.

:::warning Backwards compatibility
The Mintplex Labs team takes great care to ensure AnythingLLM is always backward compatible. In the event this changes you will be alerted via code, deployment, or our regular communication channels on social, Discord, and email. 
:::


```shell
# Assuming that you want to store app data in a folder at /var/lib/anythingllm

# Pull in the latest image
docker pull mintplexlabs/anythingllm:master

export STORAGE_LOCATION="/var/lib/anythingllm" && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \ # expose on port 3001 (can be any host port)
--cap-add SYS_ADMIN \ # So you can scrape website URLs for information!
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm:master

# visit http://localhost:3001 to use AnythingLLM!
```

Done! You are using AnythingLLM!