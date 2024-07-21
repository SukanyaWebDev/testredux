import {configureStore} from "@reduxjs/toolkit"
import reducer from './employe'

const store=configureStore({reducer})

export default store