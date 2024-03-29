import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const AdminProductCard = (props) => {
  const { product, handleDelete, price } = props;
  return (
    <Link
      to={`/admin/products/${product._id}`}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ width: 200, margin: "10px" }}>
        <CardActionArea>
          {price && (
            <CardMedia component="img" height="100" image={product.imageUrl} />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            {price && (
              <Typography variant="body2" color="text.secondary">
                PRICE: {product.price}
              </Typography>
            )}
            <IconButton
              onClick={() => handleDelete(product._id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AdminProductCard;
