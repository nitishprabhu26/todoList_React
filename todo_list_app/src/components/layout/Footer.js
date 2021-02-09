import React from 'react'

// similar to render
export default function Header() {
    return (
        <footer style={footerStyle}>
            <div>
                <ul>
                    <li>If you are interested in my work or if you like to collaborate or just say hello, feel free to contact me ♥️</li>
                </ul>
                <ul>
                    <li>Copyrights &copy; 2021. All rights reserved.</li>
                    <li>Design by <a title="Nitish - LinkedIn" href="https://www.linkedin.com/in/NitishPrabhuKota/" target="_blank" rel="noreferrer" style={{color:"#F06000"}}>Nitish Prabhu Kota</a></li>
                </ul>
            </div>
        </footer>
    )
}

const footerStyle = {
    background: '#333',
    color: 'darkgray',
    textAlign: 'center',
    padding: '10px',
    position: "absolute",
    width: "100%"
  }

  
