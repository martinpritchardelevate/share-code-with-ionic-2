# Sharing `typescript` packages in `ionic 2`

## Get Started

For more info, please see the [Medium post](https://medium.com/@blewpri/sharing-logic-between-ionic2-apps-f06feaf51fad#.2twsjq9ka) that accompanies this repo.

### 1. Install & link dependencies

For our **shared** package:

```
cd shared-code
npm i
// compile typescript...
tsc 
npm link
```

For our **consuming** packages:

```
cd ionic-app-one
npm i
// npm 'link' is not strictly necessary here,
// as it's done by the 'ionic serve' command...
// it's only here for reference purposes.
npm link shared-code
```

and/or:

```
cd ionic-app-two
npm i
// npm 'link' is not strictly necessary here,
// as it's done by the 'ionic serve' command...
// it's only here for reference purposes.
npm link shared-code
```

### 2. When developing

Open two terminal tabs/windows, and...

#### 2.1 Watch shared package for changes

This will run and recompile our typescript whenever
there is a change in this package:

```
cd shared-code
npm run watch
```

#### 2.2 Fire up your ionic app

```
cd ionic-app-one
ionic serve
```