import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Shop = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchItems = async() => {
            setIsLoading(true);
            const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
            const items = await data.json();
            setData(items.items);
            setIsLoading(false);
        }
        fetchItems();
    }, []);

    

    return(
        <div>
            {isLoading ? (
                    <h3>Loading...</h3>
            ): (
                <React.Fragment>
                    <h3>{ data.length } Items</h3>
                    <ul>
                    { 
                        data.map(item => (
                        
                            <li key={ item.itemid }>
                                <Link to={ `/shop/${item.itemid}` } >{ item.name }</Link>
                            </li>
                            
                        ))
                    }
                    </ul>
                </React.Fragment>
            )
            }
        </div>
    )

}


export default Shop;