import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import HelpIcon from "@material-ui/icons/Help";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FaceIcon from '@material-ui/icons/Face';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import VisibilityIcon from '@material-ui/icons/Visibility';


export const SidebarData = [
    {   icon: HomeIcon, 
        heading: "Dashboard" 
    },
    {   icon: AccountBoxIcon, 
        heading: "Account" 
    },
    {   icon: ShowChartIcon, 
        heading: "Analytics" 
    },
    {   icon: HelpIcon, 
        heading: "Support" 
    }

];

export const CardsData = [
   {
        title : "New Users",
        color : {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:"2,590",
        icon: PersonAddIcon,
        series: [
            {
                name: "New Users",
                data: [20, 41, 26, 51, 42, 100, 200],
            },
        ],
   },
   
]



// export const WidgetsData = [
//     {
//         icon: VisibilityIcon ,
//         count: "274,806",
//         title: "Total Views",
//         trendIcon: TrendingUpIcon,
//         per:"70%"

//     },
//     {
//         icon: LoyaltyIcon ,
//         count: "30",
//         title: "Total Sales",
//         trendIcon: TrendingDownIcon,
//         per:"10%"

//     },
//     {
//         icon: FaceIcon ,
//         count: "6,078",
//         title: "Total Users",
//         trendIcon: TrendingUpIcon,
//         per:"30%"

//     }
// ]
