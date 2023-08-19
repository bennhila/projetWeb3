import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getProduit = createAsyncThunk('produit/getProduit', async (data, thunkApi) => {
  try {
    const response = await axios.get('http://localhost:8000/produit/getProduit');
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});
export const addProduit = createAsyncThunk('produit/createProduit', async (data, thunkApi) => {
  try {
    const response = await axios.post('http://localhost:8000/produit/createProduit',data);
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});
export const upDateProduit = createAsyncThunk('produit/updateProduit', async (data, thunkApi) => {
  
  try {
    const response = await axios.put('http://localhost:8000/produit/updateProduit',data);

    return response.data
    
  } catch (error) {
    
    return thunkApi.rejectWithValue(error.response.data);
    
  }
});
export const deleteproduit = createAsyncThunk('produit/deleteProduit', async (data, thunkApi) => {
  
  try {
    const response = await axios.delete('http://localhost:8000/produit/deleteProduit',data);

    return response.data
    
  } catch (error) {
    
    return thunkApi.rejectWithValue(error.response.data);
    
  }
  

  
});
export const initialState = {
 
    loading: false,
    success: false,
    error: null,
    message: '',
    data:[],
    updated:false
  
};
export const produitSlice = createSlice({
  name: 'produit',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = '';
      state.updated=false
    },
    searchProduct: (state,action) => {
       state.copyData=state.data.filter(e=>e.nameProduit.toUpperCase().includes(action.payload.nameProduit.toUpperCase()))
   },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduit.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true; 
      state.error = null;
      state.message = '';
      state.data = action.payload; 
      state.copyData=state.data

      })
    .addCase(addProduit.pending,(state)=>{
      state.loading=true;
      state.updated=true
  }).addCase(addProduit.fulfilled,(state,action)=>{
      state.loading=false;
      state.success=true;
      state=action.payload;
      state.message="produit registered successfully"
  }
  ).addCase(addProduit.rejected,(state,action)=>{
      state.error=action.payload;
      state.loading=false;
      state.success=false;
      state.message="produit registration failed"
  })
  .addCase(upDateProduit.pending,(state)=>{
    
    state.loading=true;
    
}).addCase(upDateProduit.fulfilled,(state,action)=>{
    state.loading=false;
    state.success=true;
    state.updated=true

    state=action.payload;
    
    // state.message="produit registered successfully"
    
}
).addCase(upDateProduit.rejected,(state,action)=>{
    state.error=action.payload;
    state.loading=false;
    state.success=false;
    state.message="produit update failed"
  
})
.addCase(deleteproduit.fulfilled,(state,action)=>{
  state.loading=false;
  state.success=true;
  state.updated=true

 /*  state=action.payload;
  
  state.message="produit registered successfully" */
})
.addCase(deleteproduit.rejected,(state,action)=>{
  state.error=action.payload;
  state.loading=false;
  state.success=false;
  state.message="produit delete failed"

})
  },
});

export const { reset, searchProduct} = produitSlice.actions;
export default produitSlice.reducer;



