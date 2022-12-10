import { FunctionComponent } from "react";
import YouTube from "react-youtube";
import { MovieTrailer } from "../../type";
import { MdClose } from 'react-icons/md';
import {BsFillPlayFill} from "react-icons/bs";

const PopupTrailer: FunctionComponent<{
  trailerMovie: MovieTrailer;
  showDetail: null | string,
  setShowDetail: (key: string | null) => void;

}> = ({
  trailerMovie: { key },
  showDetail,
  setShowDetail,
}) => {

  const keyTrailer: any = key
    return (
      <div>
        <button className="p-3 cursor-pointer align-self-center" onClick={() => setShowDetail(keyTrailer)}>
          <div className="flex">
            <BsFillPlayFill size={25} color={"#fff"}/>
            <p className="font-semibold text-white text-md">play trailer</p>
          </div>
        </button>
        {showDetail === key && (
          <div className="absolute left-0 z-10 grid w-full h-full p-2 text-black rounded-lg top-3 bg-dark-500">
            {key ? (
              <YouTube
                videoId={key}
                className={"youtube amru"}
                opts={
                  {
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                      origin: 'http://localhost:3000'
                    },
                  }
                }
              />
            ) : null}
            <button onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
              <MdClose size={30} />
            </button>
          </div>
        )}
      </div>
    )
  }

export default PopupTrailer
