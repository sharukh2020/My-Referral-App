import React, { Fragment } from 'react';
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Button,
  FormControl
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import svgImage9 from '../../../assets/images/illustrations/login.svg';

import { NavLink as RouterLink } from 'react-router-dom';

const LivePreviewExample = (props) => {
  const [checked1, setChecked1] = React.useState(true);
  const [locale,setLocale]=React.useState(props.locale)

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };
  return (
    <Fragment>
      <div className="app-wrapper min-vh-100">
        <div className="app-main flex-column">
          {/* <Button
            size="large"
            variant="outlined"
            color="primary"
            component={RouterLink}
            className="btn-go-back"
            to="/DashboardDefault">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </span>
            <span className="btn-wrapper--label">{props.SignInPageData[0]}</span>
          </Button> */}
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-5">
                  <Container maxWidth="lg">
                    <Grid container spacing={5}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        className="d-none d-xl-flex align-items-center">
                        <img
                          alt="..."
                          className="w-100 mx-auto d-block img-fluid"
                          src={svgImage9}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={7}
                        className="d-flex flex-column align-items-center">
                        <span className="w-100 text-left text-md-center pb-4">
                          <h1 className="display-3 text-xl-left text-center mb-3 font-weight-bold">
                          {props.SignInPageData[1]}
                          </h1>
                          <p className="font-size-lg text-xl-left text-center mb-0 text-black-50">
                          {props.SignInPageData[2]}
                          </p>
                        </span>
                        <Card className="m-0 w-100 p-0 border-0">
                          <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0">
                            <div className="text-muted text-center mb-3">
                              <span>{props.SignInPageData[3]}</span>
                            </div>
                            <div className="text-center">
                              <Button
                                variant="outlined"
                                className="mr-2 text-facebook">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </span>
                                <span className="btn-wrapper--label">
                                  Facebook
                                </span>
                              </Button>
                              <Button
                                variant="outlined"
                                className="ml-2 text-twitter">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </span>
                                <span className="btn-wrapper--label">
                                  Twitter
                                </span>
                              </Button>
                            </div>
                          </div>
                          <CardContent className="p-3">
                            <div className="text-center text-black-50 mb-3">
                              <span>{props.SignInPageData[4]}</span>
                            </div>
                            <form className="px-5">
                              <div className="mb-3">
                                <FormControl className="w-100">
                                  <InputLabel htmlFor="input-with-icon-adornment">
                                  {props.SignInPageData[5]}
                                  </InputLabel>
                                  <Input
                                    fullWidth
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <MailOutlineTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                              <div className="mb-3">
                                <FormControl className="w-100">
                                  <InputLabel htmlFor="standard-adornment-password">
                                  {props.SignInPageData[6]}
                                  </InputLabel>
                                  <Input
                                    id="standard-adornment-password"
                                    fullWidth
                                    type="password"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <LockTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                              <div className="w-100">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={checked1}
                                      onChange={handleChange1}
                                      value="checked1"
                                      color="primary"
                                    />
                                  }
                                  label={props.SignInPageData[7]}
                                />
                              </div>
                              <div className="text-center">
                                <span style={{marginRight:"10px"}}>{props.SignInPageData[9]}</span>
                                <Link to="/RegisterPage">
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    className="my-2">

                                      
                                    {props.SignInPageData[10]}
                                  </Button>
                                </Link>
                              </div>
                              <div className="text-center">
                                <Button
                                  color="primary"
                                  variant="contained"
                                  size="large"
                                  className="my-2">
                                  {props.SignInPageData[8]}
                                </Button>
                              </div>
                            </form>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LivePreviewExample;
