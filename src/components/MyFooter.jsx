

const MyFooter = () => {
    return(
        <footer>
            <div className="d-flex justify-content-around ">
               <div className="d-flex flex-column"> <a href="#">Address</a>
                <p>10 Downing Street <br />
                    LONDON  <br />
                    SW1A 2AA
                </p>
               </div>
               <div className="d-flex flex-column">
                <a href="#">Contact Us</a>
                <p>strivebooks@gmail.com <br />
                   strivebooks@facebook.com<br />
                   strivebooks@twiter.com 
                </p>
                </div>
                <div className="d-flex flex-column">
                <a href="#">About Us</a>
                <p>
                    We are proud books <br />
                    Store and we have been <br />
                    sense 1998 and we still are 
                </p>
                </div>
            </div>
        </footer>
    )


}

export default MyFooter

