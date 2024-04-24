AnythingLLM comes with a private built-in vector database powered by [LanceDB](https://lancedb.com). Your vectors never leave your instance of AnythingLLM when using the default option.

You should prevent "hopping" between vector databases. AnythingLLM **will not** automatically port over your already embedded information.

You would need to delete and re-embed each document in every workspace to migrate to another vector database.

Vector databases are like regular databases but are specially tuned to store and retrieve data based on embeddings. These databases come in many forms with each having unique features.

