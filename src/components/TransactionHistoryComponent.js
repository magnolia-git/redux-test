import React from 'react';
import { Media, Row, Table, Button } from 'reactstrap';
import { format } from 'date-fns';

function RenderTransaction({transaction}) {
  let date = new Date(transaction.transactionDate);
  let formattedDate = format(date, "MMMM do, yyyy h:mma");
  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{transaction.type}</td>
      <td>${transaction.amount}</td>
    </tr>
  );
}

function TransactionHistoryComponent(props) {

  if (props.transactionAcctType == 'checking') {
    if (props.account.checkingtransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
       const summary = props.account.checkingtransactions.map((transaction) => {

         return (
           <RenderTransaction key={transaction.id} transaction={transaction} />
         )

       });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else if (props.transactionAcctType == 'dbaChecking') {
    if (props.account.dbatransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
      const summary = props.account.dbatransactions.map((transaction) => {
        return (
          <RenderTransaction key={transaction.id} transaction={transaction} />
        )
      });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else if (props.transactionAcctType == 'savings') {
    if (props.account.savingstransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
      const summary = props.account.savingstransactions.map((transaction) => {
        return (
          <RenderTransaction key={transaction.id} transaction={transaction} />
        )
      });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else if (props.transactionAcctType == 'cdAccount') {
    if (props.account.cdAccoountTransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
      const summary = props.account.cdAccoountTransactions.map((transaction) => {
        return (
          <RenderTransaction key={transaction.id} transaction={transaction} />
        )
      });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else if (props.transactionAcctType == 'ira') {
    if (props.account.iraTransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
      const summary = props.account.iraTransactions.map((transaction) => {
        return (
          <RenderTransaction key={transaction.id} transaction={transaction} />
        )
      });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else if (props.transactionAcctType == 'rolloverIRA') {
    if (props.account.rolloverIRATransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
      const summary = props.account.rolloverIRATransactions.map((transaction) => {
        return (
          <RenderTransaction key={transaction.id} transaction={transaction} />
        )
      });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else if (props.transactionAcctType == 'rothIRA') {
    if (props.account.rothIRATransactions.length == 0) return (
      <div>
        <p>No transactions under this account.</p>
      </div>
    );
    else {
      const summary = props.account.rothIRATransactions.map((transaction) => {
        return (
          <RenderTransaction key={transaction.id} transaction={transaction} />
        )
      });
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
              </tr>
            </thead>
            <tbody list>
              {summary}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  else {
    return (
      <div>
      <p>wow, you shouldn't be able to see this. how'd you do that?</p>
      </div>
    )
  }
}

export default TransactionHistoryComponent;
