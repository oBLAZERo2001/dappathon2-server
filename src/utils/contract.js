import { deploy } from "@bunzz/deploy-sdk";
import { providers } from "ethers";

const TEMPLATE_ID = "1d878660-95cf-438f-aeb9-70e9ecd03c3b";

export const cloneContract = async () => {
	// get a Signer object in the ethers' style.
	const signer = getSigner();

	// Arguments for the constructor as an array.
	// The types must follow the ethers style.
	const arg = ["Test Deploy", "TD", "https://ipfs.io/ipfs/"];

	// The return value is the same as the ethers one.
	const tx = await deploy(TEMPLATE_ID, signer, arg);

	// You can get receipt as well.
	const receipt = await tx.wait();

	return receipt;
};

const getSigner = () => {
	// Here is an example of Metamask.
	const provider = new providers.Web3Provider(window.ethereum);
	return provider.getSigner();
};
