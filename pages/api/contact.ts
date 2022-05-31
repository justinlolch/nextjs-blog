import { MongoClient } from "mongodb";
import { Message } from "../../interface/interface";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({
        message: "Invalid input.",
      });
    }
  
    // Store it in a database
    const newMessage: Message = {
      email,
      name,
      message,
    };
  
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_host}/${process.env.mongodb_database}?retryWrites=true&w=majority`
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to database" });
    }
  
    const db = client.db();
  
    try {
      const res = await db.collection("messages").insertOne(newMessage);
      newMessage.id = res.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Could not store message" });
    }
  
    client.close();
  
    return res
      .status(201)
      .json({ message: "Message sent successfully.", newMessage: newMessage });
  }
}