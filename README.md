# drizzle-react-boilerplate

I created this boilerplate that meant to be up to date and scalable (you will be able to add other reducer and sagas)

## Setting up the development environment
### Download this repo
```
git clone https://github.com/yidongw/drizzle-react-boilerplate.git
cd drizzle-react-boilerplate
```
### Truffle
```
npm i -g truffle
```
### Ganache-CLI
```
npm i -g ganache-cli
```
### Launching a test blockchain
```
ganache-cli -b 3
```
### Compile the smart contract
```
truffle compile
```
### Migrate the smart contract
```
truffle migrate
```
### install the dependencies
```
cd client
npm i
```
### run the project
```
npm run start
```

[Getting started with Drizzle and React Guide](https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react) explained most of the things, but it didn't use context to pass the `drizzle` object. As the project grows, passing the `drizzle` as props gets repetitive.

The other two guides on the official drizzle website [1](https://truffleframework.com/docs/drizzle/getting-started/using-an-existing-redux-store), [2](https://truffleframework.com/docs/drizzle/react/react-integration) are outdated after using the new react Context API.

While [drizzle-react](https://github.com/trufflesuite/drizzle-react) supports the new Context API with DrizzleContext but it is lacking exporting the context, which means you have to create another component to passing down the context to child component as a prop.

I also take a look at the [drizzle-box](https://github.com/truffle-box/drizzle-box). It is pretty comprehensive, but it contains too much to be used a boilerplate.

