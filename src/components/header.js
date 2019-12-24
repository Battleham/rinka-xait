import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          {siteTitle}
        </Typography>
      </Toolbar>
      <Tabs value={0} indicatorColor="secondary" textColor="white" centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
