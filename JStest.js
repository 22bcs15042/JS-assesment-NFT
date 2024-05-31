/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Create the mintNFT function
function mintNFT(name, description, image, attributes) {
    // Create an NFT object with the metadata passed as parameters
    const nft = {
        name: name,
        description: description,
        image: image,
        attributes: attributes
    };

    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// Step 3: Create the listNFTs function
function listNFTs() {
    // Loop through the nftCollection array and print the metadata of each NFT
    for (let i = 0; i < nftCollection.length; i++) {
        const nft = nftCollection[i];
        console.log(`NFT ${i + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Description: ${nft.description}`);
        console.log(`  Image: ${nft.image}`);
        console.log(`  Attributes: ${JSON.stringify(nft.attributes)}`);
        console.log('----------------------');
    }
}

// Step 4: Create the getTotalSupply function
function getTotalSupply() {
    // Return the total number of NFTs in the nftCollection array
    return nftCollection.length;
}

// Call your functions below this line

// Minting some NFTs
mintNFT("Vaibhav", "A rare CryptoPunk", "cryptoPunk.png", { rarity: "rare", type: "punk" });
mintNFT("Nitish", "A cool Bored Ape", "boredApe.png", { rarity: "common", type: "ape" });
mintNFT("Yash", "A precious EtherRock", "etherRock.png", { rarity: "legendary", type: "rock" });

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
console.log(`Total NFTs: ${getTotalSupply()}`);
