import API from "../API";

export let UserSelecOption=(Qu,In)=>
{
    return{
        type:"Selected",
        payload:{
            Qu,
            In
        }
    }
}

export let Inc=()=>
{
    return{
        type:"Inc"
    }
}
export let Dec=()=>
{
    return{
        type:"Dec"
    }
}
export let Random=()=>
{
    return{
        type:"Random"
    }
}
export let ShowResult=()=>
{
    return{
        type:"ShowResult"
    }
}