import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootStore';
import { Grid, Paper, TableContainer, Table, 
    TableHead, TableRow, TableCell, TableBody, 
    withStyles, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { formatDate } from '../utils/contentUtils';
import { ApplicationStatus } from '../constants';

const styles = (theme: { spacing: (arg0: number) => any; }) => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
})

export const Goals = (): JSX.Element => {
    const navigate = useNavigate();
    const handleDispatch = (status: ApplicationStatus) => {
        if(status !== ApplicationStatus.SUCCESS) {
            navigate('/error');
        }
    }
    const clientStatus = useSelector((state: RootState)=> state.clientData?.status);
    useEffect(() => {
        handleDispatch(clientStatus);
      }, []);

    const handleAddButton = () => {
        navigate('/add');
    };

   const goalsData = useSelector((state: RootState) => state.goalsData.data);
   return (
        <Paper elevation={3}>
              <Grid container>
                <Grid item xs={9}>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell><b>Tittle</b></TableCell>
                                    <TableCell><b>Details</b></TableCell>
                                    <TableCell><b>Date Created</b></TableCell>
                                    <TableCell></TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                      goalsData.map((data, goalId) => {
                                        return (<TableRow key={goalId} hover>
                                            <TableCell>{data.title}</TableCell>
                                            <TableCell>{data.details}</TableCell>
                                            <TableCell>{formatDate(data.dateCreated)}</TableCell>
                                            <TableCell>
                                            <Button><EditIcon color="primary"
                                                 onClick={() => navigate(`/edit/${goalId}`)} />
                                            </Button>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody><br/><br/>
                            <div className="col-add" id="add">
                            <Button variant="contained" color="primary" onClick={handleAddButton}>
                                ADD GOALS
                            </Button>
                            </div>
                            </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default (withStyles(styles)(Goals));
