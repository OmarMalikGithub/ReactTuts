const AnApp = () => {

    

    const address = {
        forename:"Omar",
        surname: "Malik",  
        line1: "Qa Lid",
        line2: "London",
        zip: "1LL CY4"
    }

    
    return(

        <div>
        <h1>{address.forename}</h1>
        <h1>{address.surname}</h1>
        <h1>{address.line1}</h1>
        <h1>{address.line2}</h1>
       <h1>{address.zip}</h1>
        </div>

    );
    }
export default AnApp;
