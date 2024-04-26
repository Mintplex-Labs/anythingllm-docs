---
sidebar_position: 4
title: Vector Databases
---

:::tip 
 Your vector database is set system-wide and cannot be configured atomically per-workspace like LLMs can.
:::

# Supported Vector Databases

:::note
AnythingLLM comes with a private built-in vector database powered by [LanceDB](https://lancedb.com/). Your vectors never leave AnythingLLM when using the default option.
:::

:::danger

You should prevent "hopping" between vector databases. AnythingLLM will not automatically port over your already embedded information. 

You would need to delete and re-embed each document in every workspace to migrate to another vector database.
:::

AnythingLLM supports many vector databases providers out of the box.


<div class="side-by-side">
<div class="special_table"></div>

|        Supported Local Vector Databases   |
|--------------|-----------    |
| [LanceDB](/vector-databases/lancedb) (default) | 
| [Chroma](/vector-databases/chromadb) |  
| [Milvus](https://github.com/milvus-io/milvus) | 

<div class="special_table"></div>

|        Supported Cloud Vector Databases       |
|--------------|-----------    |
| [Pinecone](https://www.pinecone.io/) | 
| [Zilliz](https://zilliz.com/) | 
| [AstraDB](https://www.datastax.com/) | 
| [QDrant](https://qdrant.tech/) | 
| [Weaviate](https://weaviate.io/) | 

</div>