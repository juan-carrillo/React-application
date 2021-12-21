import React, { Component } from 'react';
import PostPreview from './PostPreview';

class Container extends Component {
    render() {
        return (
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <PostPreview title='Man must explore, and this is exploration at its greatest'
                         subtitle='Problems look mighty small from 150 miles up'
                         meta={{author: 'Start Bootstrap', format_date: 'September 24, 2021'}} />

                        <hr className="my-4" />
                        <PostPreview title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                         meta={{author: 'Start Bootstrap', format_date: 'September 18, 2021'}} />

                        <hr className="my-4" />

                        <PostPreview title='Science has not yet mastered prophecy'
                         subtitle='We predict too much for the next year and yet far too little for the next ten.'
                         meta={{author: 'Start Bootstrap', format_date: 'August 24, 2021'}} />

                        <hr className="my-4" />

                        <PostPreview title='Failure is not an option'
                         subtitle='Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
                         meta={{author: 'Start Bootstrap', format_date: 'July 8, 2021'}} />

                        <hr className="my-4" />

                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container
