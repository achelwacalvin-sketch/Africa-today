// ========================================
// 🌍 AFRICA TODAY - MAIN JAVASCRIPT
// ========================================

// ---------- MOBILE MENU ----------
function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("show");
    }
}


// ---------- DARK MODE ----------
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Remember the user's choice
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("africaTodayDarkMode", "on");
    } else {
        localStorage.setItem("africaTodayDarkMode", "off");
    }
}


// Load saved dark-mode setting
if (localStorage.getItem("africaTodayDarkMode") === "on") {
    document.body.classList.add("dark-mode");
}


// ---------- SEARCH NEWS ----------
function searchNews() {
    const input = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".news-card");
    const noResults = document.getElementById("noResults");

    if (!input) return;

    const searchTerm = input.value.toLowerCase().trim();
    let found = 0;

    cards.forEach(function(card) {
        const title = (
            card.getAttribute("data-title") || ""
        ).toLowerCase();

        const category = (
            card.getAttribute("data-category") || ""
        ).toLowerCase();

        const text = card.textContent.toLowerCase();

        if (
            searchTerm === "" ||
            title.includes(searchTerm) ||
            category.includes(searchTerm) ||
            text.includes(searchTerm)
        ) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (noResults) {
        noResults.style.display =
            found === 0 ? "block" : "none";
    }

    // Show latest-news section
    const latest = document.getElementById("newsGrid");

    if (latest && searchTerm !== "") {
        latest.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ---------- CATEGORY FILTER ----------
function filterCategory(category) {
    const cards = document.querySelectorAll(".news-card");
    const noResults = document.getElementById("noResults");

    let found = 0;

    cards.forEach(function(card) {
        const cardCategory = (
            card.getAttribute("data-category") || ""
        ).toLowerCase();

        if (cardCategory === category.toLowerCase()) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (noResults) {
        noResults.style.display =
            found === 0 ? "block" : "none";
    }

    const newsGrid = document.getElementById("newsGrid");

    if (newsGrid) {
        newsGrid.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ---------- SHOW ALL NEWS ----------
function showAllNews() {
    const cards = document.querySelectorAll(".news-card");
    const noResults = document.getElementById("noResults");
    const searchInput = document.getElementById("searchInput");

    cards.forEach(function(card) {
        card.style.display = "";
    });

    if (noResults) {
        noResults.style.display = "none";
    }

    if (searchInput) {
        searchInput.value = "";
    }

    const newsGrid = document.getElementById("newsGrid");

    if (newsGrid) {
        newsGrid.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ---------- OPEN ARTICLE ----------
function openStory(slug) {

    const articles = {
        featured: "articles/featured.html",
        kenya: "articles/kenya-developments.html",
        africa: "articles/africa-news.html",
        sports: "articles/sports-news.html",
        business: "articles/business-news.html",
        technology: "articles/technology-news.html",
        culture: "articles/culture-news.html"
    };

    if (articles[slug]) {
        window.location.href = articles[slug];
    } else {
        alert(
            "Africa Today\n\n" +
            "Article coming soon."
        );
    }
}


// ---------- VIDEO ----------
function playVideo() {
    alert(
        "🎥 Africa Today Video\n\n" +
        "The video player section is ready. " +
        "We will connect it to real news videos next."
    );
}


// ---------- NEWSLETTER ----------
function subscribe() {
    const emailInput =
        document.getElementById("emailInput");

    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Basic email check
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(
        "🎉 Thank you for subscribing to Africa Today!\n\n" +
        "You'll be notified when new stories are available."
    );

    emailInput.value = "";
}


// ---------- BREAKING NEWS ----------
const breakingStories = [
    "Kenya developments and the latest national stories.",
    "Top African stories and developments from across the continent.",
    "Business and economic news shaping Africa.",
    "Technology and innovation changing African communities.",
    "The latest African sports stories and results.",
    "Culture, entertainment and important stories from Africa."
];

let storyIndex = 0;

function updateBreakingNews() {

    const breakingText =
        document.getElementById("breakingText");

    if (!breakingText) return;

    breakingText.textContent =
        breakingStories[storyIndex];

    storyIndex =
        (storyIndex + 1) % breakingStories.length;
}


// Start breaking-news rotation
updateBreakingNews();

setInterval(
    updateBreakingNews,
    5000
);


// ---------- CLOSE MOBILE MENU ----------
document.addEventListener("click", function(event) {

    const nav = document.getElementById("mainNav");
    const menuButton =
        document.querySelector(".menu-btn");

    if (!nav || !menuButton) return;

    if (
        nav.classList.contains("show") &&
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        nav.classList.remove("show");
    }
});


// ---------- CLOSE MENU AFTER CLICKING A LINK ----------
document.addEventListener("DOMContentLoaded", function() {

    const links =
        document.querySelectorAll("#mainNav a");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            const nav =
                document.getElementById("mainNav");

            if (nav) {
                nav.classList.remove("show");
            }

        });

    });

});
