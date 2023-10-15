import React from 'react'
import API from "../API";
import { useSelector ,useDispatch} from "react-redux";


const Header = () => {
  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });

  return (
    <div className="text-[#FFFEEC] flex justify-between w-[100%] bg-indigo-300 p-2 rounded-md text-lg">
        <div className="Right">
            Question N°{`${API[Stats.Value].Numero}`}
        </div>

        <div className="Left">
            {`${API[Stats.Value].Type}`}
        </div>
    </div>
  )
}

export default Header