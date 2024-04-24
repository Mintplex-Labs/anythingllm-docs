---
title: LMStudio
---

:::warning Heads up!
LMStudio's inference server only allows you to load multiple LLMs or a single embedding model, but not both. This means LMStudio cannot be both your LLM and embedder.
:::

[LMStudio](https://lmstudio.ai) supports LLM **and** embedding GGUF models from HuggingFace that can be run on CPU or GPU. LMStudio is a _separate_ application that you need to download first and connect to. 

:::tip Connecting to LMStudio
When running LMStudio locally, you should connect to LMStudio by first running the built-in inference server. You **must** explicitly load the embedding model before starting the inference server.
:::

You can update your model to a different model at any time in the **Settings**.
