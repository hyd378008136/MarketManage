import React, {Component} from 'react'
import {render}  from 'react-dom';
import classnames  from 'classnames';
import { Link} from '../../reactRouter';


import {Icon,Badge} from 'antd';
//style
import './nav.less';

class Nav extends Component{
    constructor(props){
        super(props)
        this.slideToggle = this.slideToggle.bind(this);
    }

    slideToggle(event){
        console.log(this)
    }

    render(){
        return (
                <ul className="nav">
                    {
                        this.props.navArr.map(item =>
                            item.isCat ?
                            <li className="nav__cat" key={item.label.toString()}>{item.label}</li> :
                            <li className="nav__item" key={item.label.toString()}>
                                <Link to={item.href} activeClassName="nav__link--active" className={classnames('nav__link',{'has-subnav':item.children})} onClick={this.slideToggle}><Icon type={item.icon} />{item.label}</Link>
                                {item.children &&
                                    <ol className="subnav">
                                    {item.children.map(item =>
                                        <li className="subnav__item" key={item.label.toString()}>
                                            <Link to={item.href} className="subnav__link" activeClassName="nav__link--active">{item.label}</Link>
                                        </li>
                                )}
                                    </ol>
                                }
                            </li>
                        )
                    }
                </ul>
        );
    }
}

Nav.defaultProps = {
    navArr:[
        {
            label: '首页',
            icon: 'inbox',
            href:'/'
        },        

    ]
}

export default Nav;