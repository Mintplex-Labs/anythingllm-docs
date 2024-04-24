Running AnythingLLM locally is the most comprehensive way to run AnythingLLM as some features like on-premise LLM use are restricted for hosting due to resource constraints.

The easiest way to install AnythingLLM is to use [Docker](https://www.docker.com/) on your local machine or server.

Once you are prepared to run AnythingLLM on your machine the process is quite simple. You should provision a folder somewhere on the host machine so that you can re-pull the latest versions of AnythingLLM and persist data between container rebuilds.

The Mintplex Labs team takes **great care** to ensure AnythingLLM is always backward compatible. In the event this changes you will be alerted via code, deployment, or our regular communication channels on social, Discord, and email.

```sh
export STORAGE_LOCATION=$HOME/anythingllm && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm:master
```

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"; `
If(!(Test-Path $env:STORAGE_LOCATION)) {New-Item $env:STORAGE_LOCATION -ItemType Directory}; `
If(!(Test-Path "$env:STORAGE_LOCATION\.env")) {New-Item "$env:STORAGE_LOCATION\.env"}; `
docker run -d -p 3001:3001 `
--cap-add SYS_ADMIN `
-v "$env:STORAGE_LOCATION`:/app/server/storage" `
-v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
-e STORAGE_DIR="/app/server/storage" `
mintplexlabs/anythingllm:master;
```

> [https://github.com/Mintplex-Labs/anything-llm/blob/master/docker/HOW_TO_USE_DOCKER.md#recommend-way-to-run-dockerized-anythingllm](https://github.com/Mintplex-Labs/anything-llm/blob/master/docker/HOW_TO_USE_DOCKER.md#recommend-way-to-run-dockerized-anythingllm)
>
>
Done! You are using AnythingLLM!

