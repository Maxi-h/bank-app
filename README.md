This is a new [**React Native**](https://reactnative.dev) project - Bank App.

# Getting Started

## Step 1: Install dependencies

First, install dependencies:

```bash
# using npm
npm install

# OR using Yarn
yarn
```

## Step 2: Platform specific setup

After install dependencies, make sure to setup some ## Step 1: Install dependencies

### For Android

No additional steps are necessary.

### For iOS

```bash
cd ios && pod install && cd ..
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Done!

### Now what?

## Step Testing: Jest

Start testing with jest, use follow command

```bash
# using yarn
yarn test
```
