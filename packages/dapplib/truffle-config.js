require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone story recipe stereo snake injury light army gaze'; 
let testAccounts = [
"0xdb725fadc8f300db3501b5870fdecb9a9f0c03b8851c1cfc0623f2cb2564a8c6",
"0xcf59a130bb6af33ba798263e3cf42637eb7f16e31b265a81ef048791d9f81002",
"0xed3b0b6281fd674c6527859852b0e2d87820378bc78f5c8ea35cd6925f803d8d",
"0x8a887a21d38bee7b3246c20fab996d2aa2d61975255ee4b58b974fc131124a2a",
"0xef0cdffd41bef8c23fc14c5e4171736a24bebed8483c5588ada642a4d8494f98",
"0xd1968b54c043a550b64e35d1a3e9830c1f109aa880fa487dff32511f981bfda3",
"0xe1ba2db950621481d579c29e1d4287de1ee58fed5b08ffb2667c7f933895813c",
"0xa5f0900263410533aa549357ebca7eeadc2e5b96acdd93f3cfddcce2f4781904",
"0xd0bd2da0fc204f1ee71c2a215c6c5c8c2e036427012ff1859abdc20bd743b4f6",
"0x3781797eab26eacb3a3f28237374c210c721d7ed87332cda746bac99f65d69c0"
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
            version: '^0.5.11'
        }
    }
};
