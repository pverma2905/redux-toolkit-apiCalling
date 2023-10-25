import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const BASE_URL = "https://api.github.com/users"
// action
export const getAllData = createAsyncThunk(
    'gitUsers',
    async (args, { rejectWithValue }) => {
        const response = await fetch(BASE_URL);
        try {
            const result = response.json();
            console.log("ressss", result)
            return result;
        } catch (error) {
            return rejectWithValue("Oops Found An Error.")
        }

    }
)

export const gitUserSlice = createSlice({
    name: 'gitUser',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true
        },
        [getAllData.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [getAllData.rejected]: (state, action) => {
            console.log("cccc", state, action)
            state.loading = false
            state.error = action.error.message
        },
    },
})

export default gitUserSlice.reducer