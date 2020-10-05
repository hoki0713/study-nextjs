import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
  open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  }).then(async (db) => {
    const allVehicles = await db.all('select * from vehicle where ownerId = ?', [req.query.id]);
    res.json(allVehicles);
  })
}