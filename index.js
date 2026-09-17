require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
    await client.connect();

    const db = client.db("demo");
    const users = db.collection("users");


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



    await client.close();
}

main();