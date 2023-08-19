import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
const admin=JSON.parse(localStorage.getItem('admin'));
const initialState={
    admin:admin?admin:null,
    loading:false,
    success:false,
    error:null,
    message:""

}
export const login=createAsyncThunk('authAdmin/login',async(admin,ThunkAPI)=>{
    try {
        console.log(admin)
        const response=await axios.post('http://localhost:8000/admin/login',admin)
        if(response.data){
            localStorage.setItem('admin',JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data)
    }
})
export const logout=createAsyncThunk('authAdmin/logout',async(admin,ThunkAPI)=>{
    localStorage.removeItem('admin')
    return null
})
export const authSliceAdmin=createSlice({
    name:'authAdmin',
    initialState,
    reducers:{
        reset:(state)=>{
            state.loading=false;
            state.success=false;
            state.error=null;
            state.message="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.loading=true;

        }).addCase(login.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.user=action.payload;
            state.message="admin logged in successfully"

        }).addCase(login.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="admin login failed"
        })
        .addCase(logout.pending,(state)=>{
            state.loading=true;
        })
        .addCase(logout.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.user=null;
            state.message="admin logged out successfully"
        }).addCase(logout.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
            state.success=false;
            state.message="admin logout failed"
        })
             }
})
export const {reset}=authSliceAdmin.actions;
export default authSliceAdmin.reducer;