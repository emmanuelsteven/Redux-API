import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    users:[],
    isLoading: true,
    error: undefined,
}
export const getUser = createAsyncThunk ('users/getUsers', async () => {
    try{
        const response = await fetch ('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const names = data.results.map(user => user.name);
        return names;
    } catch (error) {
        return error.message;
    }
});

const  userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      builder.addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
    }
  })
  
  
  export const userReducer = userSlice.reducer;
  
  export default userSlice; 