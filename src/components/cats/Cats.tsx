import {IconButton} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

type CatsPropsType ={
    idx:string
    url:string
    height: number
    width: number
    addFavoritesCats: (isActiveBtn:boolean,url:string)=>void
    favorites:boolean
}

const Cats = ({idx,url,height,width,addFavoritesCats,favorites}:CatsPropsType) => {
    const onClickBtnHandler = () =>{
        addFavoritesCats(favorites,url)
    }
    return (
        <div>
            <div style={{position: 'relative', width: 'fit-content', display: 'inline-block'}}>
                <img style={{width: 300, height: 300}} key={idx} src={url} height={height} width={width}/>
                <div style={{height: 20, width: 20, position: 'absolute', bottom: 25, right: 20}}>
                    <IconButton onClick={onClickBtnHandler}>
                        {
                            favorites
                                ? <FavoriteIcon color={ 'error'}/>
                                : <FavoriteBorderIcon   color={ 'error'}/>
                        }
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Cats;