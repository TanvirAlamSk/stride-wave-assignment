import React from 'react';

const HomeAccrdion = () => {
    return (
        <div>
            <h1 className='text-[#FF3F4B] text-6xl my-10 font-bold text-center'>Faq_</h1>
            <div className="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Why not grill the zukes for this recipe?
                </div>
                <div className="collapse-content">
                    <p>I fell in love with zucchini in the summer. Anytime there’s a get together or party with a grill, I’m bringing the zukes. The problem is I’ve never found a good way to cook them once the summer ends and the grills are put away. Grilling allows you to get a nice crunchy char on the outside while leaving the inside moist and flavorful. Whenever I cook them in a pan, they come out soggy and sad, and it takes more than twice as long as on a grill.

                        My current method is to slice them, salt them, and leave them covered with a paper towel for 1-2 hours to try to draw out all the moisture I would otherwise spend time cooking out. I’ll usually toss them in a bowl with oil and spices, and then cook them on med high to high heat until they look almost burnt. But still, they come out soggy and sometimes I end up burning the seasoning because I left them on too long.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Buckwheat is so strong, can you use another flour?
                </div>
                <div className="collapse-content">
                    <p>Buckwheat is believed to have originated in Southeast Asia.  It then spread to Central Asia, the Middle East, and Europe over the centuries. Buckwheat adapted well to different climates and became a significant part of various regional cuisines due to its hardiness, versatility, and nutritional value.

                        In Eastern Europe, particularly in countries like Russia and Poland, buckwheat has become a staple food and is traditionally used in dishes like kasha, which is a breakfast porridge.

                        In Asia, buckwheat flour is used to make noodles, known as Japanese soba noodles or naengmyeon in Korea.

                        Despite its name, buckwheat is unrelated to the wheat family.  In fact, buckwheat isn't even a grain, but actually a seed.   The plant produces small, triangular seeds commonly referred to as groats.   These groats can be eaten whole, or ground down into a fine flour.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-green-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Is this a round pan like in the photos or a square pan as detailed in the recipe?
                </div>
                <div className="collapse-content">
                    <p>When it comes to baking cakes, the shape of the cake tin can indeed affect the baking time and potentially the outcome of the cake. Round and square cake tins can conduct heat differently, which may impact how the cake bakes. However, in most cases, you can use a recipe designed for a round cake tin in a square cake tin or vice versa without making any adjustments to the ingredients.

                        Here are a few things to keep in mind when using a round vs. square cake tin:

                        Baking Time: A cake baked in a square tin may take slightly longer to bake than the same cake baked in a round tin. This is because the corners of a square tin can absorb more heat than the rounded edges of a round tin. Keep an eye on the cake towards the end of the recommended baking time and use a toothpick or cake tester to check for doneness.
                        Cake Thickness: The shape of the tin can affect the thickness of the cake. A cake baked in a square tin may be slightly thicker than the same cake baked in a round tin. Thicker cakes may require a longer baking time, so adjust accordingly.
                        Cutting and Serving: Square cakes are typically easier to cut into neat, equal portions compared to round cakes. This might be a consideration if you are making a cake for a special occasion where presentation is important.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Custard water bath instead of Stirring.
                </div>
                <div className="collapse-content">
                    <p>For perfect baked custards, line the base of a roasting pan with a tea towel. Place ramekins on top and pour custard mixture among the ramekins. Pour boiling water into the pan to reach halfway up the sides of the ramekins. Bake in oven until the custards are just set. The bain-marie or water bath protects the custards from the direct heat of the base of the roasting pan, so they cook gently and don’t overheat and separate.

                        The secret to cooking stirred custard is to cook it in a large saucepan over medium-low heat. Stir constantly with a wooden spoon, until the custard thickens and coats the back of the spoon. Stirring distributes the heat so the custard doesn’t become too hot, which can curdle it. Draw a finger across the back of the spoon and if it leaves a trail, your custard is ready.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeAccrdion;