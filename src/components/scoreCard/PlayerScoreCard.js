import React, {useState, useEffect} from 'react';
import MUIDataTable from 'mui-datatables';
import {Box, Grid} from '@material-ui/core';
import AppGlobalObj from '../../utils/AppGlobal';
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';


const PlayerScoreCard = (props) => {
  const apiRoute = AppGlobalObj.scoreAPIRoute;

  const [playerData, setPlayerData] = useState(null);

  const {name} = props;

  const getPlayer = () => {
    const REQ_OBJ = {
      method: 'GET',
      url: `${apiRoute}/user/${name}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios(REQ_OBJ)
        .then((res) => setPlayerData(res.data))
        .catch((err) => {
          console.log(err);
          setPlayerData([]);
        });
  };

  useEffect(getPlayer, [apiRoute, name]);

  const muiTableTheme = () => createTheme({
    overrides: {

      MuiTable: {
        root: {
          border: '2px solid #777777',
        },
      },
      MuiTableCell: {
        head: {
          backgroundColor: '#3F4142 !important',
          padding: '5px',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: '#000000',
          padding: '5px',
          color: '#F78B11',
          borderBlockColor: '#777777 !important',
        },
      },
      MuiToolbar: {
        root: {
          minHeight: '50px !important',
          backgroundColor: '#000000 !important',
          color: '#F78B11',
        },
      },
      MuiInputBase: {
        input: {
          color: '#F78B11',
        },
      },

    },
  });

  const playerTableColumns = [
    {
      name: 'category',
      label: 'Skill',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'rank',
      label: 'Rank',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'level',
      label: 'Level',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'score',
      label: 'XP',
      options: {
        filter: true,
        sort: true,
      },
    },

  ];

  return (
    playerData &&
    (
      <div>
        <Box sx={{m: 4}} minHeight={'100%'}>
          <Grid container rowSpacing={10}>

            <Grid item xs={2}>
            </Grid>

            <Grid item xs={8} style={{border: '2px solid #777777 !important'}}>
              <MuiThemeProvider theme={muiTableTheme}>
                <MUIDataTable
                  title={name.toUpperCase()}
                  data={playerData}
                  columns={playerTableColumns}

                  options={{
                    selectableRows: false, // will turn off checkboxes in rows
                    responsive: 'scroll',
                    filter: false,
                    download: false,
                    viewColumns: false,
                    pagination: false,

                  }}
                />
              </MuiThemeProvider>
            </Grid>

          </Grid>
        </Box>
      </div>
    )
  );
};

PlayerScoreCard.propTypes = {
  name: PropTypes.string,
};

export default PlayerScoreCard;
