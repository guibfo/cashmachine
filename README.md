# CashMachine Test Project

## The problem

Develop a solution that simulate the delivery of notes when a client does a withdraw in a cash machine.

The basic requirements are the follow:

Always deliver the lowest number of possible notes;
It's possible to get the amount requested with available notes;
The client balance is infinite;
Amount of notes is infinite;
Available notes $ 100,00; $ 50,00; $ 20,00 e $ 10,00

Example:

```
Entry: 30.00
Result: [20.00, 10.00]

Entry: 80.00
Result: [50.00, 20.00, 10.00]

Entry: 125.00
Result: throw NoteUnavailableException

Entry: -130.00
Result: throw InvalidArgumentException

Entry: NULL
Result: [Empty Set]
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need NodeJS and NPM installed to build the project, fire up the development env, and run tests

### Installing

Unzip the contents on a folder. Go to the project folder on terminal and run

```
npm install
```

To get the development env running, after all dependencies are downloaded run

```
npm run server
```

## Running the tests

To run tests go to the project root folder and run

```
npm test
```

## Deployment

To build for deployment go to the project root folder and run

```
npm build
```

## Authors

* [Guilherme Oliveira](https://github.com/guibfo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
