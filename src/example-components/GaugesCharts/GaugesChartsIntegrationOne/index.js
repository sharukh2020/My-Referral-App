import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Box, Card } from '@material-ui/core';

import Circle from 'react-circle';
import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart34Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      },
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '50%'
      }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent']
    },
    colors: ['#f83245', '#1bc943'],
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    labels: [
      '1 Sep',
      '2 Sep',
      '3 Sep',
      '4 Sep',
      '5 Sep',
      '6 Sep',
      '7 Sep',
      '8 Sep',
      '9 Sep',
      '10 Sep',
      '11 Sep'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart34Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const chart55Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    labels: [
      '01 Jan 2001',
      '02 Jan 2001',
      '03 Jan 2001',
      '04 Jan 2001',
      '05 Jan 2001',
      '06 Jan 2001',
      '07 Jan 2001',
      '08 Jan 2001',
      '09 Jan 2001',
      '10 Jan 2001',
      '11 Jan 2001',
      '12 Jan 2001'
    ],
    stroke: {
      curve: 'smooth',
      width: [0, 4]
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    colors: ['#0abcce', '#060918'],
    legend: {
      show: false
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      min: 0
    }
  };
  const chart55Data = [
    {
      name: 'Income',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Expenses',
      type: 'line',
      data: [231, 442, 335, 227, 433, 222, 117, 316, 242, 252, 162, 176]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box p-4 text-center mb-4">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <h6 className="text-uppercase font-weight-bold mb-1 text-black">
              Visitors locations
            </h6>

            <div className="py-3">
              <Chart
                options={chart34Options}
                series={chart34Data}
                type="bar"
                height={322}
              />
            </div>

            <Grid container spacing={4}>
              <Grid item md={6} className="d-flex justify-content-center">
                <div className="divider-v divider-v-lg" />
                <div>
                  <div className="d-flex align-items-center justify-content-center text-uppercase text-black-50 pb-3">
                    <span className="badge-circle mr-2 badge badge-danger">
                      total
                    </span>
                    <span>Gross revenue</span>
                  </div>
                  <Circle
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="3s" //String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size={160} // Number: Defines the size of the circle.
                    lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                    progress={34.8} // Number: Update to change the progress and percentage.
                    progressColor="#1bc943" // String: Color of "progress" portion of circle.
                    bgColor="#e8e9ef" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '80px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
              <Grid item md={6} className="d-flex justify-content-center">
                <div>
                  <div className="d-flex align-items-center justify-content-center text-uppercase text-black-50 pb-3">
                    <span className="badge-circle mr-2 badge badge-success">
                      available
                    </span>
                    <span>Net Revenue</span>
                  </div>
                  <Circle
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="3s" //String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size={160} // Number: Defines the size of the circle.
                    lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                    progress={65.3} // Number: Update to change the progress and percentage.
                    progressColor="#f83245" // String: Color of "progress" portion of circle.
                    bgColor="#e8e9ef" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '80px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box p-4 text-center mb-4">
            <h6 className="text-uppercase font-weight-bold mb-1 text-black">
              Total Revenue
            </h6>
            <div className="mb-2">
              <Chart
                options={chart55Options}
                series={chart55Data}
                type="line"
                height={390}
              />
            </div>

            <Grid container spacing={4} className=" mt-4">
              <Grid item md={6} className="d-flex justify-content-center">
                <div className="divider-v divider-v-lg" />
                <div>
                  <Circle
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="3s" //String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size={150} // Number: Defines the size of the circle.
                    lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                    progress={34.29} // Number: Update to change the progress and percentage.
                    progressColor="#0abcce" // String: Color of "progress" portion of circle.
                    bgColor="#e8e8f0" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '80px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
              <Grid item md={6} className="d-flex justify-content-center">
                <div>
                  <Circle
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="3s" //String: Length of animation
                    responsive={false} // Boolean: Make SVG adapt to parent size
                    size={150} // Number: Defines the size of the circle.
                    lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                    progress={76.23} // Number: Update to change the progress and percentage.
                    progressColor="#060918" // String: Color of "progress" portion of circle.
                    bgColor="#e8e8f0" // String: Color of "empty" portion of circle.
                    textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true}
                    textStyle={{
                      fontSize: '80px'
                    }} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
