import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootStore';
import { Grid, Paper, TableContainer, Table, 
    TableHead, TableRow, TableCell, TableBody, 
    withStyles, Button } from "@material-ui/core";
import { formatDate } from '../utils/contentUtils';
import { LoadGoalsDataActions } from '../store/actions';

const styles = (theme: { spacing: (arg0: number) => any; }) => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

export const ClientDetails = (): JSX.Element => {  
   const clientsData = useSelector((state: RootState) => state.clientData.data);
   const navigate = useNavigate();
   const dispatch = useDispatch();

  const handleClick = (id:number) => {
        if(clientsData) {
            dispatch(LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.request(id));
            navigate('/goals/' + id);
        }
   }

    return (
        <Paper elevation={3}>
              <Grid container>
                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell><b>FirstName</b></TableCell>
                                    <TableCell><b>LastName</b></TableCell>
                                    <TableCell><b>Date Created</b></TableCell>
                                    <TableCell></TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                      clientsData.map((data, clientId) => {
                                        return (<TableRow key={clientId} hover>
                                            <TableCell>{data.firstName}</TableCell>
                                            <TableCell>{data.lastName}</TableCell>
                                            <TableCell>{formatDate(data.dateCreated)}</TableCell>
                                            <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => handleClick(data.clientId)}>
                                                View Goals
                                            </Button>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                            </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default (withStyles(styles)(ClientDetails));
