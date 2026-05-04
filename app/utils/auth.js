import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient, ServerApiVersion } from "mongodb";
import dns from 'node:dns'

dns.setServers(['8.8.8.8', '8.8.4.4'])


let client;
let db;

async function getDatabase() {
    if (!client) {
        client = new MongoClient(process.env.DATABASE_URL, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            serverSelectionTimeoutMS: 10000,

            retryWrites: true,
            retryReads: true,
        });
        await client.connect();
    }
    return client.db();
}


db = await getDatabase();

export const auth = betterAuth({
    database: mongodbAdapter(db),

    emailAndPassword: {
        enabled: true,
    },
    baseURL: process.env.BETTER_AUTH_URL,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },
    },
    user: {
        changeEmail: {
            enabled: true,
            updateEmailWithoutVerification: true
        }
    },
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
});