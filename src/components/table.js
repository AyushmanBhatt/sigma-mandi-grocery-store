import React from "react";
import "../css/table.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const table = () => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const rows = [
    {
      id: 101,
      product: "Tomato",
      img: img1,
      customer: "Anushk Pathak",
      date: formatDate("2023-03-01"),
      amount: 155,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 102,
      product: "Potato",
      img: img2,
      customer: "Aditya Bahl",
      date: formatDate("2023-03-02"),
      amount: 120,
      method: "Online",
      status: "Pending",
    },
    {
      id: 103,
      product: "Onion",
      img: img3,
      customer: "Shivam",
      date: formatDate("2023-03-03"),
      amount: 85,
      method: "Online",
      status: "Shipped",
    },
    {
      id: 104,
      product: "Pea",
      img: img4,
      customer: "Aditya Negi",
      date: formatDate("2023-03-04"),
      amount: 75,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 105,
      product: "Pumpkin",
      img: img5,
      customer: "Ayushman Bhatt",
      date: formatDate("2023-03-05"),
      amount: 110,
      method: "Cash on Delivery",
      status: "Shipped",
    },
    {
      id: 106,
      product: "Okra",
      img: img6,
      customer: "Aditya Bahl",
      date: formatDate("2023-03-06"),
      amount: 95,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="firstrow">
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
              <img src={row.img} alt="Product" className="productimage"/>{row.product}
              </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default table;
