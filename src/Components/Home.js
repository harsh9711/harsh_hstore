import React from 'react';
import IntroVideo from './Intro';
import Footer from './Footer';
import '../Styles/Home.css'; // Import your CSS file
const Home = () => {
  return (
    <div className="page-container">
   <div className="logo">
        <img src="/Users/harshsahcdeva/Desktop/demo/project1/src/assets/download.png"/>
    </div>

    <div className="content-container">
    <IntroVideo/> 
    <div className="background-image"></div>
    <div className="fade-in-image">
      <div className="headings">
        <div className="heading1"><h1>Boost your liquidity</h1></div>
        <div className="heading2">
        <h5>First ever Lending protocol on Fuel Network</h5>
        <div className="button primary">
        <span>App</span>
        <img src="https://static.tildacdn.com/tild6439-6430-4738-a338-623832393134/arrow-up-right.svg" className="images"/>
        </div>
        </div>
        </div> 
      </div>   
    <div className="card-container">
              <div className="card">
              <img src="https://static.tildacdn.com/tild6434-3437-4237-a435-373538663033/shield-tick.svg" alt="do"/>
                <h2>Security</h2>
                <p>Sway Lend uses a consensus algorithm and stores data on the Ethereum blockchain. This ensures the safety of your assets.</p>
              </div>
              <div className="card">
              <img src="https://static.tildacdn.com/tild3766-6666-4434-b962-663632303962/zap-fast.svg" alt="do"/>
                <h2>Speed</h2>
                <p>You are not limited in the number of transactions. One cent and $10,000,000 are transferred a second.</p>
              </div>
              <div className="card">
              <img src="	https://static.tildacdn.com/tild3530-3633-4362-b163-336239653834/palm.svg" alt="do"/>
                <h2>Sway Language</h2>
                <p>Sway prioritizes compile-time analysis and safety, similar to Rust’s borrow checker and safety-first semantics. Additionally, it has the syntax of Rust.</p>
              </div>
            </div>
            <div className="thirdslide">
            
                <div className="fuel">
                    <h2>Fuel is the future of DeFi</h2>
                    <p>Fuel is the fastest modular execution layer in the Ethereum Ecosystem</p>
                    <div className="button secondary">
        <span>More about Fuel</span>
        <img src="https://static.tildacdn.com/tild6439-6430-4738-a338-623832393134/arrow-up-right.svg" className="images"/>
        </div>
                </div>
                <div className="thirdslide1">
                    <div className="imagesdir"><img src="	https://thumb.tildacdn.com/tild6237-3161-4761-b861-633762633565/-/format/webp/03-1-squashed.png"/></div>
                    <div className="headears">
                        <h2>Parallel transaction execution</h2>
                        <p>Fuel can check to monitor user access lists using multithreaded processes. This allows maximum use of CPU resources for off-chain operations. As a result, parallel transactions on Fuel maximize available processing power and detection bandwidth significantly more efficiently than their single-threaded counterparts.</p>
                    </div>
                </div>
                <div className="thirdslide1">
                <div className="imagesdir"><img src="https://thumb.tildacdn.com/tild6435-3465-4135-b835-336639613236/-/format/webp/02-squashed.png"/></div>
                    <div className="headears">
                        <h2>Fuel Virtual Machine (FuelVM)</h2>
                        <p>The FuelVM is designed for multi-witness, multi-input, and multi-output transactions. It enables different sig-hash states. A transaction can include various native assets, giving the developers far more options at the transaction level. Modular Execution Layers can better capitalize on high shared data availability</p>
                    </div>
                </div>
                <div className="thirdslide1">
                <div className="imagesdir"><img src="https://thumb.tildacdn.com/tild3036-3235-4835-b035-616537616631/-/format/webp/01-squashed.png"/></div>
                    <div className="headears">
                        <h2>Ethereum Consensus</h2>
                        <p>Fuel uses Eth consensus algorithms and Ethereum's data warehouse, proven over the years. This ensures the reliability of the protocols and the highest security of user assets.</p>
                    </div>
                </div>
                </div>
                <div className="intro1"> <IntroVideo/> </div>
              <div className="background-image"></div>
                <div className="fourthslide">
                <div className="introvideo2-center">
                    <h2>Battle tested solution</h2>
                    <p>Fuel Network brings Compound protocol to a completely performance level</p>
                    <div></div>
                    <div className="button secondary">
        <span>App</span>
        <img src="https://static.tildacdn.com/tild6439-6430-4738-a338-623832393134/arrow-up-right.svg" className="images"/>
</div>
                </div>
                </div>
                <div className="footers">
                </div>
                </div>
                 <Footer/>
    </div>
  ); 
};

export default Home;
