import { Grid, Stack, Typography } from "@suid/material"
import { createResource } from "solid-js"

const SportListEditor = () => {
  const [sportList] = createResource(async () => {
    return await fetch("http://localhost:3000/sports/list").then(res => res.json())
  });

  return (
    <Grid container item>
      <Stack>
        {!sportList.loading && sportList().map(sport => (
          <Typography>{sport.name}</Typography>
        ))}
      </Stack>
    </Grid>
  );
}

export default SportListEditor;