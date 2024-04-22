


function EjemploCount () {


    const [count, setCount] = useState(0)




    return (<div>

        <p>{count}</p>



        <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>


)

}