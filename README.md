FrontEnd

Github Link: https://github.com/Sir-Dommy/inventory-system-frontend

Technologies used:
ReactJs version 18.2
You will also need npm to run the react app
Running the app
Clone the repository. (https://github.com/Sir-Dommy/inventory-system-frontend)

Open cloned project in your terminal and install node pakages using npm i command.

Run npm start to start the application.

The application is configured to start on port 3000, the app will open in browser once it starts.

Start tour in the landing page by first registering, then use same details for the login page.

You will be moved to all products page, from here you can;

1.	View all products.
2.	Create a new product.
3.	Update details of an existing product.
4.	Remove specific quantity of a product.
5.	Delete a product.

   
Note: Start by creating a new product to be able to update it.

Limitations

1.	I might have left out some components of the app in this discussion so that it can be concise.
2.	Bearer tokens expire after 24 hours, you might be required to generate new ones.
3.	However much I have validated most of the data, there might be uncaught UI errors.


















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

http://localhost:8080/auth/addNewUser post
{
    "name":"sir",
    "password":"123"
}

http://localhost:8080/auth/generateToken post
{
    "username":"sir",
    "password":"123"
}

http://localhost:8080/api/allProducts get

http://localhost:8080/api/product/2 (get, del, put by id)
{
    "name":"Bluetooth",
    "description":"F@@",
    "currentStock":23,
    "minimumStockLevel":118
}

http://localhost:8080/api/product/  post
{
    "name":"Bluetooth",
    "description":"F@@",
    "currentStock":23,
    "minimumStockLevel":118
}

http://localhost:8080/api/removeStock/1/10 put
