[Milvus](https://milvus.io/) is an open-source vector database that can handle tons of vectors with excellent speed.



Milvus has a cloud offering under the name [Zilliz](https://zilliz.com/) - the integration for Zilliz can be found in the sidebar but should look familiar to other providers.

[https://zilliz.com/](https://zilliz.com/)

You are responsible for the setup, installation, and costs associated with the storage of vectors and retrieval when connected with AnythingLLM.

![](files/I42VbOrcXrr6LefvtaGD.png)

## How to install Milvus locally

Milvus is an open-source project that is most easily set up via Docker. The official set up documentation is linked below.



To get started locally you can also just easily pull in the install script and run `docker-compose` on the script.

```bash
wget https://github.com/milvus-io/milvus/releases/download/v2.3.4/milvus-standalone-docker-compose.yml \
-O docker-compose.yml

# then run docker-compose
docker compose up -d

# Will typically bind to port 19530
```

## Add local Milvus to AnythingLLM.

In the AnythingLLM application, you can then easily add the default credentials (or custom credentials you set up) into the appropriate inputs.

Milvus DB Address:` http://localhost:19530`

Milvus Username: `minioadmin`

Milvus Password: `minioadmin`

You are now connected to Milvus!

