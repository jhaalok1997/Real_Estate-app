import {Client, Account , Databases} from "appwrite"


const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66e7c86c00357859dea2")


export const account = new Account(client)

// Database

export const databases = new Databases(client,'66e7cae90001a460aec8'
)



//  66e7cae90001a460aec8
//  database id  = 66e7c8e8001c0e779739
 // let apikey = "standard_f4d11eb3236fe54ed0bec4a79e7e2ac75b094dc648a7bce4514fc199bed55039a696e057eb3857d7ae0bb263a378391f0b3c7fbae2fac7a252065a9b9771cee93060a5096172c45e8eafe2daec57992b6a00c6366810a680d45aa7bb28cfad14e39b8cd0e1e32cc81ce3560944f1fbecb9933dce24e9595a19cbb32a348aaa5f"