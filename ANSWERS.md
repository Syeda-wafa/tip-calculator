# ANSWERS.md

# 1. How to Run

Install dependencies:

npm install

Run development server:

npm run dev

Then open:
http://localhost:5173

---

# 2. Stack & Design Choices

I used React with Vite because React makes it easy to manage live state updates and Vite provides a fast development environment.

Design Decisions:

1. I used preset tip buttons with an active highlighted state so users can quickly select common percentages without typing.

2. I used card-based result sections to visually separate the calculations and improve readability on both mobile and desktop screens.

---

# 3. Responsive & Accessibility

On a 360px mobile screen, the layout becomes vertically stacked and buttons resize to fit smaller widths.

On a 1440px desktop screen, the calculator stays centered with a fixed max-width for better readability.

Accessibility:

- Added labels for all inputs
- Used visible focus states
- Used keyboard-friendly buttons and inputs

Skipped:
I did not implement full screen-reader announcements for validation messages due to time limitations.

---

# 4. AI Usage

I used ChatGPT to:

- Improve validation logic
- Refine responsive CSS
- Structure the React component

One AI-generated suggestion used fixed-width layouts. I changed it to responsive flex/grid layouts so the UI adapts properly on smaller mobile screens.

---

# 5. Honest Gap

One area that could be improved is adding animations and unit tests.

With another day, I would:

- Add smoother transitions
- Improve accessibility further
- Add test coverage using React Testing Library
