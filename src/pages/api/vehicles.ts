import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
  open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  }).then(async (db) => {
    const vehicles = await db.all('select * from vehicle');
    res.json(vehicles);
  })
}