# Creative Audio JS 🎹

An experimental, generative music laboratory built with **Tone.js**, **Vite**, and **Docker**. This project allows for real-time audio synthesis and algorithmic composition directly in the browser.

## 🚀 Local Development (WSL2 + Docker)

This project is optimized for a **Windows Subsystem for Linux (WSL2)** environment using Docker to ensure audio-engine consistency.

### 1. Prerequisites

* **WSL2** (Ubuntu recommended)
* **Docker Desktop** (with WSL2 backend enabled)
* **VS Code** (with the WSL extension)

### 2. Setup & Installation

Clone the repository to your WSL home directory:

```bash
git clone https://github.com/kelvinbward/creativeAudioJS.git
cd creativeAudioJS

```

### 3. Launching the Lab

Run the following command to build the image and start the container:

```bash
docker-compose up --build

```

### 4. Accessing the App

Once the container is running, Vite will serve the application at:
👉 **[http://localhost:5173](https://www.google.com/search?q=http://localhost:5173)**

---

## 🛠️ Tech Stack

* **Audio Engine:** [Tone.js](https://tonejs.github.io/) - A framework for creating interactive music in the browser.
* **Build Tool:** [Vite](https://vitejs.dev/) - Next-generation frontend tooling for instant HMR (Hot Module Replacement).
* **Environment:** [Docker](https://www.docker.com/) - Containerization for development parity.
* **Deployment:** [GitHub Actions](https://github.com/features/actions) - Automated CI/CD pipeline for GitHub Pages.

---

## 🏗️ Project Structure

```text
.
├── .github/workflows/  # CI/CD deployment logic
├── src/                # Source code
│   └── main.js         # The main audio signal chain & logic
├── index.html          # Entry point
├── Dockerfile          # Container configuration
├── docker-compose.yml  # Local orchestration
└── vite.config.js      # Base path config for GH Pages

```

---

## 📦 Deployment (GitHub Pages)

This project is configured to deploy automatically via GitHub Actions.

1. Every push to the `main` branch triggers the `.github/workflows/deploy.yml` workflow.
2. Vite builds the production assets into the `/dist` folder.
3. The assets are pushed to the `gh-pages` branch and served live.

**Live Demo:** `https://kelvinbward.github.io/creativeAudioJS/`

---

## 🧪 Experiments included

* **Step Sequencer:** A 16-step rhythmic clock.
* **Effects Rack:** Real-time Distortion and Feedback Delay units.
* **Signal Visualization:** A real-time oscilloscope visualizer (Canvas API).

---

### How to use this

1. Open your project in **VS Code** (connected to WSL).
2. Open your `README.md` file.
3. Delete everything and paste the content above.
4. Run:
```bash
git add README.md
git commit -m "docs: finalized project readme"
git push origin main

```