# GUI

Para executar a interface gráfica é necessário ter instalado o [Angular](https://github.com/angular/angular).

## Execução com projeto local

Com o [Node.js](https://github.com/nodejs/node) devidamente instalado, executar a instalação do Angular via NPM:

```sh
npm install -g @angular/cli
npm install @ngx-loading-bar/core @ngx-loading-bar/http-client --save
```

Para iniciar o servidor, execute o seguinte comando:

```sh
ng serve
```

Para efetuar a build da aplicação, executar o comando:

```sh
ng build
```

## Execução com Docker

Neste diretório está o Dockerfile responsável por gerar a imagem e posteriormente o container Docker para executar a interface gráfica.

Para construir a imagem:

```sh
sudo docker build -t angular-gui .
```

Para executar o container:

```sh
sudo docker run -p 4200:80 -it angular-gui
```

Para remover uma imagem Docker em caso de alterações na GUI:

```sh
sudo docker rm <container_id>
sudo docker rmi <image_id>
```
