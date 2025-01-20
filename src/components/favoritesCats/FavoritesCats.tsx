import Cats from "../cats/Cats.tsx";

type FavoritesCatsPropsType = {
    favoritesCats: Array<string>
    addFavoritesCats: (isActiveBtn:boolean,url:string)=>void
}

const FavoritesCats = ({favoritesCats,addFavoritesCats}: FavoritesCatsPropsType ) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4, marginTop: 15}}>
                {
                    favoritesCats.map(cat=>{
                        return (
                            <Cats
                                idx={cat} key={cat}
                                url={cat} height={200}
                                width={200} addFavoritesCats={addFavoritesCats}
                                favorites={favoritesCats.includes(cat)}/>
                        )
                    })
                }
        </div>
    );
};

export default FavoritesCats;