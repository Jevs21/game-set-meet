
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  pronouns VARCHAR(50) NOT NULL DEFAULT '',
  img_url VARCHAR(255) NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  availability TEXT -- Representing boolean[][] might require a different approach
);

CREATE TABLE IF NOT EXISTS sports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS sports_skill_levels (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sport_id UUID NOT NULL REFERENCES sports(id),
  skill_level SMALLINT NOT NULL,
  skill_name VARCHAR(255) NOT NULL,
  alt_names JSON NOT NULL DEFAULT '[]',
  description TEXT NOT NULL DEFAULT ''
);
