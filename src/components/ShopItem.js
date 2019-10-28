import React,{ useState, useEffect } from 'react';

const ShopItem = ({match}) => {

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchItem();
    },[]);
    
    const fetchItem = async() => {
        setIsLoading(true);
        const id = match.params.id;
        let data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
        let item = await data.json();
        console.log(item);
        setItem(item);
        setIsLoading(false);
    }

    const ItemDetail = () => 
            <div>
                <h1>{ item.name }</h1>
                <p>$: { item.cost }</p>
                <p>Rarity: { item.rarity }</p>
                {item.images && (
                    <img width="300px" alt="Image description" src={ item.images.information }></img>
                    
                )}
            </div>
    

    return(
        <React.Fragment>
            {isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                   <ItemDetail />
                )
            }
        </React.Fragment>
    )
}

export default ShopItem;