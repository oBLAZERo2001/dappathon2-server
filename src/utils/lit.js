// import LitJsSdk from "@lit-protocol/sdk-browser";

// function createLit() {
// 	const client = new LitJsSdk.LitNodeClient();
// 	const chain = "ethereum";

// 	const accessControlConditions = [
// 		{
// 			contractAddress: "",
// 			standardContractType: "",
// 			chain,
// 			method: "eth_getBalance",
// 			parameters: [":userAddress", "latest"],
// 			returnValueTest: {
// 				comparator: ">=",
// 				value: "0",
// 			},
// 		},
// 	];

// 	let litNodeClient;

// 	async function connect() {
// 		await client.connect();
// 		litNodeClient = client;
// 	}

// 	async function encryptFile(file) {
// 		if (!litNodeClient) {
// 			await connect();
// 		}
// 		const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
// 		const { encryptedFile, symmetricKey } = await LitJsSdk.encryptFile({
// 			file,
// 		});

// 		const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
// 			accessControlConditions: accessControlConditions,
// 			symmetricKey,
// 			authSig,
// 			chain,
// 		});

// 		return {
// 			encryptedFile: encryptedFile,
// 			encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
// 				encryptedSymmetricKey,
// 				"base16"
// 			),
// 		};
// 	}

// 	async function decryptFile(encryptedFile, encryptedSymmetricKey) {
// 		if (!litNodeClient) {
// 			await connect();
// 		}

// 		const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
// 		const symmetricKey = await litNodeClient.getEncryptionKey({
// 			accessControlConditions: accessControlConditions,
// 			toDecrypt: encryptedSymmetricKey,
// 			chain,
// 			authSig,
// 		});

// 		const decryptedFile = await LitJsSdk.decryptFile({
// 			file: encryptedFile,
// 			symmetricKey,
// 		});
// 		return decryptedFile;
// 	}

// 	return {
// 		connect,
// 		encryptFile,
// 		decryptFile,
// 	};
// }

// export default createLit();
