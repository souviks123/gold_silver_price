# Metal Rates App

A mobile-friendly React web app to display live precious metal rates.

## Features

- 📱 Mobile-responsive design
- 🔄 Real-time metal rate updates
- 💰 Displays Gold, Silver, Platinum, Palladium, and more
- 🌐 API integration with metals.dev
- 🔐 Environment variable for API key
- ⚡ Fast and lightweight

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
REACT_APP_METAL_API_KEY=your_api_key_here
REACT_APP_METAL_API_URL=https://api.metals.dev/
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
MetalRatesApp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MetalRateItem.jsx
│   │   ├── MetalRateItem.css
│   │   ├── MetalRatesList.jsx
│   │   └── MetalRatesList.css
│   ├── services/
│   │   └── metalApi.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
└── package.json
```

## API

The app uses the [metals.dev API](https://metals.dev) to fetch live metal rates in INR per gram.
