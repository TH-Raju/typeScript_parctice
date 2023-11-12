## TypeScript

## at first install [nvm](https://github.com/coreybutler/nvm-windows#readme) nvm for node version manager

## check you have installed node and nvm

```
nvm -v
```

```
node -v
```

# Install Typescript globally

```
npm install -g typescript
```

- check typescript version (tsc = typescript compiler)

```
tsc -v
```

- tsc muloto typscript code k javascript a rupantor kore

## create a index.ts file

```
const course: string = "Next Level web dev";
```

and run on the file terminal

```
tsc .\index.ts
```

# initialize typescript file

```
tsc --init
```

## server jate bar bar re run hoy tai nodemon install korlam and ai jnno package.json o install kore nilam

```
npm init -y

npm i -D nodemon
```

### add this line on package.json file

```
"start": "nodemon index.js",
```

- Now write typescript code and save it then

```
tsc index.ts
npm start

```

# ts-node-dev

## ts-node-dev ata typescript file k node er environment a run korte pare

```
npm i ts-node-dev
```

- then replace

```
from -

"start": "nodemon index.js",

to -

"start": "ts-node-dev --respawn --transpile-only index.ts",
```

- now restart terminal

```
npm start
```

# tsconfig.json

## create a src folder and move index.ts file on src folder

- on tsconfig.json file

  search ctrl + f

  - rootDir
  - and set
  - "rootDir": "./src",

## create a dist folder

- on tsconfig.json file

  search ctrl + f

  - outDir
  - and set
  - "outDir": "./dist",

## now just run on terminal

```
tsc
```

# Array and Tuples

### Array is refference type
