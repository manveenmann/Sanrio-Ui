const Hero=()=>{
    return (
        <main className="Hero container">
        <div className="hero-image">
        <img  className="photo"
        src="/images/center.PNG" alt="main"/>
        <img className="photo"
        src="/images/second.PNG" alt="s_main"/>
        </div>
        
        <div className="hero-content">
        <div  className="heading_1">
        <h3>
        FRESHLY PICKED
        </h3>
        </div>
        
       < div>
       <h1 className="heading_2" >
        -Hello Kitty Tomato 35mm Camera-
        </h1>
       </div>
        
        <p className="para">
        Live your tomato girl fantasy with Hello Kitty! 
        
        </p>
        <div className="hero-button">
        </div>
        
        <p className="para1">
        
        From your bruschetta to your caprese, 
        capture 
        </p>
        <p className="para2">
        
     every memory of your favorite 
        summer dinners .
        </p>
        <div className="hero-button">
        <button className="button_below">
            SHOP THE LATEST:-
        </button>
        </div>
        <div className="payment">
        <img
        src="/images/payment.PNG "alt="icon"/>
            <p>
            ©2024 SANRIO CO.,LTD.All Rights Reserved.
            </p>
        </div>
       

        </div>

        </main>


    );
}


export default Hero