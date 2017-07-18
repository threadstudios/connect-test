## Connect Test
A test application for the web agency Connect.

https://thread-connect.herokuapp.com/

(Please note this is on a free dyno so if the application has not been accessed for a while it may be slow to load)

## Installation

Clone the application and then run:

`yarn install`

To run the application in development mode run:

`yarn dev`

and to build the application run:

`yarn build`

To run the application tests:

`yarn test`

and to get coverage:

`yarn test -- --coverage`


## Choices

### Framework

I've utilised Inferno.js for my application as it is my preffered framework. Inferno is a lighter faster version of react which was written to be more friendly towards mobile devices.
Having worked on many react applications I've seen how the initial javascript package file can balloon - making initial load times and time to first paint over seconds.

With the stack used in my application I would expect a bundled react package size of about 500kb - Inferno is currently sitting at 76kb.

### StarterKit

I've utilised my own starter kit - [ThreadBare](https://github.com/threadstudios/threadbare), which bundles all of the dependencies and build processes required to build an isomorphic Inferno application.

### Server Side Rendering

As the application is isomorphic it takes advantage of server side rendering. In the interests of the task I've not implemented this fully as the test was to fetch data from the server and display a loading state.
I have however server side rendered the initial content to generate the basis for the items, although that doesn't look like much it means that we are only doing the requests to fetch the additional car information.

### Testing

I've utilised Jest and its snapshot testing and have coverage of around 75% of the application. Due to the size of the application I've not introduced redux to manage state but if I extended the application I would add it, allowing for a much easier way to hook into datafetching and state management.

### Build

The application is built via bundled build scripts from ThreadBare - However these can be extended to give extra functionality.
Styling wise I have utilised flexbox and a simple breakpoint system.
