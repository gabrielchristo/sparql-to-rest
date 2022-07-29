FROM python:3.8-slim-buster

WORKDIR /src

# copiando arquivos em hashformat para a imagem
COPY nobel.hf .

# instalando ramose via pip
RUN pip install ramose

# variaveis de ambiente do flask
ENV FLASK_ENV=development
ENV FLASK_DEBUG=1

# usando 0.0.0.0 para servidor flask efetuar bind em todos os IPs
CMD ["python", "-m" , "ramose", "-s", "nobel.hf", "-w", "0.0.0.0:5050"]
