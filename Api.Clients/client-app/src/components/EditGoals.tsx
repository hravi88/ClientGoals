import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootStore';
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import { LoadGoalsDataActions } from '../store/actions';
import { IGoalsRequestPayload } from '../models/goalsData.model';
import { ApplicationStatus } from '../constants';
import { isNull, isEmpty } from '../utils/valueUtils';


const styles = (theme: { spacing: (arg0: number) => any; }) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
});


const EditGoals = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goalsState = useSelector((state: RootState)=> state.goalsData);
    const clientsState = useSelector((state: RootState)=> state.clientData);
    const id = goalsState.data.find(x => x.clientId === clientsState.data[0].clientId)?.clientId;
    const [goalId, setGoalId] = useState(id);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    return (
        <div>
            <form autoComplete="off" noValidate className="MuiTextField-root">
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="title"
                        variant="outlined"
                        type="text"
                        value={title}
                        placeholder="Enter Title"
                         /> 
                         <br /><br />
                    <TextField
                        name="details"
                        variant="outlined"
                        type="text"
                        value={details}
                        placeholder="Enter Details"
                         />
                    <br /><br />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className=""
                            onClick={() => navigate(`/edit/${goalId}`)}
                        >
                            Submit
                        </Button>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <Button
                            variant="contained"
                            className='col-left'
                            onClick={() => navigate("/")}
                        >
                            Back
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
        </div>
    )
}
export default (withStyles(styles)(EditGoals));
