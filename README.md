#3Megawatt Code Challenge

![](demo.gif)

This app is built for 3Megawatt as a code challenge for a Front-End job position.

## Structure

#### Pages
This is where the pages components are.
#### Components
The main app components where all the logic happens.
#### Services
The services for communicating with the server.
#### Theme
Shared styled components, colors, etc.

## Future work
- Use custom date picker library.
- Improve the accessibility.
- Use more animations.

## Development

### Front-End

This app is created with `create-react-app`. In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Backend
It is provided as simple docker-composer file, you can download it and start it using `docker-compose up` from: https://gist.github.com/pablopalacios/9a00c7f835553c9d14267d2f442ad52d
then it will be start on `http://localhost:5001`.

## Credit
The credit goes for Haitham Alathamneh for building this Front-End part of the app, and for 3Megawatt for building this code challenge and providing the backend docker file.