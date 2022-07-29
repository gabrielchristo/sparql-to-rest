# RAMOSE Backend

Para executar o RAMOSE são necessários os arquivos `*.hf` com as especificações da API. Caso seja utilizado, também são necessários os arquivos `*.py` com filtros de pré-processamento e pós-processamento.

## Execução com projeto local

Com o Python (>= 3.7) devidamente instalado, executar na pasta do módulo RAMOSE os seguintes comandos:

```sh
pip install -r requirements.txt

python ramose.py -s ../nobel.hf -w 0.0.0.0:5050
```

## Execução com Docker

Neste diretório está o Dockerfile responsável por gerar a imagem e posteriormente o container Docker para executar o RAMOSE.

Para construir a imagem:

```sh
sudo docker build -t ramose-backend .
```

Para executar o container:

```sh
sudo docker run -p 5050:5050 -it ramose-backend
```

Para remover uma imagem Docker em caso de alterações na API:

```sh
sudo docker rm <container_id>
sudo docker rmi <image_id>
```
