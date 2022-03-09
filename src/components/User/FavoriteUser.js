import React from 'react';
import { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import axios from 'axios';

import DeleteUser from './DeleteUser';

export default function FavoriteUser() {

	const config = { headers: { Accept: 'application/json', Authorization: 'Bearer 1MKl2KScejiFK35UC3hF' } };
	const apiUrl = 'https://jsonplaceholder.typicode.com/users';


    const localFavorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

    const [user, setUser] = useState([]);

	function getUsers() {
		if (user.length === 0 || !user) {
			// checks if array is already filled to not make too many calls
			axios.get(`${apiUrl}`, config).then((r) => setUser(r.data.docs));
		}
	}


    const [favorites, setFavorites] = useState(localFavorites);
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

    function addToFavorites(user) {
		setFavorites(favorites.concat([user]));
	}


    function removeFromFavorites(favorite) {
		setFavorites(
			favorites.filter(function (us) {
				return us._id !== favorite._id;
			})
		);
	}

	function containsCharacter(us, favorites) {
		let i;
		for (i = 0; i < favorites.length; i++) if (favorites[i]._id === us._id) return true;
		return false;
	}

    function Favorites() {
		return (
			<div>
				{favorites.map((favorite) => {
					return (
                        <button type="secondary" onPress={() => removeFromFavorites(favorite)}>
                        delete
                        </button>
					);
				})}
			</div>
		);
	}

	
	return (
		favorites.map(favorite => 
			<div className='randomuser-row'>
			<div>
				<p>
					<span className='items-list'>
					<BsFillPersonFill className='icon-randomuser'/> {favorite.name} 
					</span>
					<span className='items-list'>
					<MdOutlineLocationCity className='icon-randomuser'/> {favorite.email} 
					</span>
					<span className='items-list'>
					<AiFillPhone className='icon-randomuser'/> {favorite.phone} 
					</span>
				</p> 

			</div>
			<div className='icons'>
				<DeleteUser />
				<button type="primary"
						disabled={containsCharacter(user, favorites)}
						onPress={() => addToFavorites(user)} >
				</button>
			</div>
		</div> 
		)
	)

}