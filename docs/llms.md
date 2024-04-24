---
sidebar_position: 2
title: LLM Providers
---

# Supported LLMs

AnythingLLM supports many LLMs out of the box with very little, if any setup. The LLM is the foundational integration that will determine how your workspace or agents respond to your questions and prompts.

You can modify your LLM provider, model, or any other details at any time in AnythingLLM with no worry. We allow you to connect to both local and cloud-based LLMs - even at the same time!

<div class="side-by-side">
<div class="special_table"></div>

|        Supported Local LLM Providers   |
|--------------|-----------    |
| [Built-in LLM](/llms/desktop-built-in) _desktop only_ | 
| [Ollama](/llms/ollama) | 
| [LMStudio](/llms/lmstudio) | 
| [LocalAI](/llms/localai) | 

<!-- | [llama.cpp](/llms/azure-openai) | -->

<div class="special_table"></div>

|        Supported Cloud Providers       |
|--------------|-----------    |
| [OpenAI](/llms/openai) | 
| [Azure OpenAI](/llms/azure-openai) | 
| [Anthropic](/llms/anthropic) | 
| [Google Gemini Pro](/llms/google-gemini) | 
| [Hugging Face (chat models)](/llms/hugging-face) | 
| [Together AI (chat models)](/llms/together-ai) | 
| [OpenRouter (chat models)](/llms/openrouter) | 
| [Perplexity](/llms/perplexity) | 
| [Mistral API](/llms/mistral) | 
| [Groq](/llms/groq) | 
| [OpenAI (generic)](/llms/generic-openai) | 
</div>



We welcome pull requests to add new LLMs into AnythingLLM!

## Types of LLMs in AnythingLLM

AnythingLLM allows you to get as specific or general as you want with your LLM selection. You can even have multiple LLMs configured at the same time all in the same application!

### System LLM

This is the default LLM AnythingLLM will interface with. This is the LLM configuration that will be used when a workspace or agent-specific agent LLM has not been defined.

### Workspace LLM

AnythingLLM allows you to set workspace-specific LLMs, this will override the system LLM **but only when chatting with the specific workspace**. This allows you to have many workspaces that each have their own provider, model, or both!

### Agent LLM

AnythingLLM supports AI-agents. When it comes to agents, not all LLMs were created equal. Some LLMs directly support tool calling for better ai-agent functionality. The model is the model that is explicitly used for use with agents.