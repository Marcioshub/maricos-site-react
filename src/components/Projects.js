import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import candy1 from "../images/candy1.jpeg";
import candy2 from "../images/candy2.jpeg";
import candy3 from "../images/candy3.jpeg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    width: "100%"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    img: candy1,
    title: "Image",
    author: "author",
    featured: true
  },
  {
    img: candy2,
    title: "Image",
    author: "author",
    featured: true
  },
  {
    img: candy3,
    title: "Image",
    author: "author",
    featured: true
  }
];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className="project-container">
      <div className="project-contents">
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} style={{ height: "100%" }}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${tile.title}`}>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}
