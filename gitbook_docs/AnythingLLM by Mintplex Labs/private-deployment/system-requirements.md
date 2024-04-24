AnythingLLM is fully customizable in every regard. Given this customizable nature, your exact requirements to run AnythingLLM depend on many factors. You can use the tables below to get a rough idea of what it will take to run AnythingLLM.

AnythingLLM can be a wrapper around many external services that all accomplish some task - making AnythingLLM so lightweight it can run on the smallest machines - even **Raspberry Pis**!

## Recommended Settings for AnythingLLM

This is the minimum value for running AnythingLLM. This will be enough for you to store some documents, send chats, and use AnythingLLM features.

RAM

2GB

CPU

2-core CPU (any)

Storage

5GB

## LLM Selection

This is how you get chat responses. Popular hosted solutions like OpenAi tend to provide state-of-the-art responses with almost zero overhead. However, you will need an API key

OpenAI (GPT-3, GPT-4, fine-tunes)

zero impact

Microsoft Azure

zero impact

Anthropic

zero impact

LMStudio

zero impact

LocalAI

zero impact

Custom Llama model

large storage impact due to model size. Additional very intense CPU/GPU and RAM overhead depending on the model.

## Embedding Selection

This is the model which you use to "embed" or vectorize text.

OpenAI (text-ada-embedding-002)

zero impact

Microsoft Azure

zero impact

LocalAI

zero impact

Default AnythingLLM Embedder

Recommended minimum will suffice

## Vector Database Selection

This is the solution you wish to use for storage vector data

Chroma

zero impact

Pinecone

zero impact

Qdrant

zero impact

Default AnythingLLM Vector DB (LanceDB)

Recommended minimum will suffice

Weaviate

zero impact



# Cloud Considerations

Amazon Web Services

t2.small, t3.small

Google Cloud Provider

e2-standard-2

Azure Cloud

B2ps v2

