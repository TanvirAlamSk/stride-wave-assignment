import React, { useContext } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import FindRecipetype from '../../../utilities/FindRecipetype';
import { authContext } from '../../../context/Authprovider';


const DashboardOverview = () => {
    const { user } = useContext(authContext)

    const frenchtype = FindRecipetype().filter((recipeType => recipeType.type === "French"))
    const indiantype = FindRecipetype().filter((recipeType => recipeType.type === "Indian"))
    const chinesetype = FindRecipetype().filter((recipeType => recipeType.type === "Chinese"))
    const italiantype = FindRecipetype().filter((recipeType => recipeType.type === "Italian"))
    const thaitype = FindRecipetype().filter((recipeType => recipeType.type === "Thai"))
    const mexicantype = FindRecipetype().filter((recipeType => recipeType.type === "Mexican"))


    const data01 = [
        { name: 'French', value: frenchtype.length },//french
        { name: 'Indian', value: indiantype.length },//indian
        { name: 'Chinese', value: chinesetype.length },//chinese
        { name: 'Italian', value: italiantype.length },//italian
        { name: 'Thai', value: thaitype.length },//thai
        { name: 'Mexican', value: mexicantype.length },//mexican
    ];

    return (
        <>
            <div className='m-10'>
                <h2 className='text-3xl font-semibold text-gray-500'>Shows all type recipe quantity </h2>
                <p className='text-gray-500'>This website has a total of 21 recipes of 6 types. The following pie chart shows how many recipes there are against each type.</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={200}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div></div>
        </ >
    );
};

export default DashboardOverview;