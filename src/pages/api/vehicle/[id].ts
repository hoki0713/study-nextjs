import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
  open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  }).then(async (db) => {
    const vehicle = await db.get('select * from vehicle where id = ?', [req.query.id]);
    res.json(vehicle);
  })
}