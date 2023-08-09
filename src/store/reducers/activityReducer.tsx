import { Activity } from "../../types/Activity";

interface Action {
  type: string;
  payload: Activity;
}

const initialState: Activity[] = [];

const activityReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return action.payload;
    case 'UPDATE_ACTIVITY':
      return state.map((activity) =>
        activity.id !== action.payload.id ? activity : { ...activity, ...action.payload }
      );

    default:
      return state;
  }
};

export default activityReducer;
