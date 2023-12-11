document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드된 후 실행할 코드

    // 애니메이션 효과를 위한 클래스 추가
    document.querySelector(".animation-container").classList.add("animate-in");
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드된 후 실행할 코드

    // 애니메이션 효과를 위한 클래스 추가
    document.querySelector(".animated-title").classList.add("animate-in");
    document.querySelector(".animated-image").classList.add("animate-in");
    document.querySelectorAll(".animated-text").forEach(function(text) {
        text.classList.add("animate-in");
    });

    // 나머지 코드는 그대로 유지
});
