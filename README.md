
# ✨Files Scape🎋

Files Scape is an easy-to-use dashboard to manage all of your files online, also featuring unique encryption method using cryptic to protect your files on the open internet, i.e. IPFS/Filecoin.

![Home Page](https://i.ibb.co/5vk1Q77/image-6.png)
[](https://dappathon2-server-482597.spheron.app/)<center>https://filescape.xyz</center>

> 🔴**IMPORTANT**🔴 
> We have limited the upload capacity to just 10MB for testing purposes.

# Get Started

The product contains two code bases, Server to serve the Client and also polls for a recent blocks, a GUI code base.

1. [Server](https://github.com/oBLAZERo2001/dappathon2-express)
2. [Client](https://github.com/oBLAZERo2001/dappathon2-server)

**Website**

[filescape.xyz](https://dappathon2-server-482597.spheron.app/)

**API**

[API Filescape](http://in4gk2o0dheud9s6d0smudfla4.ingress.boxedcloud.net/)

# Accomplishments/Milestones

 - Bunzz, token management made easy using Buzz protocol.
 - Created our own easy to use functions to encrypting and decrypting files using Node.js.
 - Successfully moved from centralized providers to decentralized providers using Spheron.
 - Better UI/UX for fast and easy to use dashboard.

# Technology
 - **Node.js server** with Express.js, hosted on **Spheron Decentralized Compute** [[know more]](https://spheron.network/#decentralised-compute)
 - Database, **MongoDB**.
- **Bunzz** Find, Deploy & Manage reviewed contracts easily with Bunzz. [[know more]](https://www.bunzz.dev/)
- Files are stored in Decentralized storage using **Spheron Storage SDK**, [[know more]](https://spheron.network/#storage-sdk)
-  **Crypto Module** as Lit Module never worked with Spheron storage( Not in my machine:( ), we moved on to normal crypto encryption using the native Node Crypto module. [[Node Crypto]](https://nodejs.org/api/crypto.html)
- React.js for client, hosted on **Spheron Decentralized Hosting**  [[know more]](https://spheron.network/#decentralized-hosting)

**Basic encryption using Nodejs Crypto**

![Home Page](https://i.ibb.co/4RrKtDV/Screenshot-27.png)
 
[Full code here↗️](https://github.com/leostelon/arweaver-server/blob/main/src/subscriber.js)

Follow the below steps to run it locally.

## Server⚙️
> ⚠️ Make sure you have installed Bacalhau Client. [Know More](https://docs.bacalhau.org/getting-started/installation)

1. Clone Repo.
> $ git clone https://github.com/oBLAZERo2001/dappathon2-express filescape-server
>  $ cd arweaver-server
2. Add the .env file in the root directory. Add the below variables and replace them with your tokens, respectively.

    	  PORT=3062
    	  ALLOWED_DOMAINS=[http://localhost:3000/]
    	  JWT_SECRET=topsecret
		  MONGODB_URL= < mongodb-url >
		  WALLET_PRIVATE_KEY= < evm-wallet-private-key >
		  ENCRKEY=1234567890
	      TOKEN= < spheron-storage-token >[Know More](https://docs.spheron.network/sdk/storage/)

3. Run server!
#### Run independently
> $ npm run start



## Client💻

1. Clone Repo.
> $ git clone https://github.com/oBLAZERo2001/dappathon2-server filescape-client
>  $ cd filescape-client
2. Add the .env file in the root directory. Replace the value accordingly.

		  REACT_APP_SERVER_URL=http://localhost:3062
	  
4. Run the client!
> $ npm run start

Note: It may prompt to run on a different port, hit enter.

## What next?👨‍💻
 - [x] Nodejs encryption
 - [x] Hosting
 - [ ] Analytics dashboard at home.
 - [ ] Move to Lit encryption.