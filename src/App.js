import React from 'react';
import './App.css'; // Custom styles
import { SearchIcon, MarkGithubIcon, ThreeBarsIcon } from '@primer/octicons-react';
import { Helmet } from 'react-helmet';
import {ThemeProvider, BaseStyles} from '@primer/react'



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">Home</div>
      <div className="sidebar-item">Trending</div>
      <div className="sidebar-item">Subscriptions</div>
      <div className="sidebar-item">Library</div>
      <div className="sidebar-item">History</div>
      {/* Add more sidebar items as needed */}
    </div>
  );
}

function VideoThumbnails() {
  return (
    <div className="video-thumbnails">
      {/* Dummy video thumbnails */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="video-thumbnail">
          <video width="300" height="200" controls poster={`https://picsum.photos/300/200?random=${index}`}>
            Your browser does not support the video tag.
          </video>
          <div className="video-info">
            <h3>Video Title {index + 1}</h3>
            <p>Description of Video {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App ">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@primer/css/dist/index.css" />
      </Helmet>

      <header className="App-header  align-items-center justify-content-between">
        <div className=" align-items-center">
          <ThreeBarsIcon size={16} />
          <img
            src="https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720950_1280.png"
            alt="YouTube Logo"
            className="navbar-logo"
            style={{ width: '120px', height: '40px', marginLeft: '8px' }}
          />
        </div>
        <div className=" align-items-center">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
            style={{ borderRadius: '5px', marginRight: '8px' }}
          />
          <SearchIcon size={20} className="mx-2" />
          <MarkGithubIcon size={30} />
        </div>
      </header>

      
      <ThemeProvider>
      <BaseStyles>
      <div className="d-flex">
        
        <VideoThumbnails />
        <Sidebar />
      </div>
      </BaseStyles>
    </ThemeProvider>
    </div>
  );
}

export default App;
