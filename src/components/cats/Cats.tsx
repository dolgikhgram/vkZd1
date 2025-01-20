import {Box, CircularProgress, IconButton} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ReactEventHandler, useState} from "react";

type CatsPropsType ={
    idx:string
    url:string
    height: number
    width: number
    addFavoritesCats: (isActiveBtn:boolean,url:string)=>void
    favorites:boolean
}

const Cats = ({idx,url,height,width,addFavoritesCats,favorites}:CatsPropsType) => {
    const [onLoad, setOnLoad] = useState(false);
    const onClickBtnHandler = () =>{
        addFavoritesCats(favorites,url)
    }
    const imgOnLoadHandler :  ReactEventHandler<HTMLImageElement> | undefined = () =>{
        setOnLoad(true)
    }
    return (
        <div>
            <div style={{position: 'relative', width: 'fit-content', display: 'inline-block', marginBottom:'20px'}}>
                <img  onLoad={imgOnLoadHandler} style={{width: 300, height: 300, opacity: !onLoad ? '0%' : '100%'}} key={idx} src={url} height={height} width={width}/>
                {
                    onLoad
                        ? ''
                        :
                        <Box style={{height: 50, width: 50, position: 'absolute', bottom: '40%', right: '40%'}}>
                            <CircularProgress/>
                        </Box>
                }
                <div style={{height: 20, width: 20, position: 'absolute', bottom: 25, right: 20}}>
                    <IconButton onClick={onClickBtnHandler}>
                        {
                            favorites
                                ? onLoad && <FavoriteIcon color={'error'}/>
                                : onLoad && <FavoriteBorderIcon   color={ 'error'}/>
                        }
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Cats;