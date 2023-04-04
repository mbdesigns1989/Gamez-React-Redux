const initstate = {
    popular =[],
    newGames =[],
    upcoming =[],
    searched =[],
};

const gamesReducer = (state = initstate, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state };
        default:
            return { ...state };

    }

};

export default gamesReducer;
