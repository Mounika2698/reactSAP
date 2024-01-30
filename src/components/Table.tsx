import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Table = (props: any) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Model</TableCell>
          <TableCell align="right">Color</TableCell>
          <TableCell align="right">Year of Manufacture</TableCell>
          <TableCell align="right">Insurance Valid upto</TableCell>
          <TableCell align="right">Kms</TableCell>
          <TableCell align="right">Location</TableCell>
          <TableCell align="right">No Of Owners</TableCell>
          <TableCell align="right">Transmission</TableCell>
          <TableCell align="right">External Fitments</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {props.data && props.data.map((data: any, index: number) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
              {props.modelName}
            </TableCell>
            <TableCell align="right">{data.color}</TableCell>
            <TableCell align="right">{data.year}</TableCell>
            <TableCell align="right">{data.kms}</TableCell>
            <TableCell align="right">{data.location}</TableCell>
            <TableCell align="right">{data.transmission}</TableCell>
            <TableCell align="right">{data.owners}</TableCell>
            <TableCell align="right">{data.fitments}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}
export default Table;

