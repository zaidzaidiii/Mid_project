import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';
import ImageSection from '../Components/ImageSection';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Components/Navigation';

export default function ProductPage() {
  let navigate = useNavigate();

  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState('');
  const [ratingstar, setRatingStar] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar,
    };
    console.log(payload);

    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for reviewing our product',
      icon: 'success',
      confirmButtonText: 'Continue Shopping',
    });

    setReview('');
    setRatingStar(0);
  };

  const addToCart = () => {
    const isLocalStorageAvailable = typeof Storage !== 'undefined';

    if (isLocalStorageAvailable) {
      // Check if the user is logged in by verifying the presence of email and password in local storage
      let check = localStorage.getItem('email');
      let check2 = localStorage.getItem('password');

      console.log('email:', check, 'password:', check2); // Debug line to check the email and password values

      if (check && check.trim() !== '' && check2 && check2.trim() !== '') {
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
        const payload = {
          ...product,
          productQuantity,
          totalPrice: product.price * productQuantity,
        };
        const updatedProducts = [...existingProducts, payload];

        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Display success message
        Swal.fire({
          title: 'Added to Cart!',
          text: 'Check your Cart for Check Out',
          icon: 'success',
          confirmButtonText: 'Continue Shopping',
        });

        console.log(`email: ${check}, password: ${check2}, purchased ${productQuantity} ${product.title}`);
      } else {
        alert('Login first');
      }
    } else {
      alert('Local storage is not available on this device. Login first');
    }
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // You may implement more sophisticated login logic here, e.g., authentication with a server.
    // For simplicity, we will directly store the email and password in local storage.
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Login successful');
  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then((json) => setProduct(json.data));
  }, [productID]);
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="text-center my-5">
          <h1>
            {product.title} - {product.price}$
          </h1>
          <p className="text-secondary">{product.description}</p>
          <div className="d-flex justify-content-center">
            <ReactStars count={5} size={24} edit={false} value={product.rating} color2={'#ffd700'} />
          </div>

          <div className="my-3">
            <button
              className="btn btn-dark mx-3"
              disabled={productQuantity > 1 ? false : true}
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
              -
            </button>
            {productQuantity}
            <button className="btn btn-dark mx-3" onClick={() => setProductQuantity(productQuantity + 1)}>
              +
            </button>
          </div>

          <button className="btn btn-dark" onClick={addToCart} >
            Add to Cart
          </button>
        </div>

        <div className="row">
          <div className="col-md-6">
            {product?.images?.length > 0 && <ImageSection images={product.images} />}
          </div>

          <div className="col-md-6">
            <div className="container">
              <div className="mb-5">
                <h2 className="text-center">Reviews Us</h2>
              </div>

              <div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <div className="mt-3">
                  Rate Us :
                  <div className="d-flex align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={ratingstar}
                      onChange={ratingChanged}
                      color2={'#ffd700'}
                    />
                    <span className="ms-3">({ratingstar})</span>
                  </div>
                </div>
                <button className="my-3 btn btn-dark" onClick={submitReview}>
                  Submit review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mb-3">
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
