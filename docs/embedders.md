---
sidebar_position: 3
title: Embedding Providers
---

:::tip 
  Embedding models are set system-wide and cannot be configured atomically per-workspace like LLMs can.
:::

# Supported Embedders

:::warning Heads up!
Once you select your embedding model provider and begin uploading and embedding documents it is best to _not_ change it.
While you can change embedders, doing so will mean you will have to delete your uploaded documents and re-embed them so the new
embedder can re-embed them.
:::

AnythingLLM supports many embedding model providers out of the box with very little, if any setup. Embedding models are specific types of models that turn text into vectors, which can be stored and searched in a vector database - which is the foundation of RAG.

You can modify your embedding provider and model at any time in AnythingLLM. However doing so can result in broken queries and needing to re-embed uploaded and stored documents.

<div class="side-by-side">
<div class="special_table"></div>

|        Supported Local Embedding Providers   |
|--------------|-----------    |
| [Built-in](/embedders/built-in) (default) | 
| [Ollama](/embedders/ollama) | 
| [LMStudio](/embedders/lmstudio) | 
| [LocalAI](/embedders/localai) | 

<!-- | [llama.cpp](/llms/azure-openai) | -->

<div class="special_table"></div>

|        Supported Cloud Providers       |
|--------------|-----------    |
| [OpenAI](/embedders/openai) | 
| [Azure OpenAI](/embedders/azure-openai) | 
</div>