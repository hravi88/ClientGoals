import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootStore';
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
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

const AddGoals = (): JSX.Element => {

const [goal, setGoal] = useState(() => {
    return {
        title: '',
        details: '',
    }
});

const [errorMsg, setErrorMsg] = useState('');
const { title, details } = goal;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clientStatus = useSelector((state: RootState)=> state.clientData?.status);
    const clientIdFromRedux = useSelector((state: RootState)=> state.goalsData.data[0].clientId);

    const handleDispatch = (status: ApplicationStatus) => {
        if(status === ApplicationStatus.SUCCESS) {
            navigate(`/`);
        }
    }

    const dispatchSubmit = (goal:IGoalsRequestPayload) => {
        dispatch(LoadGoalsDataActions.CREATE_GOALS_DATA_REQUEST.request(goal));
        handleDispatch(clientStatus);
    };

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        switch (name) {
          case 'title':
            if (isNull(value) || isEmpty(value)) {
            setGoal((prevState) => ({
                ...prevState,
                [name]: value
              }));
            }
            break;
          case 'details':
            if (isNull(value) || isEmpty(value)) {
            setGoal((prevState) => ({
                ...prevState,
                [name]: value
              }));
            }
            break;
          default:
            setGoal((prevState) => ({
              ...prevState,
              [name]: value
            }));
        }
      };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const values = [event.target.title.value, event.target.details.value];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
          });

          if (allFieldsFilled) {
            const goal = {
                goalId: uuidv4(),
                title: event.target.title.value,
                details: event.target.details.value,
                dateCreated: new Date(),
                clientId: clientIdFromRedux
              };

              dispatchSubmit(goal);

            } else {
                errorMsg = 'Please fill all the required fields.';
              }
              setErrorMsg(errorMsg);

     }

    return (
       <>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <form autoComplete="off" noValidate className="MuiTextField-root" onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="title"
                        variant="outlined"
                        type="text"
                        placeholder="Enter Title"
                        onChange={handleInputChange}
                         /> 
                         <br /><br />
                    <TextField
                        name="details"
                        variant="outlined"
                        type="text"  
                        placeholder="Enter Details"
                        onChange={handleInputChange}
                         />
                    <br /><br />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className=""
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
        </>
    );
};

export default (withStyles(styles)(AddGoals));
