/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
	  return (
		      <div className="bg-black">
		        <nav className="border-b p-6">
				  <div className="flex flex-row justify-left">
					<div><img src="squirt-game-logo.png" alt="logo" width="200" height="100" /></div>
					<div><p className="text-4xl font-bold text-white p-6 thisText" style={{fontFamily:'gotham rounded,sans-serif'}}>SQUIRT NFT Marketplace </p></div>
		          </div>
				  <div className="flex mt-4"  style={{fontFamily:'gotham rounded,sans-serif'}}>
		            <Link href="/">
		              <a className="mr-4 text-white thisText" >
		                Home
		              </a>
		            </Link>
		            <Link href="/create-item">
		              <a className="mr-6 text-white thisText">
		                Create New NFT
		              </a>
		            </Link>
		            <Link href="/my-assets">
		              <a className="mr-6 text-white thisText">
		                Purchased NFT Assets
		              </a>
		            </Link>
		            <Link href="/creator-dashboard">
		              <a className="mr-6 text-white thisText">
		                Creator Dashboard
		              </a>
		            </Link>
		          </div>
		        </nav>
		        <Component  className="bg-black" {...pageProps} />
		      </div>
		    )
}

export default MyApp
