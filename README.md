# Query Box

A fully functional StackOverflow clone developed for a smaller community discussions and QnA platform

## Setup

- Clone the repo in your local environment using command `git clone https://github.com/belphegor-s/query-box.git`
- Install _node modules_ for each `frontend` and `backend-server` directories using command `npm i`
- In the `backend-server` directory create a `.env` file with following key value pairs-

```env
MONGODB_URI = "Your mongoDB URI"
PORT = 8080
SECRET = "Your JWT Secret"
```
- Start the server in `backend-server` directory by using command `npm start` or `nodemon index.js` (for dev environment)
- Replace the __backendUrl__ in this file - `/frontend/src/backendUrl.js`
- Start the `frontend` app as well using command `npm start`
