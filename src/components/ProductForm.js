import '../css/ProductForm.css';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import { useAuthContext } from '../hooks/useAuthContext';
import cartContext from './cartContext';
/*const ProductForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        subtitle: '',
        description: '',
        price: '',
        quantity: '',
        img: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/products/addproducts', formData);
            console.log('Product added:', response.data);
            setFormData({
                id: '',
                title: '',
                subtitle: '',
                description: '',
                price: '',
                quantity: '',
                img: '',
                img1: '',
                img2: '',
                img3: '',
                img4: '',
            });
            setNotification('Product added successfully');
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    return (
        <div>
            <Navbar />
            <div className='form-center'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex">
                        <label>
                            <input
                                required
                                type="number"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder=""
                                className="input"
                            />
                            <span>ID</span>
                        </label>

                        <label>
                            <input
                                required
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder=""
                                className="input"
                            />
                            <span>Title</span>
                        </label>
                    </div>

                    <label>
                        <input
                            required
                            type="text"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Subtitle</span>
                    </label>

                    <label>
                        <input
                            required
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Description</span>
                    </label>
                    <label>
                        <input
                            required
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Price</span>
                    </label>
                    <label>
                        <input
                            required
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Quantity</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Main Photo</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img1"
                            value={formData.img1}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 1</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img2"
                            value={formData.img2}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 2</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img3"
                            value={formData.img3}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 3</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img4"
                            value={formData.img4}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 4</span>
                    </label>

                    <button className="fancy" type="submit">
                        <span className="top-key"></span>
                        <span className="text">Add Product</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>
                <div className={`notification${notification ? '' : ' hide'}`}>
                    {notification}
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
*/
const ProductForm = () => {
    //const { dispatch } = useContext(cartContext)
    const { user } = useAuthContext()

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [img, setImg] = useState('')
    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
    const [img3, setImg3] = useState('')
    const [img4, setImg4] = useState('')
    const [notification, setNotification] = useState(null);
    const [error, setError] = useState(null)
    //const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!user) {
                setError('You must be logged in')
                return
            }

            const product = { id, title, subtitle, description, price, quantity, img, img1, img2, img3, img4 }  

            const response = await fetch('http://localhost:4000/api/products/addproducts', {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
                //setEmptyFields(json.emptyFields)
            }

            if (response.ok) {
                setId('')
                setTitle('')
                setSubtitle('')
                setDescription('')
                setPrice('')
                setQuantity('')
                setImg('')
                setImg1('')
                setImg2('')
                setImg3('')
                setImg4('')
                setError(null)
                //setEmptyFields([])
                console.log('New product added', json)
                //dispatch({ type: 'CREATE_PRODUCT', payload: json })
            }
            setNotification('Product added successfully');
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    return (
        <div>
            <Navbar />
            <div className='form-center'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex">
                        <label>
                            <input
                                required
                                type="number"
                                name="id"
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                                placeholder=""
                                className="input"
                            />
                            <span>ID</span>
                        </label>

                        <label>
                            <input
                                required
                                type="text"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder=""
                                className="input"
                            />
                            <span>Title</span>
                        </label>
                    </div>

                    <label>
                        <input
                            required
                            type="text"
                            name="subtitle"
                            onChange={(e) => setSubtitle(e.target.value)}
                            value={subtitle}
                            placeholder=""
                            className="input"
                        />
                        <span>Subtitle</span>
                    </label>

                    <label>
                        <input
                            required
                            type="text"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            placeholder=""
                            className="input"
                        />
                        <span>Description</span>
                    </label>
                    <label>
                        <input
                            required
                            type="number"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            placeholder=""
                            className="input"
                        />
                        <span>Price</span>
                    </label>
                    <label>
                        <input
                            required
                            type="number"
                            name="quantity"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                            placeholder=""
                            className="input"
                        />
                        <span>Quantity</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img"
                            onChange={(e) => setImg(e.target.value)}
                            value={img}
                            placeholder=""
                            className="input"
                        />
                        <span>Main Photo</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img1"
                            onChange={(e) => setImg1(e.target.value)}
                            value={img1}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 1</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img2"
                            onChange={(e) => setImg2(e.target.value)}
                            value={img2}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 2</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img3"
                            onChange={(e) => setImg3(e.target.value)}
                            value={img3}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 3</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img4"
                            onChange={(e) => setImg4(e.target.value)}
                            value={img4}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 4</span>
                    </label>

                    <button className="fancy" type="submit">
                        <span className="top-key"></span>
                        <span className="text">Add Product</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>
                <div className={`notification${notification ? '' : ' hide'}`}>
                    {notification}
                </div>
            </div>
        </div>
    );
};

export default ProductForm;