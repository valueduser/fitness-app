const initialState = {};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "activity/updateActivity":
      return state.map((activity) => {
        if (activity.id !== action.payload.id) return activity;
        return {
          id: action.payload.id,
          name: action.payload.name,
          list: action.payload.list,
        };
      });

    default:
      return state;
  }
};

export default activityReducer;
