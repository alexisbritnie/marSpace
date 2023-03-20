import { useState} from "react";
import { Link} from "react-router-dom";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function Dashboard(){
    return (
        <div class = "dash-full-screen-container">
        <div class="dashboard-container">
            <div class="side-bar-form" >
                <h1 class="dashboard-title">Dashboard</h1>
                
                <div class= "dash-profile-card">
                    <form>
                    <h1 class="dash-name">Britnie Alexis</h1>
                    </form>
                </div>

                <div class="dash-button">
                    <button type = "submit" >My Profile</button>
                </div>

                <div class="dash-button">
                    <button type = "submit" >Search</button>
                </div>

                <div class="dash-button">
                    <button type = "submit" >My Notes</button>
                </div>

                <div class="dash-button">
                    <button type = "submit" >Saved Materials</button>
                </div>
                <div class="dash-button">
                    <button type = "submit" >Settings</button>
                </div>
                
            </div>

            <div class="card-grid">
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/D9Zow2REm8U" />
                    CSIS2101</div>
                    <div class="dash-class-card-body"> fundementals of computer programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/95YRwf6CNw8" />
                    CSIS2101</div>
                    <div class="dash-class-card-body"> fundementals of computer programming</div>
                </div>
                <div class= "dash-class-cards">
                    <div class="dash-class-card-header card-image">
                    <img src="https://source.unsplash.com/95YRwf6CNw8" />
                    CSIS2101</div>
                    <div class="dash-class-card-body"> fundementals of computer programming</div>
                </div>
                
            </div>

        </div>
      </div>

    )
}