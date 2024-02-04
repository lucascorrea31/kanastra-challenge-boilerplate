import { humanDate } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from ".";
import { Statement } from "@/types";

type StatementListProps = {
  statements: Statement[];
};

function StatementList({ statements }: StatementListProps) {
  return (
    <>
      <h4>Lista de Transações</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Número da Conta</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Data do débito</TableHead>
            <TableHead>ID do débito</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {statements.map((statement: Statement) => (
            <TableRow key={statement.governmentId}>
              <TableCell>{statement.name}</TableCell>
              <TableCell>{statement.governmentId}</TableCell>
              <TableCell>{statement.email}</TableCell>
              <TableCell>R$ {statement.debtAmount.toFixed(2)}</TableCell>
              <TableCell>{humanDate(statement.debtDueDate)}</TableCell>
              <TableCell>{statement.debtId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export { StatementList };
