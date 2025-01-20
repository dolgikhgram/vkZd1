import Cats from "../cats/Cats.tsx";
import InfiniteScroll from "react-infinite-scroller";
import {useState} from "react";
import {CatsType} from "../../types/types.ts";
import { Typography} from "@mui/material";

type AllCatsPropsType = {
    setCats: (data:Array<CatsType>) => void
    cats:Array<CatsType>
    addFavoritesCats: (isActiveBtn:boolean,url:string)=>void
    favoritesCats: Array<string>
}

const AllCats = ({cats,setCats,addFavoritesCats,favoritesCats}: AllCatsPropsType) => {

    const [hasMore, setHasMore] = useState<boolean>(true);
    const loadMore=(page: number)=> {
        fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=10&page=${page}`)
            .then(response => response.json())
            .then(data  => {
                setCats(data)
                data.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <InfiniteScroll
                style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4, marginTop: 15, position:'relative'}}
                loadMore={loadMore}
                hasMore={hasMore}
                pageStart={0}
                loader={
                    <div style={{position:"absolute", bottom:0, left: '45%'}}>
                        <Typography>...загружаем ещё котиков...</Typography>
                    </div>
                }
            >
                {
                    cats.map((cat, idx)=>{
                        return(
                            <Cats
                                idx={cat.url} key={idx}
                                url={cat.url} height={cat.height}
                                width={cat.width} addFavoritesCats={addFavoritesCats}
                                favorites={favoritesCats.includes(cat.url)}/>
                        )
                    })
                }
            </InfiniteScroll>
        </div>
    );
};

export default AllCats;