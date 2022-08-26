export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // set Ur token after finishing...
    token:null,  // after getting playlists uncomment

};

const reducer = (state,action) => {
    //console.log(action);
    //Action = type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        default:
            return state;
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
    }
}
export default reducer;