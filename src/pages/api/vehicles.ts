import { NextApiRequest, NextApiResponse } from "next";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { authenticated } from "./people";

export default authenticated(function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  }).then(async (db) => {
    const vehicles = await db.all("select * from vehicle");
    res.json(vehicles);
  });
});
