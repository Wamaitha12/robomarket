import React, { useState } from 'react';
import './Items.css';

const Items = () => {

  const [showWarningPopup, setShowWarningPopup] = useState(false);

  const calculatePriceInKES = (usdPrice, exchangeRate) => {
    return (usdPrice * exchangeRate).toFixed(2);
  };

  const botData = [
    {
      name: 'Auto C4 VOLT',
      description: 'Auto C4 VOLT is a fully automated trading bot known for its exceptional accuracy. It is designed to make trading as effortless and profitable as possible. Experience the power of automation with Auto C4 VOLT.',
      imageSrc: 'Images/pic8.jpg', 
      price: '800usd',
      phoneNumber: '0794432921',
    },
    {
      name: 'New C4 Version 3.1',
      description: 'New C4 Version 3.1 is a powerful trading bot designed to enhance your trading experience. With a wide range of features, it provides automation and precision like never before.',
      price: '500Usd',
      imageSrc: 'Images/pic6.jpg', 
      phoneNumber: '0794432921',
    },
    {
      name: 'New C4 Version 3.0',
      description: 'New C4 Version 3.0 is an advanced trading bot designed to boost your trading capabilities. Unlock the potential for profitable trades with New C4 Version 3.0.',
      price: '300usd',
      imageSrc: 'Images/pic7.jpg', 
      phoneNumber: '0794432921',
    },
    {
      name: 'Export Trader Bot',
      description: 'The Export Trader Bot is your key to unlocking new trading opportunities in the global market. It comes equipped with features that can help you trade with precision and confidence.',
      price: '250usd',
      imageSrc: 'Images/pic5.jpg', 
      phoneNumber: '0794432921',
    },
  ];

  const exchangeRate = 158;

  // Function to handle the purchase action
  const handlePurchase = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert('Phone number copied. Please paste the phone number in m-pesa to purchase.');
    });
  };

  // Reviews and Ratings
  const [reviews, setReviews] = useState([
    { text: "I've been trading with the Auto C4 VOLT bot and the results are unbelievable! The accuracy and precision of its trades have exceeded my expectations.", author: 'MARK MUTUMA', rating: 5 },
    { text: "New C4 Version 3.1 has consistently delivered winning trades for me over the past month. The level of consistency is remarkable it's a strategic partner that understands the market dynamics.", author: 'TRACY GATHONI', rating: 4 },
    { text: "Smart investing made easy! The New C4 Version 3.0 bot has simplified my trading journey while delivering impressive returns. It's user-friendly, powerful, and the results speak for themselves.", author: 'TONY NDEGWA', rating: 3 },
    { text: "Using the Export Trader Bot has made trading both effortless and highly profitable. The automation is seamless, and I've experienced a significant boost in my trading performance.", author: 'John MACHARIA', rating: 5 },
  ]);

  const handleRatingChange = (index, newRating) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].rating = newRating;
    setReviews(updatedReviews);
  };

  //warning popup
  const handleWarningClick = () => {
    setShowWarningPopup(true);
  };

  const handleClosePopup = () => {
    setShowWarningPopup(false);
  };

  return (
    <div>
      {/* Welcome Message and Terms */}
      <div className="welcome-message">
        <p className='p'>
          Hello and welcome. You are cordially welcomed to participate in my mentorship programme. Because it's a binary bot, you'll need to set up a deriv account. You can do so by clicking this link {''}
          <a href='https://track.deriv.com/_TH5LC8pLrKFBMfcXPt5VjGNd7ZgqdRLk/1/' target={'_blank'} rel='noopener noreferrer'>DERIV.</a>
        </p>
        <p>
          ... LET'S WIN TOGETHER 💪💪💪💯💯💯</p>
        </div>

     {/* Bots Section */}
      <div className="Items flex gap-10 justify-center flex-wrap items-center py-10">
        <div className="bot-info">
          <span className='yoh'></span>
          <p className='h1'>
            Experience the future of productivity with our innovative bots. Unlock your full potential and let automation             work for you.
          </p>
        </div>
        {botData.map((bot, index) => (
          <div className="bot-card" key={index}>
            <img src={bot.imageSrc} alt={bot.name} className="bot-image" />
            <h2 className="bot-name">{bot.name}</h2>
            <p className="bot-description">{bot.description}</p>
            <h2
              className='bot-name'>{bot.price} ({calculatePriceInKES(parseFloat(bot.price), exchangeRate)} KES)
            </h2>
            <button className="bot-button" onClick={() => handlePurchase(bot.phoneNumber)}>Purchase</button>
          </div>
        ))}
      </div>

      
       {/* Terms */}
      <div className="welcome-message">
      <p className='warning' onClick={handleWarningClick}>
          Click for the TERMS AND CONDITIONS
        </p>
      </div>

      {showWarningPopup && (
        <div className='popup'>
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p className='popup-ish'>
             TERMS AND CONDITIONS
          <br />
          Trading is a risky business. Take good risk management as I will guide you, exercise caution while trading and only invest what you can afford to lose. I will not be responsible for loss of funds in the market.
          The software has been custom made for you and therefore cannot be refunded.
          The software can only be used for one account.

          If you agree with the above terms, you can proceed with the purchase and start trading immediately. Let me know where you need help.
        </p>
          </div>
        </div>
      )}


      {/* Reviews Section */}
      <div id='reviews' className='reviews'>
        <h2 className='review-heading'>Customer Reviews</h2>
        
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <p className="review-text">{review.text}</p>
            <div className="rating">
              <p className="review-author">- {review.author}</p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= review.rating ? 'filled' : ''}`}
                    onClick={() => handleRatingChange(index, star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div id="about" className="about">
        <h2 className='us'>About Us</h2>
        <p className='p'>We provide innovative and intelligent trading bots designed to help you achieve your financial goals efficiently and effectively.</p>
        <p className='p'>Your financial well-being is our top priority. We encourage you to <b>TRADE RESPONSIBLY!!</b> and stay informed about the market.</p>
      </div>
    </div>
  );
};

export default Items;

