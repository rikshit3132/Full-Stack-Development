# Lazy Loading

Lazy loading means loading a component **only when it is needed** (when user visits that route).

## Without Lazy Loading (Normal Behavior)

### When your app loads
Home + About + Dashboard + Profile **all load at once**, even if user only visits `/`.

### This makes your app:
- Heavy  
- Slow to load initially

## With Lazy Loading

- User visits `/` → Only Home loads  
- User visits `/about` → About loads then

### Load only what is required

## Why Lazy Loading is Used (Optimization)

**Problem:**  
Big apps = many pages = large bundle size  

Example:  
Dashboard, Settings, Profile, Admin panel → All loading at once = slow

**Solution:**  
Lazy loading splits code into smaller chunks

**Result:**  
- Faster initial load  
- Better performance  
- Better user experience

## Real Example (React Router + Lazy)

```jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy loaded components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}