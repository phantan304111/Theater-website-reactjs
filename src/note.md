 const [isDetail,setDetail] = useState(false)
 
const [state,dispatch] = useStore()
{isDetail && <MoviesDetail />}

https://api.themoviedb.org/3//movie/62c8561de8d028004f17fe04/videos?api_key=9129f64928c1203ff0ce3b6a2bd5d64e

                <img  onClick={()=> {dispatch(add(`${pathImg}${item.backdrop_path }`))
              
                setDetail(true)} }
                  src={`${pathImg}${item.backdrop_path }`}
                  alt={item.name ? item.name : item.title}
                />
              </div>
            ))}
            {isDetail && <MoviesDetail data={state} />}