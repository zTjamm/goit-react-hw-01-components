import PropTypes from "prop-types";
import {Table,TableHead, TableHeadList, TableHeadItem, TableBody, TableBodyList, TableBodyItem} from './Transactions.styled'
export default function TransHistory({ transactions }) {
  return (
    <Table >
      <TableHead>
        <TableHeadList>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableHeadList>
      </TableHead>

      <TableBody>
        {transactions.map(({id,type,amount,currency}) => {
          return (
            <TableBodyList key={id}>
              <TableBodyItem>{type}</TableBodyItem>
              <TableBodyItem>{amount}</TableBodyItem>
              <TableBodyItem>{currency}</TableBodyItem>
            </TableBodyList>
          );
        })}
      </TableBody>
    </Table>
  );
}
TransHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
