By default, AnythingLLM will use an open-source model that runs totally within AnythingLLM so that your information never leaves your instance.

The model that AnythingLLM uses internally for embedding documents and similarity searching is the [all-Mini-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) found on HuggingFace.

There is no setup or configuration to use this embedding choice.

If you are using this embedder it outputs a 384-dimension embedding and if using the non-default vector database you should configure your vector database to handle that dimension (Pinecone only)

![](files/VBCaswGjYvuwiXQbh03v.png)

