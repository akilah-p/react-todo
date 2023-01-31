import { NavLink, Redirect, useParams } from 'react-router-dom';
import './Auth.css';
import { useState } from 'react';
import { authUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';