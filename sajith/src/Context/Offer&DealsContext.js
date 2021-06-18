import React,{ useState,createContext } from 'react'

export const  offerDetailsContext =  createContext()

export const Context = ( props ) => {
    
	const [section, setSection] = useState(['Grocery', 'shopping', 'Food',"MegaSavings","Entertainment","Firstpecashback","Travel","Cashback","Reacharge and Bills","Health","Gaming","Grocery Stores","Health Stores","Infinite Savings","Super Choice","Restaurants","Bus Tickets","Shopping Stores","Stores Near You","Services","New User Offers","Education","CashOnBackpack","SuperCash To Wallet","Loyality Redumption","Box Office","Mobikwik American Express Card"]);
    const [groceryItems,setGroceryItems] = useState([
        {
        brandName: "jioMart",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Jiomart_sep2020.jpg`,
        offerText: 'Get 5% Cashback @ Jio Mart',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/jiomart_1.png`
    },
    {
        brandName: "Grofers",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Grofers_Mar.jpg`,
        offerText: 'Get upto Rs.200 Cashback @ Grofers',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/groferslogo1.png`
    },
    {
        brandName: "BigBasket",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/big-basket.jpg`,
        offerText: 'Get upto Rs.50 Cashback @Grofers',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bigbasket_logo.png`

    },
    {
        brandName: "bbdaily",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BBDaily.jpg`,
        offerText: 'Get upto Rs.50 Cashback @ bbdaily',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bbdaily_logo.png`
    },
    {
        brandName: "Best Price Wholesale",
        imageUrl:` https://static8.mobikwik.com/views/images/ui/offer_images/Bestprice_jul2020.jpg`,
        offerText: 'Get upto Rs.100 Cashback @ Bestprice',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bestprice_jul2020.png`
    },
    {
        brandName: "Cococart",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Cococart.jpg`,
        offerText: 'Use SuperCash to get up to Rs.1000 discount @ COCOCART',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cococart_logo.png`
    },
    {
        brandName: "Mother Diary",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Motherdairy.jpg`,
        offerText: 'Get Flat Rs.25 cashback on your 1st transaction in Apr 21 @ Mother Dairy',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/motherdairy_logo.png`
    },
    {
        brandName: "Milk",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Milk.jpg`,
        offerText: 'Get Flat Rs.25 cashback on your 1st transaction in Apr 21 @ Mother Dairy',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/milk_logo.png`
    },
    {
        brandName: "Prideofcows",
        imageUrl:` https://static8.mobikwik.com/views/images/ui/offer_images/prideofcows.jpg`,
        offerText: 'Use SuperCash to get up to Rs. 1000 discount @ Prideofcows!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/prideofcows_logo.png`
    }
   
    ])
    const [shoppingItems,setShoppingItems] = useState( [{
        brandName: "Mi Online Store",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/xiaomi_march21.jpg`,
        offerText: 'Get FLAT Rs.600 Cashback @ Xiaomi',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/xiaomi_1.png`
    },
    {
        brandName: "Myntra",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/myntra_4feb.jpg`,
        offerText: 'Get upto Rs.500 Cashback + Flat 10% discount upt to Rs.500 @ Myntra',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/myntra_logo.png`
    },
    {
        brandName: "ajio",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Ajio1.jpg`,
        offerText: 'Get up to Rs.500 Cashback @ AJIO!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ajio_logo.png`

    },
    {
        brandName: "Samsung",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Shopperstop1.jpg`,
        offerText: 'Get Flat Rs.500 Cashback @ Samsung!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/shopperstop1.png`
    },
    {
        brandName: "realme",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
        offerText: 'Get Rs.10% Cashback at Realme ',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
    },
    {
        brandName: "Zivame",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Zivame_listing.jpg`,
        offerText: 'Get up to Rs.300 Cashback @ Zivame!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zivame_logo.png`
    },
    {
        brandName: "Beardo",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Beardo.jpg`,
        offerText: 'Get 10% Cashback upto Rs.150 @ Beardo',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/beardo_logo.png`
    },
    {
        brandName: "Just Dial",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/JustDialwo-V8MGPCYFV9.jpg`,
        offerText: 'Get up to Rs.200 Supercash @ Justdial!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/justdialwo.png`
    }
   
])
const [foodItems,setFoodeItems] = useState( [{
    brandName: "Swiggy",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Swiggyx.jpg`,
    offerText: 'Get 5% Cashback @ Swiggy!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/swiggy_logo.png`
},
 {
    brandName: "Domino's",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Dominos-online.jpg`,
    offerText: 'SGet up to Rs.300 Cashback @ Dominos!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dominos_logo.png`

},
{
    brandName: "Hungerbox",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Hungerbox30jan.jpg`,
    offerText: 'Use SuperCash to get up to Rs.1000 discount @ Hunger box! ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hungerbox30jan_logo.png`
},
{
    brandName: "Starbucks",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Starbucks.jpg`,
    offerText: 'Use SuperCash to get up to Rs. 1000 discount @ Starbucks!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/starbucks_logo.png`
},
{
    brandName: "Freshmenu",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/FreshMenujuly2019.jpg`,
    offerText: 'Get up to 100 Cashback @ Freshmenu!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/freshmenu_logo.png`
},
{
    brandName: "Bikanervala Online",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BIKANERVALAa.jpg`,
    offerText: 'Use 5% SuperCash @ Bikanervala!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
},
{
    brandName: "Cococart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Cococart.jpg`,
    offerText: 'Use SuperCash to get up to Rs.1000 discount @ COCOCART!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cococart_logo.png`
},
{
    brandName: "MDP Food & Beverages",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/MDPDEC.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @ MDP Coffee House|',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mdp-coffee-house.png`
},
{
    brandName: "Anjappar",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Anjappar_Listing.jpg`,
    offerText: 'Get 10% SuperCash on MobiKwik payments @Anjappar outlets!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/anjappar-logo2.png`
}


])
const [megaSavingsItems,setMegaSavingsItems] = useState([{
    brandName: "MedPlus",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
    offerText: 'Use 10% SuperCash @ Medplus!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
},
{
    brandName: "Ninety Eight Point Four",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/nintyfour.jpg`,
    offerText: 'Use 10% SuperCash @ 98.4 Pharmacy!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/98logo.png`
},
{
    brandName: "Dawaa dost",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dawadost.jpg`,
    offerText: 'Get up to Rs.500 Cashback @ AJIO!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/davadost-logo_march.png`

},
{
    brandName: "Apollo Pharmacy",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
    offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
},
{
    brandName: "Oliva Skin & Hair Clinic",
    imageUrl:`https://static.mobikwik.com/views/images/ui/offer_logos/oliva.jpg.png`,
    offerText: 'Use 10% SuperCash @ Oliva Skin & Hair Clinic!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oliva_march.png`
},
{
    brandName: "Zivame",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Zivame_listing.jpg`,
    offerText: 'Get up to Rs.300 Cashback @ Zivame!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zivame_logo.png`
},
{
    brandName: "Beardo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Beardo.jpg`,
    offerText: 'Get 10% Cashback upto Rs.150 @ Beardo',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/beardo_logo.png`
},
{
    brandName: "Just Dial",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/JustDialwo-V8MGPCYFV9.jpg`,
    offerText: 'Get up to Rs.200 Supercash @ Justdial!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/justdialwo.png`
}

])

const [entertainment,setEntertainment] = useState( [{
    brandName: "ZEE5",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/radheopaque.jpg`,
    offerText: 'Flat Rs.50 Cashback @ Zee5!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logoradhe.png`
},
 {
    brandName: "Justickets",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Jus-ticket.jpg`,
    offerText: 'Get 10% SuperCash @ on Mobikwik payments @ Justickets!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/1justtickets0wo.png`

},
{
    brandName: "ALTBalaji",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/altbalaji-1.jpg`,
    offerText: 'Get 20% SuperCash @ Altbalaji!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/altbal17jun19logo.png`
},
{
    brandName: "PVR",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pvr27sept.jpg`,
    offerText: 'Flat 10% Cashback @ PVR!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pvr27sept_logo.png`
},
{
    brandName: "Playo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Playo.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ Playo!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/playo-logo.png`
},
{
    brandName: "Hungama",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/HungamaAug.jpg`,
    offerText: 'Use SuperCash to get up to Rs.1000 discount @ Hungama!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hungama-logo-png-1.png`
},
{
    brandName: "Smaaash",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Smaaash.jpg`,
    offerText: 'Get 15% SuperCash @ Smaaash!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/smaaash_logo.png`
},
{
    brandName: "HoiChoi Entertainment",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Hoihoitv.jpg`,
    offerText: 'Use SuperCash to get up to Rs. 1000 discount @ HoiChoi Entertainments!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hoihoitv_logo.png`
},
{
    brandName: "BFL_B2C_BajajFinserv_Call_For_Personal_Loan",
    imageUrl:`https://static.mobikwik.com/views/images/ui/offer_logos/msdcall_logo.png`,
    offerText: 'Personal Loan a call away',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/msdcall_logo.png`
}


])

const [firstpecashback,setFirstpeCashback] = useState( [{
    brandName: "Reliance Fresh & Smart",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Reliance SMART',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png    `
},
{
    brandName: "Metro Cash and Carry",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
    offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metrocnclogo.png`
},
{
    brandName: "Spencer's",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`

},
{
    brandName: "VishalMegaMart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vishal-mega-mart.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vishal-logo-march.png`
},
{
    brandName: "Jio Stores",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/jiostores.jpg`,
    offerText: 'Use 10% SuperCash @ Oliva Skin & Hair Clinic!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/jio-logo-march.png`
},
{
    brandName: "Reliance Digital",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/digital.jpg`,
    offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/reliance-digital-march.png`
},
{
    brandName: "croma",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
    offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @ Croma Stores',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
},
{
    brandName: "Woodland",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/woodland.jpg`,
    offerText: 'Special Offer: Get 10% upto Rs.200 cashback on your 1st transaction of the Month @ Woodland',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/woodland_march.png`
},
{
    brandName: "Relaxo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
    offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @ Relaxo',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
}


])
const [travel,setTravel] = useState([{
    brandName: "IndiGo",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
    offerText: 'Get upto Rs.600 Cashback on IndiGo!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/indigo-logo-2020.png `
},
{
    brandName: "HappyEasyGo",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Happyeasygo31.jpg`,
    offerText: 'Flat Rs.300 Cashback on HappyEasyGo!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo31_logo.png`
},
{
    brandName: "IRCTC Rail Connect",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IRCTCAug.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctc_logo.png`

},
{
    brandName: "MakeMyTrip",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
    offerText: 'Save flat Rs.700 on MakeMyTrip! ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/makemytrip_logo.png`
},
{
    brandName: "Vistara",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Airvistara.jpg`,
    offerText: 'Get up to Rs.400 Cashback on Vistara!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/airvistaralogo.png`
},
{
    brandName: "SpiceJet",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spicejet.jpg`,
    offerText: 'Get 10% Cashback on SpiceJet!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spicejet_logo.png`
},
{
    brandName: "Yatra",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
    offerText: 'Save flat Rs.600 on Yatra!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
},
{
    brandName: "Woodland",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/woodland.jpg`,
    offerText: 'Special Offer: Get 10% upto Rs.200 cashback on your 1st transaction of the Month @ Woodland',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/woodland_march.png`
},
{
    brandName: "Relaxo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
    offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @ Relaxo',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
}
]
)
const [cashback,setCashback] = useState(   [{
    brandName: "MilkBasket",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/milkbasket.jpg`,
    offerText: 'Get up to Rs.75 cashback @ Milkbasket!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/milkbasket_logo.png `
},
{
    brandName: "Mi Online Store",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/xiaomi_march21.jpg`,
    offerText: 'Get FLAT Rs.600 Cashback @ Xiaomi!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/xiaomi_1.png`
},
{
    brandName: "Samsung",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/samsung_feb21.jpg`,
    offerText: 'Get Flat Rs.500 Cashback @ Samsung!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/samsung_listing_logo.png`

},
{
    brandName: "realme",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
    offerText: 'Get 10% Cashback at Realme! ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
},
{
    brandName: "croma",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
    offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
},
{
    brandName: "croma Online",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
    offerText: 'Get 10% Cashback on SpiceJet!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma_logo_cashback.png`
},
{
    brandName: "Oppo Stores",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Oppo.jpg`,
    offerText: 'Get flat Rs.1200 Cashback @ Oppo stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oppo26mbk_logo.png`
},
{
    brandName: "Vivo stores",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
    offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`
},
{
    brandName: "Lybrate Goodkart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Lybrate.jpg`,
    offerText: 'Get assured Cashback up to Rs.300 @ Lybrate!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo_lybrate_goodkart.png`
}
])
const [reachargeAndBills, setReachargeAndBills] = useState(  [{
    brandName: "Recharge & Bill Payment Offer",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/cashback50.jpg`,
    offerText: 'Get 5% Cashback on first transaction of month  Recharge or Bill Payment',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mbk100logo.png`
},
{
    brandName: "Electricity Cashback Offer",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/firstlight.jpg`,
    offerText: 'Get Flat Rs.100 Cashback on your First Electricity Transaction of  Month',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo31_logo.png`
},
{
    brandName: "Recharge Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/addkaro-addmoney.jpg`,
    offerText: 'Get 2% SuperCash up to Rs.500 on recharges',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/addkaro-logo.png`

},
{
    brandName: "Credit card payment offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/ccpay.jpg`,
    offerText: 'Get 1% SuperCash on your every Credit card Bill payment',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ccpaylogo.png`
},
{
    brandName: "Electricity Bill payment Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/bijlibill.jpg`,
    offerText: 'Get 2% SuperCash up to Rs.1000 on Electricity Bill Payment',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bijlibilllogo.png`
},
{
    brandName: "DishTV",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Dishtv31jan.jpg`,
    offerText: 'Use SuperCash to get up to Rs. 1000 discount @ DishTv!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dishtv31jan_logo.png`
},
{
    brandName: "PSPCL Bill Payment",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pspcl-offer.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ PSPCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
},
{
    brandName: "DGVCL Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dgvcl-offer.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ DGVCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`
},
{
    brandName: "PGVCL Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ PGVCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pgvcl-logo.png`
}
])
const [health,setHealth] = useState(    [{
    brandName: "Medlife",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Medlife1.jpg`,
    offerText: 'Get up to Rs.50 discount + Rs.500 Cashback @ Medlife!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medlife_logo.png`
},
{
    brandName: "1mg",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/1MG25thnov.jpg`,
    offerText: 'Get up to Rs.500 Cashback @ 1mg!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/1mg_logo.png`
},
{
    brandName: "Netmeds",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Netmeds.jpg`,
    offerText: 'Get up to Rs.500 Cashback @ Netmeds!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/netmeds_logo.png`

},
{
    brandName: "SastaSundar",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sastasundar.jpg`,
    offerText: 'Get assured Cashback up to Rs.500 @ SastaSundar!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sastasundar_logo.png`
},
{
    brandName: "BFL_ECOM_FITNESSONE_Health_OfferTab_01042021",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/fitnessonejuly.jpg`,
    offerText: 'Fitness & Workout Equipments | No Cost EMIs',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fitnessonejuly_logo.png`
},
{
    brandName: "Lybrate Goodkart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Lybrate.jpg`,
    offerText: 'Get assured Cashback up to Rs.300 @ Lybrate!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo_lybrate_goodkart.png`
},
{
    brandName: "Medplusonline",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
    offerText: 'Get assured Cashback up to Rs.500 @ Medplus Online!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
},
{
    brandName: "HealthKart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/healthkart.jpg`,
    offerText: 'Get up to Rs.250 Cashback @ Healthkart!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/healthkartlogo1.png`
}
])
const [gaming,setGaming] = useState([ {
    brandName: "Dream11",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Dream-11.jpg`,
    offerText: 'Get up to Rs.100 Cashback @ Dream11!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dream-11.png`
},
{
    brandName: "MyFab11",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/21augmyfadb11logojpg.jpg`,
    offerText: 'Get flat Rs.25 Cashback @ MyFab11!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/21augmyfab11logo.png`
},
{
    brandName: "ace2three",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Ace2threeNew20.jpg`,
    offerText: 'Get up to Rs.100 cashback @ ace2three!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ace2three_logo.png`

},
{
    brandName: "Fanfight",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Fanfight.jpg`,
    offerText: 'Get up to Rs.100 Cashback @ Fanfight!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fanfight_logo.png`
},
{
    brandName: "Gamezy",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Gamezy.jpg`,
    offerText: 'Get up to Rs.100 Cashback @ Gamezy!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gamezy_logo.png`
},
{
    brandName: "11Wickets",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/11Wickets.jpg`,
    offerText: 'Get up to Rs.100 Cashback @ 11Wickets',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/11-wickets-logo.png`
},
{
    brandName: "MyTeam11",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/myteam.jpg`,
    offerText: 'Get up to Rs.100 Cashback @ MyTeam11',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/myteam_logo.png`
},
{
    brandName: "Silk Rummy",
    imageUrl:`http://static8.mobikwik.com/views/images/ui/offer_images/silk-rummy.jpg`,
    offerText: 'Get Rs.2000* cashback  bonus & use SuperCash to get up to Rs.1000 ',
    brandimageUrl: `http://static.mobikwik.com/views/images/ui/offer_logos/silkrummy-logo.png`
}
])
const [groceryStores,setGroceryStores] = useState( [{
    brandName: "DreamReliance Fresh & Smart11",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Reliance SMART, Fresh and Sahakari Bhandar stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png`
},
{
    brandName: "Spencer's",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`
},
{
    brandName: "Spar",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/SparHypermarket.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spar_march.png`

},
{
    brandName: "Metro Cash and Carry",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
    offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metrocnclogo.png`
},
{
    brandName: "Local Shops",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pseudo.jpg`,
    offerText: 'Earn 10% Supercash @ Local Stores',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nearbystores_logo.png`
},
{
    brandName: "Modern Bazaar",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/modernbazaar.jpg`,
    offerText: 'Get 20% SuperCash on MobiKwik payments @ Modern Bazaar!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/modernbazaarlogo.png`
},
{
    brandName: "Munafa Mart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/munafamart.jpg`,
    offerText: 'Get 15% SuperCash @ Munafa Mart!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/munafa-mart_march.png`
},
{
    brandName: "Safal",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/safal_May.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ Safal ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/safal_march.png`
},
{
    brandName: "twentyfourseven",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/TFS_Apr.jpg`,
    offerText: 'Get 20% SuperCash @ TwentyFour Seven stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/24-seven_logo_march.png`
}
])
const [healthstores,setHealthStores] = useState(  [{
    brandName: "Apollo Pharmacy",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
    offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
},
{
    brandName: "Dr.Batra's Multi-Specialty Hom",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/drbatra.jpg`,
    offerText: "Dr.Batra's Multi-Specialty Homeopathy",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
},
{
    brandName: "Medplus",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
    offerText: 'Use 10% SuperCash @ Medplus!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/netmeds_logo.png`

},
{
    brandName: "SastaSundar",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sastasundar.jpg`,
    offerText: 'Get assured Cashback up to Rs.500 @ SastaSundar!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sastasundar_logo.png`
},
{
    brandName: "healthians",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/healthiansz.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/healthians_logo_march2.png`
},
{
    brandName: "Talwalkars Gym  ",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Taalwalkars.jpg`,
    offerText: 'Get flat Rs.1500 SuperCash @ Talwalkars Gym!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/talwalkars.png.png`
},
{
    brandName: "the family pharma",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/thefamilypharma.jpg`,
    offerText: 'Get 15% SuperCash up to Rs.400 when you pay via MobiKwik @ The Family ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/thefamilypharma_logo.png`
},
{
    brandName: "32 Dental Care",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/32-Dental.jpg`,
    offerText: 'Special Offer: Get flat Rs.100 cashback on your 1st transaction in December',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/32-dental-care_logo.png`
},
{
    brandName: "Sabka dentist",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sabkadentist.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sabkadentistlogo.png`
},
{
    brandName: "Ninety Eight Point Four",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/nintyfour.jpg`,
    offerText: 'Use 10% SuperCash @ 98.4 Pharmacy',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/98logo.png`
},

]
)
const [infinitesavings,setInfiniteSavings] =useState([{
    brandName: "IRCTC Website",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IRCTC_Web_2019.jpg`,
    offerText: 'Get up to Rs.1000 Supercash @ IRCTC Rail Website!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctcweb_logo.png`
},
{
    brandName: "NNNOW",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/NNnow.jpg`,
    offerText: "Earn unlimited SuperCash @ NNNOW!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nnnow_logo.png`
},
{
    brandName: "Shoppers Stop",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/shopperstop_mainbanner.jpg`,
    offerText: 'Get Flat Rs.200 Cashback @ shoppersstop.com',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/shopperstop1.png`

},
{
    brandName: "Petsutra",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Petsutra.jpg`,
    offerText: 'Get 10% MobiKwik Cashback @ Petsutra!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/petsutra-logo.png`
},
{
    brandName: "PSPCL Bill Payment",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pspcl-offer.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ PSPCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
},
{
    brandName: "Electricity Bill payment Offer ",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/bijlibill.jpg`,
    offerText: 'Get 2% SuperCash up to Rs.1000 on Electricity Bill Payment',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bijlibilllogo.png`
},
{
    brandName: "DGVCL Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dgvcl-offer.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ DGVCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`
},
{
    brandName: "PGVCL Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ PGVCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pgvcl-logo.png`
},
{
    brandName: "realme",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
    offerText: 'Get 10% Cashback at Realme!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
},

])

const [superChoice,setSuperChoice] = useState(  [{
    brandName: "SuperChoice",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/superchoice-mobikwik.jpg`,
    offerText: 'Choose to earn or use your SuperCash at merchant checkouts!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/superchoice-logo.png`
},
{
    brandName: "IRCTC Website",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IRCTC_Web_2019.jpg`,
    offerText: "Get up to Rs.1000 Supercash @ IRCTC Rail Website!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctcweb_logo.png`
},
{
    brandName: "EaseMyTrip",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/EMTOct1.jpg`,
    offerText: 'Get flat Rs.100 Cashback + Rs.600 discount on EaseMyTrip!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easytrip_logo.png`

},
{
    brandName: "MakeMyTrip",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
    offerText: 'Save flat Rs.700 on MakeMyTrip!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/makemytrip_logo.png`
},
{
    brandName: "IndiGo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
    offerText: 'Save upto Rs.600 on IndiGo!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/indigo-logo-2020.png`
},
{
    brandName: "Akbar Travels",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Akbartravellisting.jpg`,
    offerText: 'Save Flat Rs.500 on Akbar Travels!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akbartravellisting_logo.png`
},
{
    brandName: "Freshmenu",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/FreshMenujuly2019.jpg`,
    offerText: 'Get up to Rs.1000 SuperCash @ DGVCL!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`
},
{
    brandName: "PGVCL Offer",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
    offerText: 'Get up to 300 Cashback @ Freshmenu!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/freshmenu_logo.png`
},
{
    brandName: "Yatra",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
    offerText: 'Save flat Rs.600 on Yatra!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
},
{
    brandName: "Petrol Pumps",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/NewUserPetrol.jpg`,
    offerText: 'Save upto Rs.100 on fuel!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fuel_logo.png`
}

])
const [restaurants,setRestuarants] = useState(  [{
    brandName: "Cafe Coffee Day",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/ccd.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction in of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ccd_march.png`
},
{
    brandName: "Barista",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Barista.jpg`,
    offerText: "Earn 15% SuperCash @ Barista outlets!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/barista_logo.png`
},
{
    brandName: "Chaayos",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/chaayoss.jpg`,
    offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @ Chaayos',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/chaayos_march.png`

},
{
    brandName: "Bikanervala",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Bikaner.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bikanerwala_march.png`
},
{
    brandName: "Havmor",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
    offerText: 'Get 20% SuperCash on paying with MobiKwik wallet @ Havmor',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/havmor_logo.png.png`
},
{
    brandName: "Gelato Italiano",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/gelato.jpg`,
    offerText: 'Get 100% SuperCash on your first transaction via MobiKwik @ Gelato',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gelatologo.png`
},
{
    brandName: "Costa Coffee",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Costalisting.jpg`,
    offerText: 'Earn 20% SuperCash @ Costa Coffee outlets!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/costalisting_logo.png`
},
{
    brandName: "Pizza Hut",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Pizzahut.jpg`,
    offerText: 'Regular offer-Earn 20% SuperCash @ Pizza Hut outlets!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pizzahut_logo.png`
},
{
    brandName: "The Coffee Bean and Tea Leaf",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/cbtlnew.jpg`,
    offerText: 'Get 25% SuperCash @ The Coffee Bean and Tea Leaf',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cbtlnewlogo.png`
},

])
const [busTickets,setBusTickets] = useState( [{
    brandName: "BFL_ECOM_Yatra_Bus_OfferTab_04052021",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/gibohgf43.jpg`,
    offerText: 'Domestic & International   Bus, Hotel, Flights',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
},
{
    brandName: "BFL_ECOM_EMT_Bus_04052021",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/wasymytr43.jpg`,
    offerText: 'Domestic & International Bus, Hotel, Flightsi!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easemytrip_logo.png`
},
])
const [shoppingStores,setShoppingStores] = useState(  [{
    brandName: "SKTVC",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/SK.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sk_logo.png`
},
{
    brandName: "Oppo Stores",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Oppo.jpg`,
    offerText: 'Get flat Rs.1200 Cashback @ Oppo stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oppo26mbk_logo.png`
},
{
    brandName: "Vivo stores",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
    offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`

},
{
    brandName: "Vivo stores",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
    offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`
},
{
    brandName: "Reliance Digital",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/digital.jpg`,
    offerText: 'Special Offer: Get Flat Rs.500 cashback on your 1st transaction of the Month @ Reliance Digital!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/reliance-digital-march.png`
},
{
    brandName: "Relaxo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
    offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
},
{
    brandName: "Red Tape",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Red-Tape.jpg`,
    offerText: 'Get 10% SuperCash @ Red Tape stores',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/redtape-logo.png`
},
{
    brandName: "Crossword",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/crossword.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/crossword_march.png`
},
{
    brandName: "Trends Stores",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/trends.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/trends_march.png`
},
{
    brandName: "pantaloons",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pantaloonss.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pantaloons_march.png`
},


])
const [storesNearYou,setStoresNearYou] = useState( [{
    brandName: "Metro Cash and Carry",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
    offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/superchoice-logo.png`
},
{
    brandName: "Reliance Fresh & Smart",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
    offerText: "Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png `
},
{
    brandName: "VishalMegaMart",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vishal-mega-mart.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vishal-logo-march.png`

},
{
    brandName: "Spencer's",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
    offerText: 'Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`
},
{
    brandName: "Spar",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/SparHypermarket.jpg`,
    offerText: 'Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @ Spar',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spar_march.png`
},
{
    brandName: "Apollo Pharmacy",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
    offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
},
{
    brandName: "Medplus",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
    offerText: 'Use 10% SuperCash @ Medplus!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
},
{
    brandName: "Dawaa dost",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dawadost.jpg`,
    offerText: 'Use 10% SuperCash @ Dawaa dost!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/davadost-logo_march.png`
},
])

const [services,setServices] = useState( [
    {
    brandName: "Petrol Pumps NCR - Special Offer!",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/petrolt2.jpg`,
    offerText: "Special Offer : Get 10% Up to Rs.100 cashback on your 1st transaction in May'21 @ Petrol Pumps",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/petrolt2_logo.png`
},
{
    brandName: "Metro Infrasys",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Metroinfrasyspvtltd.jpg`,
    offerText: "Use SuperCash to get up to Rs.1000 discount @ Metro Infrasys!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metroinfrasyspvtltd_logo.png`
},
{
    brandName: "Naukri",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Naukri31jan.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/naukri31jan_logo.png`

},
{
    brandName: "Ziffyhomes",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Ziffy-Homes.jpg`,
    offerText: 'Use SuperCash to get up to Rs. 1000 discount @ ZiffyHomes!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ziffy-homes_logo.png`
},
{
    brandName: "Droom",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Droom30jan.jpg`,
    offerText: 'Use SuperCash to get up to Rs.1000 discount @ Droom!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/droom_logo.png`
},
{
    brandName: "Just Dial",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/JustDialwo-V8MGPCYFV9.jpg`,
    offerText: 'Get up to Rs.200 Supercash @ Justdial!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/justdialwo.png`
},
{
    brandName: "Razorpay",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/razorpay.jpg`,
    offerText: 'Use 5% of your SuperCash balance at select Razorpay merchants!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/razorpaylogo.png`
},
{
    brandName: "Envi Salon and Spa",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Envisalon.jpg`,
    offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ Envi Salon & Spa',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/envi-salon-and-spa_march.png`
},
{
    brandName: "Richfeel",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/richfeell.jpg`,
    offerText: 'Get 15% SuperCash @ RichFeel!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/richfeellogo.png`
}
])

const [newUserOffer,setNewUserOffer] = useState( [
    {
    brandName: "Ferns N Petals",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/FernsNPetals-Nov.jpg`,
    offerText: "New MobiKwik user offer: Get 20% cashback @ Ferns N Petals!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ferns-n-petals.png`
},
{
    brandName: "Zoomin",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/zoomin31jan.jpg`,
    offerText: "Get 10% Cashback @ Zoomin",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zoomin31jan_logo.png`
},
{
    brandName: "Khelplay Rummy",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/khelplay-rummy.jpg`,
    offerText: "Flat Rs.50 Cashback @ Khelplay Rummy!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/khelplayrummy_logo.png`
},
{
    brandName: "Justickets",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Jus-ticket.jpg`,
    offerText: "Get 10% SuperCash @ on Mobikwik payments @ Justickets!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/khelplayrummy_logo.png`
}
])

const [education,setEducation] = useState([
    {
        brandName: "BFL_ARU_LSF_Byju's_22022021",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/byjfb.jpg`,
        offerText: "No Cost EMI at Byju's",
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/byjus_logo.png`,
    },
    {
        brandName: 'BFL_ARU_LSF_Aakash_13042021',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/eduaakah.jpg`,
        offerText: 'Best education at Aakash',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akasshhhh_logo.png`,
    },
    {
        brandName: 'BFL_ARU_LSF_Allen_13042021',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Alenc.jpg`,
        offerText: 'Best education at Allen',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/allen26feb._logo.png`,
    },
    {
        brandName: 'BFL_ARU_LSF_Toppr_02042021',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/oppr15jan21.jpg`,
        offerText: 'Best K-12 learning at Toppr',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/toppr13_logo.png`,
    },
    {
        brandName: 'BFL_ARU_LSF_Extramarks_02042021',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/ecommarwex.jpg`,
        offerText: 'Best K-12 learning at Extramarks',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/extramarks24mar_logo.png`,
    },
    {
        brandName: 'BFL_ARU_LSF_ Vedantu_17032021',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Vedan.jpg`,
        offerText: 'Courses on No Cost EMIs',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vedantusep_logo.png`,
    },
])
const [cashOnBackpack,setCashOnBackpack]= useState([
    {
        brandName: 'SpiceJet',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/spicejet.jpg`,
        offerText: 'Save Rs.500 on SpiceJet!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spicejet_logo.png`,
    },
    {
        brandName: 'OYO',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/oyo-jan.jpg`,
        offerText: 'Get flat Rs.75 Cashback + 40% off @ OYO!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oyo-jan-logo.png`,
    },
    {
        brandName: 'MyBusTickets',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/mybustickets.jpg`,
        offerText: 'Save upto Rs.200 on MyBusTickets!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mbt_logo.png`,
    },
    {
        brandName: 'MakeMyTrip',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
        offerText: 'Save flat Rs.700 on MakeMyTrip!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/toppr13_logo.png`,
    },
    {
        brandName: 'Yatra',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
        offerText: 'BSave flat Rs.600 on Yatra!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`,
    },
    {
        brandName: 'Akbar Travels',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Akbartravellisting.jpg`,
        offerText: 'Save Flat Rs.500 on Akbar Travels!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akbartravellisting_logo.png`,
    },
    {
        brandName: 'DriveU',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Driveu31jan.jpg`,
        offerText: 'Get Flat Rs.50 Cashback @ DriveU!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/driveu31jan_logo.png`,
    },
    {
        brandName: 'Blusmart',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/blusmart1.jpg`,
        offerText: 'Get upto Rs.100 Cashback on Blusmart!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/blusmartlogo1.png`,
    },
    {
        brandName: 'EaseMyTrip',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/EMTOct1.jpg`,
        offerText: 'Get flat Rs.100 Cashback + Rs.600 discount on EaseMyTrip!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easytrip_logo.png`,
    },
])
const [superCashToWallet,setSupperCashToWallet] = useState([
    {
        brandName: 'SonyLIV',
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/SonyLIV.jpg`,
        offerText: 'Get 5% Supercash @ SonyLIV on MobiKwik payments!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sonyliv_logo.png`,
    }
])
const [loyalityRedumption,setLoayalityRedemption] = useState( [{
    brandName: "PAYBACK",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/paybacknw.jpg`,
    offerText: "Get PAYBACK points on MobiKwik payments!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/payback18aprillogo.png`
}
]
)

const [boxOffice,setBoxOffice] = useState([{
    brandName: "cinepolis",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Cinepolis31jan.jpg`,
    offerText: "Get 25% SuperCash @ Cinepolis!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cinepolis_logo.png`
},
{
    brandName: "Carnival Cinemas",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Carnival.jpg`,
    offerText: "Get 15% SuperCash @ Carnival Cinemas!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/carvinal_logo.png`
},
{
    brandName: "Mukta A2 Cinemas",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Mukta.jpg`,
    offerText: "Special Offer: Get 10% upto Rs.50 cashback on your 1st transaction of the Month @",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mukta_logo.png`
},
{
    brandName: "Movie Time",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/MT.jpg`,
    offerText: "Get 15% SuperCash @ Movietime!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mukta_logo.png`
},

])
const [mobikwikBlueAmericanExpressCardItems, setMobikwikBlueAmericanExpressCardItems] = useState(  [   {
    brandName: "1% SuperCash Earn Blue Card Offer",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/sc1percent.jpg`,
    offerText: "Earn 1% SuperCash on every transaction",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/supercash_amex.jpg.png`
},
{
    brandName: "Use 3% SuperCash on every transaction",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/amex-janburn.jpg`,
    offerText: "Use 2% SuperCash on every transaction",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/supercash_amex.jpg.png`
},
    {
    brandName: "Cleartax Blue Card Offer",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/cleartax_AmEx.jpg`,
    offerText: "Flat 25% discount on CA assisted services on Cleartax!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cleartax_amex_logo.png`
},
{
    brandName: "Zee5 Blue Card Offer",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Zee5amex.jpg`,
    offerText: "Get 15% off on Zee5 annual subscription fee!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zee5amex-logo.jpg.png`
},
{
    brandName: "Ferns n Petals Blue Card Offer",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/FnPamexnew.jpg`,
    offerText: "Get 20% instant discount on Ferns n Petals!",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fnpamexlogo.jpg.png`
},
{
    brandName: "Zoom car",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/amex_zoomcar.jpg`,
    offerText: "Get flat Rs.500 off* across Zoomcar Pan India",
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zoomcar_logo.png`
}   
])
const [store,setStore] = useState([ groceryItems, shoppingItems, foodItems, megaSavingsItems,entertainment,firstpecashback,travel,cashback,reachargeAndBills,health,gaming,groceryStores,healthstores,infinitesavings,superChoice,restaurants,busTickets,shoppingStores,storesNearYou,services,newUserOffer,education,cashOnBackpack,superCashToWallet,loyalityRedumption,boxOffice,mobikwikBlueAmericanExpressCardItems] )
    return (
            <offerDetailsContext.Provider value={{globalStore:[store,setStore], sectionNames:[section]}}>
                {props.children}
            </offerDetailsContext.Provider>
    )
}

  
