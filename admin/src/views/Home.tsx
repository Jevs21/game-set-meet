import { Box, Grid, Stack, Typography} from "@suid/material";
import SportListEditor from "../components/SportListEditor";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Hello World!</Typography>
      </Grid>
      <SportListEditor />
    </Grid>
  );
}

export default Home;