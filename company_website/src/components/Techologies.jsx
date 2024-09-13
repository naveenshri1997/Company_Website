import node from '../assets/tech/node.png'
import codeigniter from '../assets/tech/codeigniter.png'
import laravel from '../assets/tech/laravel.png'
import cakephp from '../assets/tech/cake.png'
import android from '../assets/tech/android.png'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import dart from '../assets/tech/dart.png'
import flutter from '../assets/tech/flutter.png'
import jquery from '../assets/tech/jquery.png'
import js from '../assets/tech/js.png'
import mongo from '../assets/tech/mongo.png'
import mysql from '../assets/tech/mysql.png'
import php from '../assets/tech/php.png'
import react from '../assets/tech/react.png'
import react_native from '../assets/tech/react_native.png'
import sql from '../assets/tech/sql.png'
import swift from '../assets/tech/swift.png'


const Technologies = () => {
    return (
        <>
            <div className="container-fluid technologies">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-3">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Frameworks</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                            type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Database</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                                            type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Laguages</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled"
                                            type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Others</button>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-9">
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                        <div className="row ">
                                            <div className="col-lg-12">
                                                <div className="row ">
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={node} width="60px" />
                                                                <h4 className="service_title">Node Js</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={codeigniter} width="60px" />
                                                                <h4 className="service_title">Codeigniter</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={laravel} width="60px" />
                                                                <h4 className="service_title">Laravel</h4>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={cakephp} width="60px" />
                                                                <h4 className="service_title">Cake Php</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                        <div className="row ">
                                            <div className="col-lg-12">
                                                <div className="row ">
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={sql} width="60px" />
                                                                <h4 className="service_title">Sql</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={mysql} width="60px" />
                                                                <h4 className="service_title">Mysql</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={mongo} width="60px" />
                                                                <h4 className="service_title">Mongo</h4>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row ">
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={html} width="60px" />
                                                                <h4 className="service_title">Html</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={css} width="60px" />
                                                                <h4 className="service_title">Css</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={jquery} width="60px" />
                                                                <h4 className="service_title">Jquery</h4>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={js} width="60px" />
                                                                <h4 className="service_title">JavaScript</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={react} width="60px" />
                                                                <h4 className="service_title">React</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={react_native} width="60px" />
                                                                <h4 className="service_title">React Native</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={swift} width="60px" />
                                                                <h4 className="service_title">Swift</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card_content">
                                                                <img src={php} width="60px" />
                                                                <h4 className="service_title">php</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="card">
                                                    <div className="card_content">
                                                        <img src={android} width="60px" />
                                                        <h4 className="service_title">Android Development</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="card">
                                                    <div className="card_content">
                                                        <img src={dart} width="60px" />
                                                        <h4 className="service_title">Dart</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="card">
                                                    <div className="card_content">
                                                        <img src={flutter} width="60px" />
                                                        <h4 className="service_title">Flutter</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Technologies;