import {combineReducers} from 'redux';

const initialState = {
  name: 'Abdur Rosyid',
};

const initialRegister = {
  tittle: 'Register page',
  desc: 'Ini adalah deskripsi register page',
};

const RegisterReducer = (state = initialRegister, action) => {
  return state;
};

const initialLogin = {
  info: 'Tolong masukkan password anda',
  isLogin: true,
};

const LoginReducer = (state = initialLogin, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
