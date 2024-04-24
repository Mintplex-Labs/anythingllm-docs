---
title: Desktop Vs. Docker
hide_title: false
---

AnythingLLM offers two main ways to use AnythingLLM. There are some distinct differences in functionality between each offering. Both are open source.


### You want AnythingLLM Desktop if...
- if you want a one-click installable app to use local LLMs, RAG, and Agents locally
- You do not need multi-user support
- Everything needs to stay only on your device
- You do not need to "publish" anything to the public internet. Eg: Chat widget for website


### You want AnythingLLM Docker if...
- You need an easy setup, but server-based service for AnythingLLM to use local LLMs, RAG, and Agents locally
- You want to run an AnythingLLM instance that many people can use at the same time
- You want to be able to share information with our users on your instance you invite
- You need admin and rule-based access for workspaces and documents.
- You will publish chat widgets to the public internet
- You want to access AnythingLLM from the browser


The below table is a non-exhaustive list of features supported between platforms.

✅
❌
<div class="special_table"></div>

| Feature | Available on Desktop | Available on Docker |
|----|----|----|
| Multi-user support | ❌ | ✅ |
| Emeddable chat widgets | ❌ | ✅ |
| One-click install | ✅ | ❌ |
| Private documents | ✅ | ✅ |
| Connect to any vector database | ✅ | ✅ |
| Use any LLM | ✅ | ✅ |
| Built-in embedding provider | ✅ | ✅ |
| Built-in LLM provider | ✅ | ❌  |
| White-labeling | ❌ | ✅  |
| Chat logs | ✅ | ✅  |
| Agent support | ✅ | ✅  |
| Agent skills | ✅ | ✅  |
| Third-party data connectors | ✅ | ✅  |
| Password protection | ❌ | ✅  |
| Invite new users to instance | ❌ | ✅  |
| Text splitting configuration | ✅ | ✅  |
| Whisper model support | ✅ | ✅  |
| Full developer API | ✅ | ✅  |
| User management | ❌ | ✅  |
| Workspace access management | ❌ | ✅  |
| Website scraping | ✅ | ✅  |