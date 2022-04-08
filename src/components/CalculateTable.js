import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import numberWithSpace from '../utils/numberWithSpace';
import BpRadio from './BpRadio';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  conteiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: '100px',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
    },

    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
  },
  title: {
    alignSelf: 'end',
    margin: '25px',
  },
  table: {
    width: '100%',
    minWidth: 200,
    borderCollapse: 'collapse',
    padding: '0 20px',
    marginTop: (param) => (param.houseNumber === 0 ? '0' : '-1px'),
  },
  tableRow: {
    height: '50px',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    '@media (min-width:1920px)': {
      height: '3.5vw',
    },
  },
  tableCell: {
    width: '25%',
    // '& p':{
    //   color:"#828282"
    // },
  },
  tableCellFirst: {
    paddingLeft: '40px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 10%',
    },
  },
  tableCellLast: {
    paddingRight: '40px',
    fontSize: '14px',
    '@media (min-width:1920px)': {
      fontSize: '28px',
    },
    '@media (min-width:1921px)': {
      fontSize: '0.97vw',
    },
  },
  lastRow: {
    display: 'flex',
    width: '100%',
    gap: '60px',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
    },
  },
  downloadArea: {
    display: 'flex',
    width: '28vw',
    flexShrink: '0',
    [theme.breakpoints.down('md')]: {
      width: '50vw',
    },
  },

  tableResultContent: {
    display: 'flex',
    width: '100%',
    alignItems: 'baseline',
    '& p': {
      marginRight: '48px',
      marginLeft: 'auto',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginRight: '10%',
      '& span': {
        fontSize: '30px',
        lineHeight: '1.4',
      },
    },
  },
  tableResult: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '40px',
  },
  textPrice: {
    display: 'flex',
    alignItems: 'center',
  },
  innerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      '&:last-of-type': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap:'0',
        marginTop:'16px',
      },
    },
  },
  secondRadio: {
    marginRight: '0',
    // width: '100px',
  },
}));

const CalculateTable = ({ houseOptions, houseNumber, getOptions }) => {
  const breakpoints = useBreakpoint();
  const options = {};
  houseOptions.forEach((item) => {
    options[item.name] = {
      name: item.variants[0].name,
      price: item.variants[0].price,
    };
  });

  const [currentOption, setCheckboxesCheck] = useState(options);
  const [price, setPrice] = useState(
    Object.keys(currentOption).length === 0
      ? '0'
      : Object.values(currentOption).reduce(
          (accumulator, currentValue) => +accumulator + +currentValue.price,
          0
        )
  );
  const handleChangeCheckbox = (event) => {
    console.log(event.target.name);
    setCheckboxesCheck({
      ...currentOption,
      [event.target.name]: {
        name: event.target.name,
        price: event.target.value,
      },
    });
  };
  const param = { breakpoints, houseNumber };
  const classes = useStyles(param);

  useEffect(() => {
    let sum =
      Object.keys(currentOption).length === 0
        ? 0
        : Object.values(currentOption).reduce(
            (accumulator, currentValue) => +accumulator + +currentValue.price,
            0
          );
    setPrice(sum);
  }, [currentOption]);

  useEffect(() => {
    getOptions(currentOption);
  }, [currentOption]);

  return (
    <div className={classes.conteiner}>
      <table className={classes.table}>
        <tbody>
          {!breakpoints.md
            ? houseOptions.map((item, index) => (
                <tr className={classes.tableRow} key={index}>
                  <td
                    className={`${classes.tableCell} ${classes.tableCellFirst}`}
                  >
                    <Typography variant='h6' component='p'>
                      {item.name}
                    </Typography>
                  </td>

                  <td className={classes.tableCell} align='left'>
                    <FormControlLabel
                      name={item.name}
                      checked={
                        currentOption[item.name].price ===
                        item.variants[0].price
                          ? true
                          : false
                      }
                      onChange={handleChangeCheckbox}
                      value={+item.variants[0].price}
                      control={<Checkbox color='primary' />}
                      label={
                        <Typography
                          style={
                            currentOption[item.name].price ===
                            item.variants[0].price
                              ? null
                              : { color: '#828282' }
                          }
                          variant='body1'
                        >
                          {item.variants[0].name}
                        </Typography>
                      }
                      labelPlacement='end'
                    />
                  </td>

                  <td className={classes.tableCell} align='left'>
                    <FormControlLabel
                      name={item.name}
                      checked={
                        currentOption[item.name].price ===
                        item.variants[1].price
                          ? true
                          : false
                      }
                      onChange={handleChangeCheckbox}
                      value={+item.variants[1].price}
                      control={<Checkbox color='primary' />}
                      label={
                        <Typography
                          style={
                            currentOption[item.name].price ===
                            item.variants[1].price
                              ? null
                              : { color: '#828282' }
                          }
                          variant='body1'
                        >
                          {item.variants[1].name}
                        </Typography>
                      }
                      labelPlacement='end'
                    />
                  </td>

                  <td
                    className={`${classes.tableCell} ${classes.tableCellLast}`}
                    align='right'
                  >
                    <Typography variant='h6' component='p'>
                      + ${numberWithSpace(currentOption[item.name].price)}
                    </Typography>
                  </td>
                </tr>
              ))
            : houseOptions.map((item, index) => (
                <tr className={classes.tableRow} key={index}>
                  <td
                    className={`${classes.tableCell} ${classes.tableCellFirst}`}
                  >
                    <Box className={classes.innerRow}>
                      <Typography variant='h6' component='p'>
                        {item.name}
                      </Typography>
                      <Box
                        style={{ paddingLeft: `20px` }}
                        className={classes.secondRadio}
                      >
                        <Typography variant='h6' component='p'>
                          + ${numberWithSpace(currentOption[item.name].price)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.innerRow}>
                      <FormControlLabel
                        name={item.name}
                        checked={
                          currentOption[item.name].price ===
                          item.variants[0].price
                            ? true
                            : false
                        }
                        onChange={handleChangeCheckbox}
                        value={+item.variants[0].price}
                        control={<Checkbox color='primary' />}
                        label={
                          <Typography
                            style={
                              currentOption[item.name].price ===
                              item.variants[0].price
                                ? { color: '#4f4f4f' }
                                : { color: '#828282' }
                            }
                            variant='body1'
                          >
                            {item.variants[0].name}
                          </Typography>
                        }
                        labelPlacement='end'
                      />

                      <FormControlLabel
                        className={classes.secondRadio}
                        name={item.name}
                        checked={
                          currentOption[item.name].price ===
                          item.variants[1].price
                            ? true
                            : false
                        }
                        onChange={handleChangeCheckbox}
                        value={+item.variants[1].price}
                        control={<Checkbox color='primary' />}
                        label={
                          <Typography
                            style={
                              currentOption[item.name].price ===
                              item.variants[1].price
                                ? { color: '#4f4f4f' }
                                : { color: '#828282' }
                            }
                            variant='body1'
                          >
                            {item.variants[1].name}
                          </Typography>
                        }
                        labelPlacement='end'
                      />
                    </Box>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <Box className={classes.lastRow}>
        {breakpoints.md ? null : <Box className={classes.downloadArea}></Box>}

        <Box className={classes.tableResult}>
          <Box className={classes.tableResultContent}>
            <Typography
              variant='h6'
              component='p'
              className={classes.textPrice}
            >
              ЦЕНА
            </Typography>
            <Typography variant='caption' className={classes.textPriceValue}>
              ${numberWithSpace(price)}
            </Typography>
          </Box>
        </Box>
        {/* <RegularButton variant="outlined">Скачать смету</RegularButton> */}
      </Box>
    </div>
  );
};

export default CalculateTable;
