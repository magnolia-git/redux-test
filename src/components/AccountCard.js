import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function getCummulativeBalance(accounts){

    var cummulativeBalance;
    cummulativeBalance = accounts.reduce(function(tot, arr) {
        return tot + arr.balance;
    }, 0);
    return cummulativeBalance;
}

export const UserCard = ({ user }) => {
    return(


        <Card>

            <CardTitle>{user.firstName} {user.lastName}'s Profile Info</CardTitle>

        </Card>
    )
}

export const SavingsAccountCard = ({ account }) => {
    if(account != null)
    return(
        <Card>

            <CardTitle>Savings Account</CardTitle>
            <CardBody>Balance: {account.balance}</CardBody>

        </Card>
    )
    else{
        return(
            <Card>

                <CardTitle>Create Savings Account</CardTitle>

            </Card>
        )
    }
}

export const CheckingAccountsCard = (accounts) => {
    if(accounts.accounts.length != 0)
    return(
        <Card>

            <CardTitle>Checking Accounts</CardTitle>
            <CardBody>Cummulative Balance: {getCummulativeBalance(accounts.accounts)}</CardBody>

        </Card>
    )
    else{
        return(
            <Card>

                <CardTitle>Create Checking Account</CardTitle>

            </Card>
        )
    }
}
