require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name response soccer mirror grace casual fun giant'; 
let testAccounts = [
"0x99f829a4a39a7ef15ae3334331d73c5b4977a454497f438e45fbb970e44763b6",
"0x12aaa8856dab5b63ced9838049579d7f307d0df46f2194d02993d80231bd415a",
"0x6a197ca9dc5e118ef0c36491fdecac7ecac207ab48bb9868742ef66995d88be3",
"0x020712b7514194b570ad95e03a968f9059d4efbb24b9b2306317fd728f5afa7a",
"0x7d3a740a43562349036e503d1e330e0958d936e0132f9e7c86ff3c58d72d89dc",
"0xf880465473e4e84d8d196b02bb7c6f457b142b1d26b948eac72257232fbdabbf",
"0xead4fa902c636fecede009184bf74d67ef7910601ef19f86b48e87bcacd9b75f",
"0xaabc4892decea19b19514a10d926e215d6c9762baf22454c5d36b3b34f00765b",
"0xca8a314a777397c65b010f5b5ade8a591711135b29adfa05ebfe022c36e6d30a",
"0x379841de2f420bdec63d7f36f57160bba8f4660393d8e8fc1b1aafc73ec20077"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

