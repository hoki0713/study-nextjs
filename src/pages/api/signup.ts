import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { hash } from "bcrypt";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    hash(req.body.password, 10, async function (err, hash) {
      const statement = await db.prepare(
        "INSERT INTO person (name, email, password) values (?, ?, ?)"
      );
      const result = await statement.run(
        req.body.name,
        req.body.email,
        hash
      );

      const person = await db.all("select * from person");
      res.json(person);
    });
  } else {
    res.status(405).json({ message: "we only support POST" });
  }
}
