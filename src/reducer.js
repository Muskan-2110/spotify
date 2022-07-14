import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    spotify: null,
    top_artists: null,
    // token:'BQDo9OXZ4iVJ1L_KTOhlRTe_qbnFXza4Kf766fb5UmZkGimHPYV84I5L3AH8XQsjLW_klZQe9KfkF9d9njrB0IS-QfyQaCicHttk2l3EF4xEUDvojkB6E3Ez3EpgzVQdfIz99mwWfxyD3u_UUue-Q8Zjd61iFO34Ca8qKIeliY7LbTRgdvfdhk7670ilVIjB3ftaMxL82ConkQnhiA',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}
export default reducer;