import React, { useState } from "react";

const Faq1 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 mt-20">
            <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                    <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valuable customers</p>
                </div>

                <div className=" border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full ">
                    <input placeholder="Search" type="text" aria-label="Search" className="lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4 " />
                    <svg className=" cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 14L10 10" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className=" md:w-5/12 lg:w-4/12 w-full ">
                    <img src="https://i.ibb.co/wR5gR8q/Date-squares-recipe.jpg" alt="Img of Glass bottle" className="w-full" />
                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* <!-- Shipping Section --> */}
                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">Why not grill the zukes for this recipe?</h3>
                            <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow(!show)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}>I fell in love with zucchini in the summer. Anytime there’s a get together or party with a grill, I’m bringing the zukes. The problem is I’ve never found a good way to cook them once the summer ends and the grills are put away. Grilling allows you to get a nice crunchy char on the outside while leaving the inside moist and flavorful. Whenever I cook them in a pan, they come out soggy and sad, and it takes more than twice as long as on a grill.

                            My current method is to slice them, salt them, and leave them covered with a paper towel for 1-2 hours to try to draw out all the moisture I would otherwise spend time cooking out. I’ll usually toss them in a bowl with oil and spices, and then cook them on med high to high heat until they look almost burnt. But still, they come out soggy and sometimes I end up burning the seasoning because I left them on too long.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Returns Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800"> Buckwheat is so strong, can you use another flour?</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow2(!show2)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>Buckwheat is believed to have originated in Southeast Asia.  It then spread to Central Asia, the Middle East, and Europe over the centuries. Buckwheat adapted well to different climates and became a significant part of various regional cuisines due to its hardiness, versatility, and nutritional value.

                            In Eastern Europe, particularly in countries like Russia and Poland, buckwheat has become a staple food and is traditionally used in dishes like kasha, which is a breakfast porridge.

                            In Asia, buckwheat flour is used to make noodles, known as Japanese soba noodles or naengmyeon in Korea.

                            Despite its name, buckwheat is unrelated to the wheat family.  In fact, buckwheat isn't even a grain, but actually a seed.   The plant produces small, triangular seeds commonly referred to as groats.   These groats can be eaten whole, or ground down into a fine flour.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Exchange Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800"> Custard water bath instead of Stirring.</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow3(!show3)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show3 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>For perfect baked custards, line the base of a roasting pan with a tea towel. Place ramekins on top and pour custard mixture among the ramekins. Pour boiling water into the pan to reach halfway up the sides of the ramekins. Bake in oven until the custards are just set. The bain-marie or water bath protects the custards from the direct heat of the base of the roasting pan, so they cook gently and don’t overheat and separate.

                            The secret to cooking stirred custard is to cook it in a large saucepan over medium-low heat. Stir constantly with a wooden spoon, until the custard thickens and coats the back of the spoon. Stirring distributes the heat so the custard doesn’t become too hot, which can curdle it. Draw a finger across the back of the spoon and if it leaves a trail, your custard is ready.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* Tracking Section */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">  Is this a round pan like in the photos or a square pan as detailed in the recipe?</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow4(!show4)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show4 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show4 ? "blcok" : "hidden")}>When it comes to baking cakes, the shape of the cake tin can indeed affect the baking time and potentially the outcome of the cake. Round and square cake tins can conduct heat differently, which may impact how the cake bakes. However, in most cases, you can use a recipe designed for a round cake tin in a square cake tin or vice versa without making any adjustments to the ingredients.

                            Here are a few things to keep in mind when using a round vs. square cake tin:

                            Baking Time: A cake baked in a square tin may take slightly longer to bake than the same cake baked in a round tin. This is because the corners of a square tin can absorb more heat than the rounded edges of a round tin. Keep an eye on the cake towards the end of the recommended baking time and use a toothpick or cake tester to check for doneness.
                            Cake Thickness: The shape of the tin can affect the thickness of the cake. A cake baked in a square tin may be slightly thicker than the same cake baked in a round tin. Thicker cakes may require a longer baking time, so adjust accordingly.
                            Cutting and Serving: Square cakes are typically easier to cut into neat, equal portions compared to round cakes. This might be a consideration if you are making a cake for a special occasion where presentation is important.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default Faq1;
