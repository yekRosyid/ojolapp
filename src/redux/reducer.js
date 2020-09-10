import {combineReducers} from 'redux';

const initialState = {
  name: 'Abdur Rosyid',
};

const initialRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  tittle: 'Register page',
  desc: 'Ini adalah deskripsi register page',
};

const RegisterReducer = (state = initialRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      tittle: 'Register Ganti tittle',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialLogin = {
  form: {
    email: '',
    password: '',
  },
  info: 'Tolong masukkan password anda',
  isLogin: true,
};

const LoginReducer = (state = initialLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
