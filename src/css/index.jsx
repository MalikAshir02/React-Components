
import './style.css';
import Button from './ReuseComponent.jsx'
function Hello() {

    
    return (

        <>

        <style>
            {`
                .red{
                    background-color:red;
                    color:green;
                    font-weight:bold;
                }

            `}

            
        </style>



            {/*  inline css */}

            <h1 style={{backgroundColor:"red",color:'black',display:'flex',}}>Hello World</h1>

            <p className="red">This is a internal Css</p>


            <div>
                <Button text='Save'/>
                <Button text='Edit'/>
            </div>

        </>
    )




}


export default Hello

export function ExportFunction(){
    return(
        <>
        <h1>this is export function</h1>
        </>
    )
}


