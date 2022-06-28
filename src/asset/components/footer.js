import React from "react";

const Footer=()=> {
    return (
        <div className="App bg-dark">
            <center>
                <footer className="bg-dark text-center text-white fixed-bottom">
                    <div className='text-center p-2 bg-dark' >
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a className='text-white' >
                            Game Square
                        </a>
                    </div>
                </footer>
            </center>
        </div>
    );
}
export default Footer;