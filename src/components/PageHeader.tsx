import * as React  from 'react'
import './pageHeader.scss'
import { Link } from 'react-router-dom';



export class PageHeader extends React.PureComponent {
    render(){
        return <div className="page-header">
            {/* <div className="page-header-wrapper">
                <div className="page-header-brand">
                   
                </div>
                <div className="page-header-menu">
                </div>
            </div> */}
            <Link to="/about">about</Link>
            <Link to="/topics">topics</Link>
        </div>
    }
}

`
    @media screen and (min-width:1200px);
   
`