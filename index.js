require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
    await client.connect();

    const db = client.db("demo");
    const users = db.collection("users");

    // ============================================
    // CREATE
    // ============================================

    // Insert one user
    await users.insertOne({
        name: "Alice",
        age: 20,
        major: "Computer Science"
    });

    // Insert multiple users
    await users.insertMany([
        { name: "Bob", age: 22, major: "Computer Science" },
        { name: "Charlie", age: 19, major: "Business" },
        { name: "David", age: 21, major: "Engineering" }
    ]);


    // ============================================
    // READ
    // ============================================

    // Find one user
    const user = await users.findOne({
        name: "Alice"
    });

    console.log(user);


    // Find all users
    const allUsers = await users.find({}).toArray();

    console.log(allUsers);


    // Find Computer Science users
    const csUsers = await users.find({
        major: "Computer Science"
    }).toArray();

    console.log(csUsers);


    // Find users older than 20
    const usersOver20 = await users.find({
        age: { $gt: 20 }
    }).toArray();

    console.log(usersOver20);


    // ============================================
    // UPDATE
    // ============================================

    // Update Alice's age to 21
    await users.updateOne(
        { name: "Alice" },
        { $set: { age: 21 } }
    );

    const updatedUser = await users.findOne({
        name: "Alice"
    });

    console.log(updatedUser);


    // ============================================
    // DELETE
    // ============================================

    // Delete Charlie
    await users.deleteOne({
        name: "Charlie"
    });

    const deletedUser = await users.findOne({
        name: "Charlie"
    });

    console.log(deletedUser);


    // ============================================
    // CHALLENGE
    // ============================================

    // Find all users who are 21 or older
    const users21AndOver = await users.find({
        age: { $gte: 21 }
    }).toArray();

    console.log(users21AndOver);


    await client.close();
}

main();