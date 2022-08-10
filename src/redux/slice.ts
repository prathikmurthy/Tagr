import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ImageState {
    id: number,
    url: string,
}

// Define the initial state using that type
const initialState: ImageState = {
    id: 0,
    url: '',
}

export const ImageSlice = createSlice({
  name: 'image',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<ImageState>) => {
        state.id = action.payload.id
        state.url = action.payload.url
    },
    // increment: (state) => {
    //   state.value += 1  
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { setImage } = ImageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectImage = (state: RootState) => state.image

export default ImageSlice.reducer