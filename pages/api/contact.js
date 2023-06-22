// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { closeDB, connectToDB } from "../../db";

export default async function handler(req, res) {
  const client = await connectToDB("contact");
  const db = client.db();
  if (req.method === "POST") {
    if (!req.body.email || !req.body.email.includes("@")) {
      res
        .status(422)
        .json({ msg: "Invalid Data", data: { email: req.body.email } });
    } else {
      const data = {
        email: req.body.email,
        name: req.body.name,
        msg: req.body.msg,
      };
      try {
        await db.collection("suggestion").insertOne(data);
        closeDB(client);
      } catch {
        res.status(500).json({ msg: "fails to db connect" });
      }
      res.status(201).json({
        msg: "success",
        data: { email: req.body.name, eventID: req.query.eventId },
      });
    }
  } else if (req.method === "GET") {
    const data = await db.collection("suggestions").find().toArray();
    closeDB(client);
    console.log("data", data);
    res.status(201).json({
      msg: "success",
      data: data,
    });
  }
}
