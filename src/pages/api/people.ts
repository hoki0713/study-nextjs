import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default function getPeople(req: NextApiRequest, res: NextApiResponse) {
  open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  }).then(async (db) => {
    const people = await db.all('select * from person');
    res.json(people);
  })
}