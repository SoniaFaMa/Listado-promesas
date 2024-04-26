    import { useState } from "react"
    
// Para paginar
        // Cuando yo le de al boton siguiente, nos mostrara los usuarios o lo que sea de la pagina 2
        // Hacer el boton
        // Cuando pulsemos el boton salga el console.log

        export default function EjemploCount () {

            const names = ['David', 'Sonia', 'Perro Sanchez']
            const otherNames = ['Puigdemont', 'Junqueras', 'Pere Aragones']


            // variable, funcion con la que cambiamos la variable. useState(VALOR INICIAL DE LA VARIABLE)
            const [superNames, setSuperNames] = useState([])
            // Con los setters. Cambias el valor de la variable asociada Y VUELVE A EJECUTAR EL COMPONENTE
            // superNames = ['David', 'Sonia', 'Perro Sanchez']
            const [count, setCount] = useState(0)

            useEffect(() => {
                setSuperNames(names)
            }, [])

            function sumar(){

                setCount(count+1)



            }

            function menos(){

                setCount(count-1)

                if(count===0){
                    setCount(count)
                }

            }

            function printNames () {
                alert('HOLA CARACOLA')
                setSuperNames(otherNames)
            }
    
        
            return (
            
            <div>
                
                <button onClick={sumar}>Mas</button>
                <div>{count}</div>
                <button onClick={menos}>Menos</button>
                <button onClick={printNames}>Pintar a los catalanes como el PSG en champions</button>
                {superNames.map(name => {

                    return (<div>{name}</div>)
                })}

        
                
    
            </div>
        
        
            )
        


        }



        // Todo esto en un componente que se llame Contador y se invoque desde el componente App (Este en el que estamos)
        // Contador
        // Quiero 2 botones
        // Quiero que aparezca como numero inicial el 1 en pantalla
        // Cuando le de al boton Mas aparecera en pantalla el 2..el 3..
        // Cuando le de al boton Menos aparecera uno menos...si el numero es cero, que no baje de ahi

