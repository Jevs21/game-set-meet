
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  pronouns VARCHAR(50),
  img_url VARCHAR(255),
  bio TEXT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  availability TEXT -- Representing boolean[][] might require a different approach
);