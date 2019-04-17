# Event Manager
#

## Getting Started

These instructions will give you a copy of the project and running on your local machine for development and testing purposes.
A step by step series of explanation that tells you how to make the app run.

### Install npm
To run our app you first of all have to install NPM.

There are great installation tutorials on Youtube

| OS | Link |
| ------ | ------ |
| Windows | https://www.youtube.com/watch?v=gHuIKptS0Qg |
| Mac | https://www.youtube.com/watch?v=rF1ZHmqvm8I |
| Linux | https://www.youtube.com/watch?v=K6QiSKy2zoM

### Install MongoDB
Because our back-end is not running on a seperate server you have to download mongodb too.
There are great installation tutorials on Youtube.

| Link |
| ---- |
| https://www.youtube.com/watch?v=FwMwO8pXfq0&t=312s |

### Walktrough

After installing Npm and MongoDB, open tow terminals. One to run the back-end and one to run the front-end. After doing this navigate with the terminals to the location where you stored our repository.
### Starting the back-end
Now navigate with the terminal for the back-end to the cd /RestFull directory.
Install the dependencies - start the server. Make sure wether you use the port 7000 or not. If yes, then change it in server.js to a valid port. Don not forget, if you change the port in the file make sure you also change it at the front-end application.
```sh
$ cd RestFull
$ npm i
$ npm i nodemon
$ npm start
```

### Starting the front-end
Navigate with the front-end terminal to the /EventManager directory and install Ionic. The -g means it is a global install. For Window’s it's recommended to open an Admin command prompt. For Mac/Linux, run the command with sudo.
```sh
$ cd ../EventManager
$ npm i -g ionic
$ npm i
$ ionic serve
```
After typing the command "ionic serve" a browser pop up should be displayed. Now you can create a user and explore our app.
