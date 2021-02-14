import * as Actions from './Actions';

export const User = (state = {
    isLoading: true,
    errMess: null,
    id: null,
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    rollOverIRA: null,
    rothIRA: null,
    ira: null,
    dbaCheckings: [],
    checkingAccounts: null,
    savingsAccounts: null,
    cDAccounts: [],
    accountHoldersContactDetails: null,
    user: null,
    allAccounts: [],
    ssn: '',
    combinedBalance: null,
    numberOfCDAccounts: null,
    checkingBalance: null,
    savingsBalance: null,
    cdbalance: null
}, action) => {
    switch (action.type) {
        case Actions.ADD_USER:
            return { ...state, isLoading: false, errMess: null, firstName: action.payload.firstName,
                middleName: action.payload.middleName, lastName: action.payload.lastName, birthDate: action.payload.birthDate, rollOverIRA: action.payload.rollOverIRA,
                rothIRA: action.payload.rothIRA, ira: action.payload.ira, dbaCheckings: action.payload.dbaCheckings, checkingAccounts: action.payload.checkingAccounts,
                savingsAccounts: action.payload.savingsAccounts, cDAccounts: action.payload.cDAccounts, accountHoldersContactDetails: action.payload.accountHoldersContactDetails,
                user: action.payload.user, allAccounts: action.payload.allAccounts, ssn: action.payload.ssn, combinedBalance: action.payload.combinedBalance,
                numberOfCDAccounts: action.payload.numberOfCDAccounts, checkingBalance: action.payload.checkingBalance, savingsBalance: action.payload.savingsBalance,
                cdbalance: action.payload.cdbalance}

        case Actions.USER_LOADING:
            return { ...state, isLoading: true, errMess: null, accounts: [], firstName: '',
                middleName: '', lastName: '' }

        case Actions.USER_FAILED:
            return { ...state, isLoading: false, errMess: null, accounts: [], firstName: '',
                middleName: '', lastName: '' }


        default:
            return state;
    }
}
