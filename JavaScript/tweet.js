const form = document.querySelector(".main-box2-creater form"),
    tweetBtn = form.querySelector(".button input");

form.onsubmit = (e) => {
    e.preventDefault();
};

tweetBtn.onclick = () => {
    // AJAX request to submit the tweet
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/tweet.php", true);
    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var data = xhr.responseText;
            if (data.includes("success")) {
                // Update home.php content dynamically
                setTimeout(() => {
                    updateHomeContent();
                }, 500);
            } else {
                console.error("Tweet submission failed:", data);
            }
        }
    };
    var formData = new FormData(form);
    xhr.send(formData);
};

// Function to update home.php content
function updateHomeContent() {
    console.log("Updating home content.");
    var mainBox3A = document.querySelector('#main-box3-a');
    let textBox = document.querySelector('#text');
    var postContent = textBox.value;
    var postContainer = document.createElement('div');
    postContainer.classList.add('main-sub-box3', 'for-hover');

    // Variables assumed to be declared or passed as parameters
    var mediaType, fileSource, tweetMedia;

    var mediaHTML = '';
    if (mediaType && fileSource) {
        if (mediaType.startsWith('image/')) {
            mediaHTML = `<div class="tweet-media"><img src="${fileSource}"></div>`;
        } else if (mediaType.startsWith('video/')) {
            mediaHTML = `
      <div class="tweet-media" id="tweet-video">
        <video controls class="landscape portrait">
          <source src="${fileSource}" type="${mediaType}">
        </video>
      </div>`;
        }
    }

    postContainer.innerHTML = `<div class="tweet-container">
  <div class="dummy-tweet-box"></div>
  <article>
      <div class="tweet-box">
          <div class="tweet-sub-box">
              <div class="twitter-user-img">
                  <div class="user-img">
                      <img src="logo/dp-img3.jpg">
                  </div>
              </div>
              <div class="twitter-post-section">                             
                  <div class="tweet-user-box1">
                      <div class="tweet-row1">
                          <div class="tweet-u-b">
                              <div class="tweet-u-b1">
                                  <div class="t-u-a">
                                      <a href="#">
                                          <div class="a-user">
                                              <div><span>
                                                  Velina Tchakarova</span></div>
                                              <div><img src="logo/Blue-Tick.png" style="width:14px; height:14px; margin-left:4px;margin-right:4px;"></div>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="t-u-s">
                                      <span>@vtchakarova . 19h</span>
                                  </div>
                              </div>
                              <div class="tweet-u-b2" onclick="optionButton(this)">
                                  <i class="fa-solid fa-ellipsis-vertical fa-rotate-90"></i>
                              </div>
                          </div>
                      </div>
                      <div class="tweet-row2">
                          <div class="t-thought">
                              ${postContent}
                          </div>
                      </div>
                      ${mediaHTML}
                      <div class="activity-container">
                          <div class="activity-section">
                              <div class="react-box-card">
                                  <div class="react-section">
                                      <div class="react-container comment">
                                          <div class="react-icon"><i class="far fa-comment"></i></div>
                                          <div class="react-span"><span>1902</span></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="react-box-card">
                                  <div class="react-section">
                                      <div class="react-container retweet">
                                          <div class="react-box"><i class="fa-solid fa-retweet"></i></div>
                                          <div class="react-span"><span>1745</span></div>
                                      </div>
                                  </div>
                              </div>
                          <div class="react-box-card">
                              <div class="react-section">
                                  <div class="react-container like">
                                      <div class="react-box "><i class="fa-regular fa-heart"></i></div>
                                      <div class="react-span "><span>8902</span></div>
                                  </div>
                              </div> 
                          </div>
                          <div class="react-box-card">
                              <div class="react-container view">
                                  <div class="react-box"><i class="fa-solid fa-chart-simple"></i></div>
                                  <div class="react-span"><span>596.2k</span></div>
                              </div>
                          </div>
                              <div class="react-box-card share">
                                  <div class="react-container ">
                                      <div class="react-box"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  </article>
</div>`;

    mainBox3A.prepend(postContainer);
}
