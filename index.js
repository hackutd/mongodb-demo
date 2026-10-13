require("dotenv").config();

const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set. Add it to your .env file.");
}

const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB.");
        await users.deleteMany({});

        const db = client.db("demo");
        const users = db.collection("users");
        await users.deleteMany({});
        // ============================================
        // 1. CREATE
        // ============================================

        // Insert one user


        // Insert multiple users



        // ============================================
        // 2. READ
        // ============================================

        // Find one user


        // Find all users


        // Find users matching a condition



        // ============================================
        // 3. UPDATE
        // ============================================

        // Update one user



        // ============================================
        // 4. DELETE
        // ============================================

        // Delete one user



        // ============================================
        // 5. CHALLENGE
        // ============================================

        // Find all users who are 21 or older

    } finally {
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

main().catch((error) => {
    console.error("MongoDB workshop failed:", error.message);
    process.exitCode = 1;
});
