import React, { useEffect, useState } from "react";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec, UserSelecOption, Random, ShowResult } from "../Reducer/Actions";

const Question = () => {
  let [State, setState] = useState(null);
  let [Index, setIndex] = useState(null);
  let [Res,setRes]=useState(null);

  let Dispatch = useDispatch();
  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });
  let StatsTwo = useSelector((Stat) => {
    return Stat.ReducerTwo;
  });

  useEffect(() => {
    if (Stats.UserArray[Stats.Value] != null) {
      setIndex(Stats.UserArray[Stats.Value]);
      setState(true);
    } else {
      setState(false);
      setIndex(null);
    }
  });

  return (
    <div>
      <div className="text-[#141414] p-3 my-2 rounded-md flex flex-col gap-8">
        <div className="Ask font-bold">
          {`${API[Stats.Value].Question}`}
        </div>

        <div className="Reponse group relative py-4">
          {`${API[Stats.Value].Reponse}`}
          <div className="absolute w-[100%] h-[100%] top-0 bg-lime-300/50 backdrop-blur rounded-md group-hover:hidden italic flex justify-center items-center">Montrer la réponse</div>
        </div>
      </div>
      <div className="Buttons flex w-[100%] justify-between space-x-2">
        <div
          onClick={() => {
            Dispatch(Dec());
          }}
          className="B1 bg-orange-300 w-[50%] p-2 rounded-md cursor-pointer text-center"
        >
          Précédent
        </div>
        <div
          onClick={() => {
            Dispatch(Random());
          }}
          className={`B2 ${
            Stats.Value != API.length - 1
              ? "text-center block bg-orange-300 w-[50%] p-2 rounded-md cursor-pointer"
              : "hidden"
          }`}
        >
          Suivant
        </div>
      </div>
      </div>
      );
  };

export default Question;
