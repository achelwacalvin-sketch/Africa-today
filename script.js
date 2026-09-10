
// ==============================
// AFRICA TODAY
// Website JavaScript
// ==============================

// Explore Latest News
function exploreNews() {
    document.querySelector(".section").scrollIntoView({
        behavior: "smooth"
    });
}

// Read More buttons
function readArticle(category) {
    alert(
        "Africa Today\n\n" +
        "You selected: " + category + "\n\n" +
        "More stories in this category will appear here."
    );
}

// Subscribe button
function subscribe() {
    alert(
        "Thank you for subscribing to Africa Today! 🌍"
    );
}

// Breaking news rotation
const breakingStories = [
    "Stay updated with the latest stories from Kenya.",
    "Discover important developments across Africa.",
    "African sports and business stories coming your way.",
    "Technology and innovation are transforming Africa."
];

let storyIndex = 0;

function updateBreakingNews() {
    const breakingText = document.getElementById("breakingText");

    if (breakingText) {
        breakingText.textContent =
            breakingStories[storyIndex];

        storyIndex =
            (storyIndex + 1) % breakingStories.length;
    }
}

// Change breaking story every 4 seconds
setInterval(updateBreakingNews, 4000);
