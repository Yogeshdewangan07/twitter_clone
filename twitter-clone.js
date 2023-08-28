var mainBox3 = document.getElementById('main-box3');

var mainSection = document.getElementById('main-section');

var navOpt1 = document.getElementById('nav-opt1');
navOpt1.addEventListener('click', changeTab1);
function changeTab1(e) {
    var thirdBox = mainSection.lastElementChild.previousElementSibling;
    var fourthBox = mainSection.lastElementChild;
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    thirdBox.style.removeProperty('display');
    fourthBox.style.display = 'none';
    option1.classList.add('for-border');
    option2.classList.remove('for-border');
}


var navOpt2 = document.getElementById('nav-opt2');
navOpt2.addEventListener('click', changeTab2);
function changeTab2(e) {
    var fourthBox = mainSection.lastElementChild;
    var thirdBox = mainSection.lastElementChild.previousElementSibling;
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    thirdBox.style.display = 'none';
    fourthBox.style.removeProperty('display');
    thirdBox.style.removeProperty('border-bottom');
    option2.classList.add('for-border');
    option1.classList.remove('for-border');
}


var mainBox2Creater = document.getElementById('main-box2-creater');
var writeContainer = mainBox2Creater.firstElementChild.firstElementChild;
var mediaContainer = mainBox2Creater.lastElementChild.firstElementChild;
var textAreaContainer = mainBox2Creater.firstElementChild.lastElementChild;

textAreaContainer.addEventListener('click', function (e) {
    var textAreaFirstChild = textAreaContainer.firstElementChild;
    var textAreaSecondChild = textAreaContainer.lastElementChild;
    writeContainer.style.removeProperty('display');
    mediaContainer.style.removeProperty('display');
    textAreaFirstChild.style.display = 'none';
    textAreaSecondChild.style.removeProperty('display');
});


var tweetBox = document.getElementById('tweet-box');
var createPost = document.getElementById('create-post');
var mainBox3A = document.getElementById('main-box3-a');
var tweetButton = document.getElementById('tweet-button');
var tweetRow2 = document.getElementsByClassName('tweet-row2');
var textArea = document.getElementById('text-area');
var textBox = document.getElementById('text');

var fileSource;
var mediaType;
var inputMedia = document.getElementById('input-media');

inputMedia.addEventListener('change', (e) => {
    var tweetMedia = document.createElement('div');
    tweetMedia.classList.add('tweet-media');

    selectedFile = e.target.files[0];
    mediaType = selectedFile.type;

        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                fileSource = e.target.result;
                tweetMedia.appendChild(imgElement);
            };
            var icon = document.createElement('i');
            icon.classList.add('fa-regular', 'fa-circle-xmark');
            var crossBtn = document.createElement('div');
            crossBtn.classList.add('crossBtn');
            crossBtn.appendChild(icon);
            crossBtn.addEventListener('click', function () {
                createPost.removeChild(tweetMedia);
            });
            tweetMedia.appendChild(crossBtn);

            createPost.appendChild(tweetMedia);
            reader.readAsDataURL(selectedFile);
        } else if (selectedFile.type.startsWith('video/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const vedioElement = document.createElement('video');
                vedioElement.src = e.target.result;
                fileSource = e.target.result;
                vedioElement.controls = 'true';
                tweetMedia.appendChild(vedioElement);
            };

            var icon = document.createElement('i');
            icon.classList.add('fa-regular', 'fa-circle-xmark');
            var crossBtn = document.createElement('div');
            crossBtn.classList.add('crossBtn');
            crossBtn.appendChild(icon);
            crossBtn.addEventListener('click', function () {
                createPost.removeChild(tweetMedia);
            });
            tweetMedia.appendChild(crossBtn);

            createPost.appendChild(tweetMedia);
            reader.readAsDataURL(selectedFile);
        }
  });


tweetButton.addEventListener('click', function () {
    var postContent = textBox.innerHTML;
    var postContainer = document.createElement('div');
    postContainer.classList.add('main-sub-box3', 'for-hover');
    
    var mediaHTML = '';
    if (mediaType == 'image/jpeg' || mediaType == 'image/png') {
        mediaHTML = `
            <div class="tweet-media">
                <img src=${fileSource}>
            </div>`;
    } else if (mediaType == 'video/mp4' || mediaType == 'video/quicktime' || mediaType == 'image/webp') {
        mediaHTML = `
        <div class="tweet-media" id="tweet-video">
        <video controls class="landscape portrait">
        <source src=${fileSource} type="video/mp4">
        </video>
        </div>`;
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
    writeContainer.style.display = 'none';
    mediaContainer.style.display = 'none';
    createPost.style.display = 'none';
    textAreaContainer.firstElementChild.style.removeProperty('display');
});

var customContainer = document.getElementById('custom-container');
var parentElement;
var articleElement;
function optionButton(e) {
    articleElement = e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    parentElement = articleElement.parentNode.parentNode;
    articleElement.classList.add('article');
    articleElement.appendChild(customContainer);
    parentElement.classList.add('delete');
    customContainer.style.removeProperty('display');
}

var crossIcon = document.getElementById('cross-icon');
function closeTab(e) {
    parentElement.classList.remove('delete');
    customContainer.style.display = 'none';
    articleElement.classList.remove('article');
    articleElement.removeChild(customContainer);
}

function deletePost(e) {
    const children = mainBox3A.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('delete')) {
            mainBox3A.removeChild(children[i]);
            break;
        }
    }
    customContainer.style.display = 'none';
}