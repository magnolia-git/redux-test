import * as Actions from './ActionTypes';

// CD ACCOUNT //////////////////////////////////////////////////////////////////

export const CDAccounts = (state = {
  isLoading: true,
  errMess: null,
  accounts: []
}, action) => {
  switch (action.type) {
    case Actions.ADD_CD:
    return { ...state, isLoading: false, errMess: null, accounts: action.payload }

    case Actions.CD_LOADING:
    return { ...state, isLoading: true, errMess: null, accounts: [] }

    case Actions.CD_FAILED:
    return { ...state, isLoading: false, errMess: null, accounts: [] }

    default:
    return state;
  }
}

// SAVINGS ACCOUNT /////////////////////////////////////////////////////////////

export const SavingsAccount = (state = {
  isLoading: true,
  errMess: null,
  account: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SAVINGS:
    return { ...state, isLoading: false, errMess: null, account: action.payload }

    case ActionTypes.SAVINGS_LOADING:
    return { ...state, isLoading: true, errMess: null, account: [] }

    case ActionTypes.SAVINGS_FAILED:
    return { ...state, isLoading: false, errMess: null, account: [] }

    default:
    return state;
  }
}

// CHECKING ACCOUNT ////////////////////////////////////////////////////////////

export const CheckingAccounts = (state = {
  isLoading: true,
  errMess: null,
  accounts: []
}, action) => {
  switch (action.type) {
    case Actions.ADD_CHECKING:
    return { ...state, isLoading: false, errMess: null, accounts: action.payload }

    case Actions.CHECKING_LOADING:
    return { ...state, isLoading: true, errMess: null, accounts: [] }

    case Actions.CHECKING_FAILED:
    return { ...state, isLoading: false, errMess: null, accounts: [] }

    default:
    return state;
  }
}

// DBA CHECKING ACCOUNT ////////////////////////////////////////////////////////

export const DBACheckingAccounts = (state = {
  isLoading: true,
  errMess: null,
  accounts: []
}, action) => {
  switch (action.type) {
    case Actions.ADD_BUSINESS:
    return { ...state, isLoading: false, errMess: null, accounts: action.payload }

    case Actions.BUSINESS_LOADING:
    return { ...state, isLoading: true, errMess: null, accounts: [] }

    case Actions.BUSINESS_FAILED:
    return { ...state, isLoading: false, errMess: null, accounts: [] }

    default:
    return state;
  }
}

// PERSONAL CHECKING ACCOUNT ///////////////////////////////////////////////////

export const PersonalCheckingAccount = (state = {
  isLoading: true,
  errMess: null,
  account: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PERSONAL:
    return { ...state, isLoading: false, errMess: null, account: action.payload }

    case ActionTypes.PERSONAL_LOADING:
    return { ...state, isLoading: true, errMess: null, account: [] }

    case ActionTypes.PERSONAL_FAILED:
    return { ...state, isLoading: false, errMess: null, account: [] }

    default:
    return state;
  }
}
