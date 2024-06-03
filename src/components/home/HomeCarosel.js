import React from 'react';
import HomeCaroselCard from './HomeCaroselCard';

const HomeCarosel = () => {
    const bannerSection = [
        {
            id: 1,
            title: "Adding a foreign ingredient or name of an exotic locale adds mystique and interest to a dish.",
            subtitle: " The weather of the location may evoke certain feelings too. London Fog Tea Scones beckons one to come inside to partake of a warming cup of tea and flaky currant-speckled scones.",
            image: "https://i.ibb.co/ZHSrsHY/banner-image-2.jpg",
            prev: "banner5",
            next: "banner2"
        },
        {
            id: 2,
            title: "Calling a fruit dessert “summer” versus “winter” lets a home cook know when the it is best to make the dish.",
            subtitle: "The ingredients in season are the freshest and most flavorful. Also, the texture and sense of weight of the ingredients match the season. A Summer Zucchini Tart is made of zucchini, a lighter, delicate vegetable appreciated on a hot summer day.",
            image: "https://i.ibb.co/XXfmV2J/banner-image-1.jpg",
            prev: "banner1",
            next: "banner3"
        },
        {
            id: 3,
            title: "Just tell the world that your recipe is truly the best.",
            subtitle: "We all want to be convinced that the recipe is good, and you as the chef know better than anyone. Tell us!",
            image: "https://i.ibb.co/x1Fnxf7/banner-image-3.jpg",
            prev: "banner2",
            next: "banner4"
        },
        {
            id: 4,
            title: "Who doesn't want to have recipes that can be whipped up in no time?",
            subtitle: " The weather of the location may evoke certain feelings too. London Fog Tea Scones beckons one to come inside to partake of a warming cup of tea and flaky currant-speckled scones.",
            image: "https://i.ibb.co/jfrvnHv/banner-image-4.jpg",
            prev: "banner3",
            next: "banner1"
        }
    ]

    return (
        <div className="carousel w-full">
            {
                bannerSection.map((banner) => <HomeCaroselCard key={banner.id} banner={banner}></HomeCaroselCard>)
            }

        </div>
    );
};

export default HomeCarosel;