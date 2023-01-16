import Header from './Header'
import Members from './Members'

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Members />
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;