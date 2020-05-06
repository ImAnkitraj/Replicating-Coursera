import React from 'react'

export default function Carousel() {
    return (
        // <!--Carousel Wrapper-->
    <div class='carousel-container'>
        <h1>From the Coursera community</h1>
        <h4>45+ million people are already learning on Coursera</h4>
        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
            {/* <!--Indicators--> */}

            {/* <!--/.Indicators--> */}
        
            {/* <!--Slides--> */}
            <div class="carousel-inner desktop" role="listbox">
            
                {/* <!--First slide--> */}
                <div class="carousel-item active col-sm-12">
                    <div class="col-md-4 col-sm-12" style={{float:"left"}}>
                        <div class="card mb-2">
                            <img class="card-img-top"
                                src="img/car2.png" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><strong>Kara A. <br /></strong><p><em>iMBA Graduate, University of illinois Gies College of Business<br/>United States</em></p><hr/></h4>
                                <p class="card-text">"It's a really big deal to offer an online MBA that's a <strong>real MBA at a price that's achievable.</strong> This program is totally disrupting higher education."</p>
                            </div>
                        </div>
                    </div>
            
                    <div class="col-md-4 col-sm-12" style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car1.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Julio R.<br /></strong><p><em>Web Developer<br/> Chile</em></p><hr/></h4>
                            <p class="card-text">I started at stage zero. With Coursera I was able to start learning online and eventually build up enough knowledge and skills to <strong>transition into a well-paying career. </strong></p>
                        </div>
                        </div>
                    </div>
            
                    <div class="col-md-4 col-sm-12" style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car3.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Mirela I.<br /></strong><p><em>IBM Data Science Professional Certifucate Alumna<br/>Romania</em></p><hr/></h4>
                            <p class="card-text"><strong>"Recuruiters saw my Professional Certificate</strong> on my Linkedin profile. During the interview, they told me <strong>they were impressed with the skills I learned.</strong> I got the job!"</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!--/.First slide--> */}
            
                {/* <!--Second slide--> */}
                <div class="carousel-item">
                    <div class="col-md-4 col-sm-12" style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car4.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Sabrina M.<br/></strong><p><em>HR Manager, ZS Associates<br/>United States</em></p><hr/></h4>
                            <p class="card-text">"We were looking for scale credibility, and something we didn't have to build in-house. Coursera not only offers <strong>training from very prestigious institutions </strong>but also a platform that allows you to do the tracking that you want."</p>
                        </div>
                        </div>
                    </div>
                
                    <div class="col-md-4 col-sm-12" style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car2.png" alt="Card image cap"/>
                            <div class="card-body">
                                <h4 class="card-title"><strong>Kara A. <br /></strong><p><em>iMBA Graduate, University of illinois Gies College of Business<br/>United States</em></p><hr/></h4>
                                <p class="card-text">"It's a really big deal to offer an online MBA that's a <strong>real MBA at a price that's achievable.</strong> This program is totally disrupting higher education."</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-md-4 col-sm-12" style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car1.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Julio R.<br /></strong><p><em>Web Developer<br/> Chile</em></p><hr/></h4>
                            <p class="card-text">I started at stage zero. With Coursera I was able to start learning online and eventually build up enough knowledge and skills to <strong>transition into a well-paying career. </strong></p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!--/.Second slide--> */}
            </div>
            
            {/* <!--Controls--> */}
            <div class="controls-top">
                <a class="carousel-control-prev" href="#multi-item-example" data-slide="prev"><span className='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>
                <a class="carousel-control-next" href="#multi-item-example" data-slide="next"><span className='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a>
            </div>
            {/* <ol class="carousel-indicators">
                <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example" data-slide-to="1"></li>
            </ol> */}
            {/* <!--/.Controls--> */}
            {/* <!--/.Slides--> */}
        </div>
        {/* <!--/.Carousel Wrapper--> */}
        <div id="single-item-example" class="carousel slide " data-ride="carousel">
            <div class="carousel-inner mobile" role="listbox">        
                {/* <!--First slide--> */}
                <div class="carousel-item active">
                    <div class="col-md-4 " style={{float:"left"}}>
                        <div class="card mb-2">
                            <img class="card-img-top"
                                src="img/car2.png" alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><strong>Kara A. <br /></strong><p><em>iMBA Graduate, University of illinois Gies College of Business<br/>United States</em></p><hr/></h4>
                                <p class="card-text">"It's a really big deal to offer an online MBA that's a <strong>real MBA at a price that's achievable.</strong> This program is totally disrupting higher education."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="col-md-4" style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car1.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Julio R.<br /></strong><p><em>Web Developer<br/> Chile</em></p><hr/></h4>
                            <p class="card-text">I started at stage zero. With Coursera I was able to start learning online and eventually build up enough knowledge and skills to <strong>transition into a well-paying career. </strong></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="col-md-4 " style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car3.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Mirela I.<br /></strong><p><em>IBM Data Science Professional Certifucate Alumna<br/>Romania</em></p><hr/></h4>
                            <p class="card-text"><strong>"Recuruiters saw my Professional Certificate</strong> on my Linkedin profile. During the interview, they told me <strong>they were impressed with the skills I learned.</strong> I got the job!"</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!--/.First slide--> */}
            
                {/* <!--Second slide--> */}
                <div class="carousel-item">
                    <div class="col-md-4 " style={{float:"left"}}>
                        <div class="card mb-2">
                        <img class="card-img-top"
                            src="img/car4.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title"><strong>Sabrina M.<br/></strong><p><em>HR Manager, ZS Associates<br/>United States</em></p><hr/></h4>
                            <p class="card-text">"We were looking for scale credibility, and something we didn't have to build in-house. Coursera not only offers <strong>training from very prestigious institutions </strong>but also a platform that allows you to do the tracking that you want."</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!--/.Second slide--> */}
            </div>
            <div class="controls-top">
                <a class="carousel-control-prev" href="#single-item-example" data-slide="prev"><span className='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>
                <a class="carousel-control-next" href="#single-item-example" data-slide="next"><span className='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a>
            </div>
        </div>
    </div>
    );
}
