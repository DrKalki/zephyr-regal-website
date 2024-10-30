// Function to fetch and render the Markdown content
async function loadMarkdown() {
    try {
        const response = await fetch('story.md');
        const markdown = await response.text();
        const htmlContent = marked.parse(markdown);
        document.getElementById('content').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading the story:', error);
        document.getElementById('content').innerHTML = '<p>Sorry, the story could not be loaded at this time.</p>';
    }
}

// Load the Markdown content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadMarkdown);