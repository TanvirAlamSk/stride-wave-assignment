import React from 'react';

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto pt-40 lg:py-20 lg:px-20 md:py-12 md:px-6 md:pt-10 px-4">
            <div className="lg:w-10/12 w-full">
                <p className="font-normal text-sm leading-3 text-red-400 700 hover:text-red-400 800 cursor-pointer">About</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great design accessible and delightfull for everyone</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                    As a chef, I've always believed that a perfectly crafted dish should be a joy for everyone to experience. It's not just about the look on the plate, but the way the flavors dance on your tongue, the textures that surprise and delight. That's why I love this idea of making great design accessible. Imagine if every meal, regardless of dietary restrictions or preferences, could be a symphony of taste! We can use common ingredients in unexpected ways, create beautiful presentations that tantalize the eyes, and most importantly, cook with love to create a truly delightful experience for all. Just like a well-designed dish, great design should nourish the soul and leave everyone wanting more.</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="block  w-full" src="https://img.freepik.com/free-photo/top-view-vegetables-bowl-lentil-herbs-spices-tomatoes-bell-pepper-notebook-pencil_140725-73821.jpg?t=st=1717423390~exp=1717426990~hmac=cb01d4dc63b44c27cc32fbfe27b7f10ee7c275c30b399f46a1b4e69ca8cef72c&w=740" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">The old woman, known only as Nonna to the children of the village, sat on her rickety porch, her gnarled hands wrapped around a chipped mug of tea. The last rays of the setting sun painted the sky in hues of orange and purple, casting long shadows across the dusty street. A hush had fallen over the village, broken only by the distant bleating of sheep and the rhythmic creak of Nonna's rocking chair.

                        A flicker of a smile crossed Nonna's lips. The Whispering Woods held a special place in her heart, a place where she too, as a young girl, had chased after dreams. "Forgotten dreams can be dangerous things, Sofia," she warned gently. "Sometimes, it's best to let them sleep."</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">But Sofia was already halfway down the dusty road, her ponytail bouncing with determination. Nonna watched her go, a pang of longing tugging at her heart. Perhaps, she thought, some dreams were worth remembering.

                        Deep within the woods, Nonna stumbled upon a clearing bathed in an ethereal glow. In the center stood a towering oak, its branches adorned with shimmering ribbons and trinkets. It was the Wishing Tree, a place where villagers once came to whisper their deepest desires.</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="block w-full" src="https://img.freepik.com/premium-photo/restaurant-manager-his-staff-kitchen_109285-4433.jpg?w=740" alt="people discussing on board" />
                </div>
            </div>
        </div>
    );
};

export default About;