import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { baseUrlImage } from '../../lib/api'
const ShopSection = (props) => {
    return (
        <>
            <section className="shop-area pb-70">
                <div className="container-fluid">
                    <div className="section-title">
                        <div className="section-title">
                            <span>Our Shop</span>
                            <h2>{props.ShopH1}</h2>
                            <p>
                            {props.ShopPara}
                            </p>
                        </div>
                    </div>

                    <div className="row">
                    {
              ((props.ProductCard || []).map((data, index) =>
                        <div key={data.id} className="col-lg-3 col-md-6">
                        
                        <div  className="single-shop">  
                                <div  className="product-image">
                                    <Link href="#">
                                        <Image src={`${baseUrlImage}${data.img.data[0].attributes.url}`} height={300} width={300} />
                                    </Link>
                                    <ul className="add-to-cart-btn">
                                        <li>
                                            <Link href="#">
                                                <i className="fa fa-search"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fas fa-heart"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fas fa-star"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            <div className="product-content">
                                    <h3>
                                        <Link href="#">{data.title}</Link>
                                    </h3>
                                    
                                    <div className="bar"></div>
                                    <ul className="rating">
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="rating1">
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <b>₹{data.price}</b>
                                    <Link href="https://ezheal.in/cart">
                                        <a className="cart-icon"><i className="fa fa-shopping-cart"></i></a>
                                    </Link>
                                </div>   
                            </div> 
                           
             
 </div>
     ))}     
             

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-shop">
                                <div className="product-image">
                                    <Link href="javascript:void(0)">
                                        <Image src={P2} height={300} width={300} />
                                    </Link>
                                    <ul className="add-to-cart-btn">
                                        <li>
                                            <Link href="#">
                                                <i className="fa fa-search"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fas fa-heart"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fas fa-star"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">abcd</Link>
                                    </h3>
                                    <h3>230</h3>
                                    <div className="bar"></div>
                                    <ul className="rating">
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="rating1">
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <b>$140.00</b>
                                    <Link href="https://ezheal.in/cart">
                                        <a className="cart-icon"><i className="fa fa-shopping-cart"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="single-shop">
                                <div className="product-image">
                                    <Link href="javascript:void(0)">
                                        <Image src={P3} height={300} width={300} />
                                    </Link>
                                    <ul className="add-to-cart-btn">
                                        <li>
                                            <Link href="#">
                                                <i className="fa fa-search"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fas fa-heart"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fas fa-star"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">mango</Link>
                                    </h3>
                                    <h3>230</h3>
                                    <div className="bar"></div>
                                    <ul className="rating">
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="rating1">
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <b>$140.00</b>
                                    <Link href="https://ezheal.in/cart">
                                        <a className="cart-icon"><i className="fa fa-shopping-cart"></i></a> 
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopSection