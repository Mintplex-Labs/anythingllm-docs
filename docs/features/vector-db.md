---
title: Vector DB Configuration
displayed_sidebar: features
---

:::note
AnythingLLM comes with a private built-in vector database powered by [LanceDB](https://lancedb.com/). Your vectors never leave AnythingLLM when using the default option.
:::

:::danger

You should prevent "hopping" between vector databases. AnythingLLM will not automatically port over your already embedded information.

You would need to delete and re-embed each document in every workspace to migrate to another vector database.
:::

AnythingLLM supports many vector databases providers out of the box.

![LLM Provider Settings](/img/features/vector-db-configuration/vectordb-preference.png)

To see all supported vector databases, visit [here](../vector-databases.md).
