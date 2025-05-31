// script.js

// Data for course details
const coursesData = {
    'data-science': {
        title: 'Data Science Masterclass',
        description: 'This comprehensive course covers everything from data collection and cleaning to advanced machine learning models. You will learn Python, R, SQL, data visualization, statistical analysis, and various machine learning algorithms. Ideal for aspiring data scientists and analysts.',
        duration: '6 Months',
        fees: '$1200',
        instructor: 'Dr. Emily Chen',
        batch: 'July 15, 2024',
        learnings: [
            'Fundamentals of Python and R for Data Science',
            'Data Manipulation and Cleaning with Pandas/dplyr',
            'Statistical Analysis and Hypothesis Testing',
            'Machine Learning Algorithms (Regression, Classification, Clustering)',
            'Deep Learning Basics with TensorFlow/PyTorch',
            'Big Data Technologies (Hadoop, Spark)',
            'Data Visualization with Matplotlib, Seaborn, ggplot2',
            'SQL for Data Analysis'
        ],
        curriculum: [
            'Module 1: Introduction to Data Science & Python/R',
            'Module 2: Data Preprocessing & Exploratory Data Analysis',
            'Module 3: Statistical Foundations for Data Science',
            'Module 4: Machine Learning - Supervised Learning',
            'Module 5: Machine Learning - Unsupervised Learning',
            'Module 6: Introduction to Deep Learning',
            'Module 7: Big Data Ecosystem & Cloud Platforms',
            'Module 8: Capstone Project'
        ],
        prompt: 'Generate a concise, engaging, and slightly more detailed description for a "Data Science Masterclass" course. Highlight its benefits and target audience. Keep it under 150 words.'
    },
    'web-development': {
        title: 'Full Stack Web Development',
        description: 'Become a proficient full-stack developer capable of building robust and scalable web applications. This course covers front-end development (HTML, CSS, JavaScript, React) and back-end development (Node.js, Express) with database integration (MongoDB).',
        duration: '5 Months',
        fees: '$1000',
        instructor: 'Mr. Alex Rivera',
        batch: 'Aug 1, 2024',
        learnings: [
            'HTML5, CSS3, and Responsive Design',
            'Modern JavaScript (ES6+)',
            'React.js for Front-end Development',
            'Node.js and Express.js for Back-end APIs',
            'MongoDB for Database Management',
            'RESTful API Design and Integration',
            'Authentication and Authorization',
            'Deployment Strategies (Netlify, Heroku)'
        ],
        curriculum: [
            'Module 1: Front-end Fundamentals (HTML, CSS, JS)',
            'Module 2: Advanced JavaScript & DOM Manipulation',
            'Module 3: React.js - Components, State, Hooks',
            'Module 4: React.js - Routing & State Management',
            'Module 5: Node.js & Express.js - Server-side Programming',
            'Module 6: MongoDB - Database Integration',
            'Module 7: Authentication & Deployment',
            'Module 8: Final Project'
        ],
        prompt: 'Generate a concise, engaging, and slightly more detailed description for a "Full Stack Web Development" course. Highlight its benefits and target audience. Keep it under 150 words.'
    },
    'ai-ml': {
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Explore the fascinating world of AI and Machine Learning. This course delves into foundational concepts, advanced algorithms, and practical applications using Python and popular libraries like scikit-learn and TensorFlow.',
        duration: '7 Months',
        fees: '$1500',
        instructor: 'Dr. Sarah Lee',
        batch: 'Sep 10, 2024',
        learnings: [
            'Introduction to AI and ML Concepts',
            'Python for AI/ML (NumPy, Pandas, Matplotlib)',
            'Supervised Learning (Linear Regression, Logistic Regression, SVM, Decision Trees)',
            'Unsupervised Learning (K-Means, Hierarchical Clustering)',
            'Neural Networks and Deep Learning Fundamentals',
            'Convolutional Neural Networks (CNNs) for Image Processing',
            'Recurrent Neural Networks (RNNs) for Sequence Data',
            'Natural Language Processing (NLP) Basics'
        ],
        curriculum: [
            'Module 1: AI/ML Overview & Python Setup',
            'Module 2: Data Preprocessing & Feature Engineering',
            'Module 3: Supervised Learning Algorithms',
            'Module 4: Unsupervised Learning & Dimensionality Reduction',
            'Module 5: Deep Learning with TensorFlow/Keras',
            'Module 6: Computer Vision Applications',
            'Module 7: Natural Language Processing',
            'Module 8: AI/ML Project'
        ],
        prompt: 'Generate a concise, engaging, and slightly more detailed description for an "Artificial Intelligence & Machine Learning" course. Highlight its benefits and target audience. Keep it under 150 words.'
    },
    'digital-marketing': {
        title: 'Certified Digital Marketing Professional',
        description: 'Master the art of digital marketing and drive online growth. This course covers SEO, SEM, social media marketing, content marketing, email marketing, and analytics to build effective digital campaigns.',
        duration: '4 Months',
        fees: '$800',
        instructor: 'Ms. Olivia Brown',
        batch: 'Oct 5, 2024',
        learnings: [
            'Search Engine Optimization (SEO) Strategies',
            'Search Engine Marketing (SEM) & Google Ads',
            'Social Media Marketing (Facebook, Instagram, LinkedIn)',
            'Content Marketing & Strategy',
            'Email Marketing Automation',
            'Website Analytics with Google Analytics',
            'Conversion Rate Optimization (CRO)',
            'Mobile Marketing'
        ],
        curriculum: [
            'Module 1: Introduction to Digital Marketing',
            'Module 2: Search Engine Optimization (SEO)',
            'Module 3: Search Engine Marketing (SEM)',
            'Module 4: Social Media Marketing',
            'Module 5: Content Marketing & Strategy',
            'Module 6: Email Marketing & Automation',
            'Module 7: Web Analytics & Reporting',
            'Module 8: Digital Marketing Campaign Planning'
        ],
        prompt: 'Generate a concise, engaging, and slightly more detailed description for a "Certified Digital Marketing Professional" course. Highlight its benefits and target audience. Keep it under 150 words.'
    },
    'cloud-computing': {
        title: 'Cloud Computing Fundamentals',
        description: 'Gain a solid understanding of cloud computing concepts and popular platforms like AWS, Azure, and Google Cloud. Learn about cloud services, deployment models, and best practices for cloud infrastructure.',
        duration: '5 Months',
        fees: '$1100',
        instructor: 'Mr. David Kim',
        batch: 'Nov 1, 2024',
        learnings: [
            'Introduction to Cloud Computing & its Benefits',
            'Cloud Service Models (IaaS, PaaS, SaaS)',
            'Cloud Deployment Models (Public, Private, Hybrid)',
            'AWS Core Services (EC2, S3, RDS, VPC)',
            'Azure Fundamentals (Virtual Machines, Storage, Networking)',
            'Google Cloud Platform Basics (Compute Engine, Cloud Storage)',
            'Cloud Security Best Practices',
            'Cost Management in Cloud'
        ],
        curriculum: [
            'Module 1: Cloud Computing Overview',
            'Module 2: AWS Essentials',
            'Module 3: Microsoft Azure Basics',
            'Module 4: Google Cloud Platform Introduction',
            'Module 5: Cloud Security & Compliance',
            'Module 6: Cloud Networking & Storage',
            'Module 7: Serverless Computing',
            'Module 8: Cloud Migration Strategies'
        ],
        prompt: 'Generate a concise, engaging, and slightly more detailed description for a "Cloud Computing Fundamentals" course. Highlight its benefits and target audience. Keep it under 150 words.'
    },
    'ui-ux-design': {
        title: 'Professional UI/UX Design',
        description: 'Learn to design intuitive and engaging user interfaces (UI) and user experiences (UX) for web and mobile applications. This course covers design principles, wireframing, prototyping, and user testing.',
        duration: '4 Months',
        fees: '$950',
        instructor: 'Ms. Jessica Wong',
        batch: 'Dec 1, 2024',
        learnings: [
            'Fundamentals of UI/UX Design',
            'User Research & Persona Creation',
            'Information Architecture & Wireframing',
            'Prototyping with Figma/Adobe XD',
            'Usability Testing & Feedback Integration',
            'Visual Design Principles (Color, Typography, Layout)',
            'Interaction Design & Animation',
            'Design Systems & Accessibility'
        ],
        curriculum: [
            'Module 1: Introduction to UI/UX',
            'Module 2: User Research & Analysis',
            'Module 3: Information Architecture & Wireframing',
            'Module 4: Prototyping & User Flows',
            'Module 5: Visual Design & Branding',
            'Module 6: Interaction Design & Animation',
            'Module 7: Usability Testing & Iteration',
            'Module 8: Building a UI/UX Portfolio'
        ],
        prompt: 'Generate a concise, engaging, and slightly more detailed description for a "Professional UI/UX Design" course. Highlight its benefits and target audience. Keep it under 150 words.'
    }
};

// --- Navbar Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navbarLinks = document.getElementById('navbar-links');

mobileMenuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!navbarLinks.classList.contains('hidden')) {
            navbarLinks.classList.add('hidden');
        }
    });
});

// --- Course Detail Modal ---
const courseCards = document.querySelectorAll('.course-card');
const modal = document.getElementById('course-modal');
const closeButton = modal.querySelector('.close-button');

const modalCourseTitle = document.getElementById('modal-course-title');
const modalCourseDescription = document.getElementById('modal-course-description');
const modalCourseDuration = document.getElementById('modal-course-duration');
const modalCourseFees = document.getElementById('modal-course-fees');
const modalCourseInstructor = document.getElementById('modal-course-instructor');
const modalCourseBatch = document.getElementById('modal-course-batch');
const modalCourseLearnings = document.getElementById('modal-course-learnings');
const modalCourseCurriculum = document.getElementById('modal-course-curriculum');

// Elements for Gemini AI feature in course modal
const generateAiDescriptionButton = document.getElementById('generate-ai-description');
const aiLoadingSpinner = document.getElementById('ai-loading-spinner');
const aiDescriptionContainer = document.getElementById('ai-description-container');
const aiGeneratedDescription = document.getElementById('ai-generated-description');

let currentCoursePrompt = ''; // To store the prompt for the currently open course

courseCards.forEach(card => {
    card.addEventListener('click', () => {
        const courseId = card.dataset.courseId;
        const course = coursesData[courseId];

        if (course) {
            modalCourseTitle.textContent = course.title;
            modalCourseDescription.textContent = course.description;
            modalCourseDuration.textContent = course.duration;
            modalCourseFees.textContent = course.fees;
            modalCourseInstructor.textContent = course.instructor;
            modalCourseBatch.textContent = course.batch;

            // Store the prompt for AI generation
            currentCoursePrompt = course.prompt;

            // Clear previous list items for learnings
            modalCourseLearnings.innerHTML = '';
            course.learnings.forEach(learning => {
                const li = document.createElement('li');
                li.textContent = learning;
                modalCourseLearnings.appendChild(li);
            });

            // Clear previous list items for curriculum
            modalCourseCurriculum.innerHTML = '';
            course.curriculum.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                modalCourseCurriculum.appendChild(li);
            });

            // Hide AI generated description section when a new course modal opens
            aiDescriptionContainer.classList.add('hidden');
            aiGeneratedDescription.textContent = ''; // Clear previous AI text

            modal.classList.add('show');
        }
    });
});

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Close modal when Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Gemini API Integration for Course Description ---
generateAiDescriptionButton.addEventListener('click', async () => {
    if (!currentCoursePrompt) {
        aiGeneratedDescription.textContent = "No prompt available for this course.";
        aiDescriptionContainer.classList.remove('hidden');
        return;
    }

    // Show loading spinner
    aiLoadingSpinner.classList.remove('hidden');
    generateAiDescriptionButton.disabled = true; // Disable button during loading
    aiGeneratedDescription.textContent = ''; // Clear previous content
    aiDescriptionContainer.classList.add('hidden'); // Hide container until content is ready

    try {
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: currentCoursePrompt }] });
        const payload = { contents: chatHistory };
        const apiKey = ""; // Leave as empty string; Canvas will provide it at runtime
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            aiGeneratedDescription.textContent = `Error generating description: ${errorData.error?.message || response.statusText}`;
            aiDescriptionContainer.classList.remove('hidden');
            return;
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            aiGeneratedDescription.textContent = text;
            aiDescriptionContainer.classList.remove('hidden');
        } else {
            aiGeneratedDescription.textContent = "Could not generate a description. Please try again.";
            aiDescriptionContainer.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        aiGeneratedDescription.textContent = `An error occurred: ${error.message}. Please check your network connection or try again.`;
        aiDescriptionContainer.classList.remove('hidden');
    } finally {
        // Hide loading spinner and re-enable button
        aiLoadingSpinner.classList.add('hidden');
        generateAiDescriptionButton.disabled = false;
    }
});


// --- AI Chatbot Feature ---
const openChatbotFab = document.getElementById('open-chatbot-fab');
const chatbotModal = document.getElementById('chatbot-modal');
const closeChatbotButton = document.getElementById('close-chatbot-button');
const chatMessagesContainer = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChatButton = document.getElementById('send-chat-button');
const chatLoadingSpinner = document.getElementById('chat-loading-spinner');

let chatHistory = [{ role: "model", parts: [{ text: "Hello! I'm your Learn Ease AI Assistant. How can I help you today?" }] }];

// Function to add a message to the chat display
function addChatMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex', sender === 'user' ? 'justify-end' : 'justify-start');
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('p-3', 'rounded-xl', 'max-w-[80%]');
    bubbleDiv.classList.add(sender === 'user' ? 'bg-indigo-500', 'text-white' : 'bg-gray-200', 'text-gray-800');
    bubbleDiv.textContent = message;
    
    messageDiv.appendChild(bubbleDiv);
    chatMessagesContainer.appendChild(messageDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to bottom
}

// Function to send message to Gemini API for chatbot
async function sendChatMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    addChatMessage(userMessage, 'user');
    chatHistory.push({ role: "user", parts: [{ text: userMessage }] });
    chatInput.value = ''; // Clear input

    // Show loading spinner
    chatLoadingSpinner.classList.remove('hidden');
    sendChatButton.disabled = true;

    try {
        const payload = { contents: chatHistory };
        const apiKey = ""; // Leave as empty string; Canvas will provide it at runtime
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Chatbot API Error:', errorData);
            addChatMessage(`Error: ${errorData.error?.message || response.statusText}`, 'model');
            return;
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const aiResponse = result.candidates[0].content.parts[0].text;
            addChatMessage(aiResponse, 'model');
            chatHistory.push({ role: "model", parts: [{ text: aiResponse }] });
        } else {
            addChatMessage("I'm having trouble understanding. Can you rephrase?", 'model');
        }
    } catch (error) {
        console.error('Chatbot Fetch error:', error);
        addChatMessage(`An error occurred: ${error.message}. Please try again.`, 'model');
    } finally {
        // Hide loading spinner and re-enable button
        chatLoadingSpinner.classList.add('hidden');
        sendChatButton.disabled = false;
    }
}

// Event listeners for chatbot
openChatbotFab.addEventListener('click', () => {
    chatbotModal.classList.add('show');
});

closeChatbotButton.addEventListener('click', () => {
    chatbotModal.classList.remove('show');
});

// Close chatbot modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === chatbotModal) {
        chatbotModal.classList.remove('show');
    }
});

// Close chatbot modal when Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && chatbotModal.classList.contains('show')) {
        chatbotModal.classList.remove('show');
    }
});

sendChatButton.addEventListener('click', sendChatMessage);

chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
});

// --- Gemini API Integration for Course Recommendation ---
const getRecommendationsButton = document.getElementById('get-recommendations-button');
const interestInput = document.getElementById('interest-input');
const recommendationLoadingSpinner = document.getElementById('recommendation-loading-spinner');
const recommendationResults = document.getElementById('recommendation-results');
const recommendedCoursesList = document.getElementById('recommended-courses-list');
const recommendationError = document.getElementById('recommendation-error');

getRecommendationsButton.addEventListener('click', async () => {
    const userInterests = interestInput.value.trim();
    if (!userInterests) {
        recommendationError.textContent = "Please enter your interests or career goals.";
        recommendationError.classList.remove('hidden');
        recommendationResults.classList.add('hidden');
        return;
    }

    // Show loading spinner
    recommendationLoadingSpinner.classList.remove('hidden');
    getRecommendationsButton.disabled = true;
    recommendationResults.classList.add('hidden'); // Hide previous results
    recommendedCoursesList.innerHTML = ''; // Clear previous recommendations
    recommendationError.classList.add('hidden'); // Hide previous errors

    try {
        const availableCourses = Object.values(coursesData).map(course => ({
            title: course.title,
            description: course.description,
            learnings: course.learnings
        }));

        const prompt = `Given the user's interests/career goals: "${userInterests}", recommend 1-3 courses from the following list that are most relevant. For each recommended course, provide its exact title and a brief reason for the recommendation (1-2 sentences). If no courses are suitable, state that.

Available Courses:
${JSON.stringify(availableCourses, null, 2)}

Format your response as a numbered list of recommendations.`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = ""; // Leave as empty string; Canvas will provide it at runtime
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Recommendation API Error:', errorData);
            recommendationError.textContent = `Error getting recommendations: ${errorData.error?.message || response.statusText}`;
            recommendationError.classList.remove('hidden');
            return;
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const aiResponse = result.candidates[0].content.parts[0].text;
            
            // Display recommendations
            const recommendations = aiResponse.split('\n').filter(line => line.trim() !== '');
            if (recommendations.length > 0) {
                recommendations.forEach(rec => {
                    const li = document.createElement('li');
                    li.textContent = rec;
                    recommendedCoursesList.appendChild(li);
                });
                recommendationResults.classList.remove('hidden');
            } else {
                recommendedCoursesList.textContent = "No specific recommendations at this time. Please try different interests.";
                recommendationResults.classList.remove('hidden');
            }
            
        } else {
            recommendedCoursesList.textContent = "Could not generate recommendations. Please try again.";
            recommendationResults.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Recommendation Fetch error:', error);
        recommendationError.textContent = `An error occurred: ${error.message}. Please check your network connection or try again.`;
        recommendationError.classList.remove('hidden');
    } finally {
        // Hide loading spinner and re-enable button
        recommendationLoadingSpinner.classList.add('hidden');
        getRecommendationsButton.disabled = false;
    }
});
