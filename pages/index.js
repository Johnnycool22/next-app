import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { resolve } from 'styled-jsx/css';

class IndexPage extends Component {
    static getInitialProps(context) {
        console.log(context);
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({appName: 'Super App'});
                }, 1000);
            });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p>Go To <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push()}>Go To Auth</button>
            </div>
        );
    }
}

export default IndexPage;