# 🕒 Time Tracker Pie Chart App 🥧

This is a simple yet effective time tracking application that allows users to log their daily activities and the hours spent on each, visualizing the data in an interactive pie chart. The application persists data using the browser's local storage.

---

## 🚀 Features

- 📝 **Log Activities:** Add new activities with corresponding hours.
- 🎨 **Custom Colors:** Choose a unique color for each activity to easily distinguish them in the chart.
- 📊 **Interactive Pie Chart:** View a visual breakdown of your time distribution.
- 💾 **Persistent Storage:** Your tracked data is saved in `localStorage`, so you won't lose it on refresh.
- 🧮 **Total Hours Calculation:** See the total number of hours you've logged.
- ⚠️ **Over-tracking Warning:** Get a friendly warning if you log more than 24 hours in a day.

---

## 🛠️ Technologies Used

- ⚛️ **React**: A JavaScript library for building user interfaces.
- ⚡ **Vite**: A modern, fast frontend build tool.
- ⌨️ **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- 💨 **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- 📈 **Chart.js & react-chartjs-2**: For rendering responsive and interactive charts.
- 🧩 **shadcn/ui**: Used for the base Button and Input components.

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kishore0765/Time-Tracker-Pie-Chart.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd "Day 3 - Build a Time Tracker Pie Chart App"
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal) to see the app in action.

---

## 🔧 How It Works

The application is built around a few core React concepts:

-   🧠 **State Management**: The `Home.tsx` component uses `useState` to manage the list of activities (`data`) and the total hours.

-   🏗️ **Component Structure**:
    -   `App.tsx`: The main entry point that renders the `Home` page.
    -   `pages/Home.tsx`: The main page component that holds the application logic, state, and renders the form and chart.
    -   `components/ui/TimeForm.tsx`: A form for users to input their activity, hours, and select a color.
    -   `components/TimeChart.tsx`: A component that takes the activity data and renders a pie chart using `react-chartjs-2`.

-   💾 **Data Persistence**: The `useEffect` hook in `Home.tsx` is used to:
    1.  Load saved activities from `localStorage` when the component mounts.
    2.  Save the current list of activities to `localStorage` whenever the `data` state changes. This ensures that your tracked time is not lost between sessions.
