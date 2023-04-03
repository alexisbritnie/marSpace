import { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react';




export default function Dashboard(){
    const navigate = useNavigate();
    const navigateToProfile = () => {navigate('/profile')};
    const navigateToNotes = () => {navigate('/notes')};
    const navigateToSavedMaterials = () => {navigate('/materials')};
    const navigateToSettings = () => {navigate('/settings')};
    const navigateToSearch  = () => {navigate('/search')}

    return (
        <div class = "dash-full-screen-container">
        <div class="dashboard-container">
        <div class="card-grid">
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/95YRwf6CNw8" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/95YRwf6CNw8" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS 2101</div>
                    <div class="dash-class-card-body"> Fundementals of Computer Programming</div>
                </div>
                
            </div>
            <div class="side-bar-form" >
                <h1 class="dashboard-title">Dashboard</h1>
                
                <div class= "dash-profile-card">
                    <form>
                    <h1 class="dash-name">Britnie Alexis</h1>
                    </form>
                </div>

                <div class="dash-button">
                <button type = "submit" onClick={navigateToProfile}>My Profile</button>
                </div>

                <div class="dash-button">
                <button type = "submit" onClick={navigateToNotes}>My Notes</button>
                </div>

                <div class="dash-button">
                <button type = "submit" onClick={navigateToSavedMaterials}>Favorites</button>
                </div>
                <div class="dash-button">
                <button type = "submit" onClick={navigateToSettings}>Search</button>
                </div>
                <div class="dash-button">
                    <button type = "submit" onClick={navigateToSettings}>Logout</button>
                </div>
                
            </div>

            

        </div>
      </div>

    )
}