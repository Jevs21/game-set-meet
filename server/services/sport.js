const db = require('../database/db');

module.exports.getAllSports = async () => {
  const results = await db.query('SELECT * FROM sports INNER JOIN sports_skill_levels ON sports.id = sports_skill_levels.sport_id');
  return results.rows;
};

module.exports.getSportById = async (id) => {
  const result = await db.query('SELECT * FROM sports WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports.addSport = async (sport) => {
  const result = await db.query(
    'INSERT INTO sports (name, rules) VALUES ($1, $2) RETURNING *',
    [sport.name, sport.rules]
  );
  return result.rows[0];
};

module.exports.removeSport = async (id) => {
  await db.query('DELETE FROM sports WHERE id = $1', [id]);
};

module.exports.updateSport = async (id, sport) => {
  const result = await db.query(
      'UPDATE sports SET name = $1, rules = $2 WHERE id = $3 RETURNING *',
      [sport.name, sport.rules, id]
  );
  return result.rows[0];
};
