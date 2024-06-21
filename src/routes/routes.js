import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Recipes from "../pages/Recipes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AllRecipes from "../pages/AllRecipes";
import RecipeDetails from "../pages/RecipeDetails";
import Profile from "../pages/Dashboard/Profile/Profile";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import AddRecipes from "../pages/Dashboard/AddRecipes/AddRecipes";
import ManageRecipes from "../pages/Dashboard/ManageRecipes/ManageRecipes";
import UpdateRecipe from "../pages/Dashboard/UpdateRecipe/UpdateRecipe";
import DashboardOverview from "../pages/Dashboard/DashboardOverview/DashboardOverview";
import EditProfile from "../pages/Dashboard/EditProfile/EditProfile";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/login", element: <Login></Login>
    },
    {
        path: "/signup", element: <Signup></Signup>
    },
    {
        path: "/", element: <Main></Main>, children: ([
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/all-recipes", element: <AllRecipes></AllRecipes>,
                loader: () => fetch("https://recipe-easy-server.onrender.com/recipes")
            },
            {
                path: "/About", element: <About></About>
            },
            {
                path: "/blog", element: <Blog></Blog>,
                loader: () => fetch("blog.json")
            },
            {
                path: "/contact", element: <Contact></Contact>
            },
            {
                path: "/recipes", element: <Recipes></Recipes>
            },
            {
                path: "/recipes-details/:id", element: <PrivateRouter>
                    <RecipeDetails></RecipeDetails>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`https://recipe-easy-server.onrender.com/recipes/${params.id}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("recipe-easy-token")}`
                    },
                })
            },
        ])
    },
    {
        path: "/dashboard", element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: ([
            {
                path: "", element: <DashboardOverview></DashboardOverview>
            },
            {
                path: "profile", element: <Profile></Profile>
            },
            {
                path: "edit-profile", element: <EditProfile></EditProfile>
            },
            {
                path: "add-recipe", element: <AddRecipes></AddRecipes>
            },
            {
                path: "manage-recipes", element: <ManageRecipes></ManageRecipes>
            },
            {
                path: "update-recipe/:id", element: <UpdateRecipe></UpdateRecipe>,
                loader: ({ params }) => fetch(`https://recipe-easy-server.onrender.com/recipes/${params.id}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("recipe-easy-token")}`
                    }
                })
            },
        ])
    },
    {
        path: "*", element: <NotFound></NotFound>
    }
])

