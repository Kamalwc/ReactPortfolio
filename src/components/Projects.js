import React from 'react'
import Footer from '../common/Footer'
import Proj from '../common/Proj'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
          <Proj
            title={"Book App"}
            gitHubLink={'https://github.com/Kamalwc/bookApp'}
            deployedLink={'https://katapt.herokuapp.com/'}
            viewLink={'https://katapt.herokuapp.com/'}
          />
        </Grid>
        <Grid item xs>
          <Proj
            title={"Travel Advisory"}
            gitHubLink={'https://github.com/Yoloko/Travel-Advisory'}
            deployedLink={'https://yoloko.github.io/Travel-Advisory/'}
            viewLink={'https://drive.google.com/file/d/1xz1efj-yd15f9efBGLsDXVAb-77Mz9A_/view'}
          />
        </Grid>
        <Grid item xs>
          <Proj
            title={"Burger App"}
            gitHubLink={'https://github.com/Kamalwc/sregurb'}
            deployedLink={'https://intense-tundra-41648.herokuapp.com/'}
            viewLink={'https://intense-tundra-41648.herokuapp.com/'}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs>
          <Proj
            title={"Html template engine"}
            gitHubLink={'https://github.com/Kamalwc/luffyGonIchi'}
            deployedLink={'https://www.youtube.com/watch?v=u_4Qy_wQ9cY&feature=youtu.be'}
            viewLink={'https://www.youtube.com/watch?v=u_4Qy_wQ9cY&feature=youtu.be'}
          />
        </Grid>
        <Grid item xs>
          <Proj
            title={"ReadMe Generator"}
            gitHubLink={'https://github.com/Kamalwc/DoomsFnode'}
            deployedLink={'https://www.youtube.com/watch?v=rvTJhsBN9us&feature=youtu.be'}
            viewLink={'https://www.youtube.com/watch?v=rvTJhsBN9us&feature=youtu.be'}
          />
        </Grid>
        <Grid item xs>
          <Proj
            title={"Employee Directory"}
            gitHubLink={'https://github.com/Kamalwc/sregurb'}
            deployedLink={'https://kamalwc.github.io/ReactDirectUser/'}
            viewLink={'https://kamalwc.github.io/ReactDirectUser/'}
          />
        </Grid>
      </Grid>
      

      <Footer />
    </div>
  )
}
