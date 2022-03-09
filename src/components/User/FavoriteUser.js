import React from 'react';
import { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

import DeleteUser from './DeleteUser';

export default function FavoriteUser() {

    const localFavorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

    const [user, setUser] = useState([]);

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
		for (i = 0; i < favorites.length; i++) if (favorites[i]._id === char._id) return true;
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
					<BsFillPersonFill className='delete-icon'/> {user.name} 
					</span>
					<span className='items-list'>
					<MdOutlineLocationCity className='delete-icon'/> {user.email} 
					</span>
					<span className='items-list'>
					<AiFillPhone className='delete-icon'/> {user.phone} 
					</span>
				</p> 

			</div>
			<div className='icons'>
				<DeleteUser />
				<AiFillHeart className='like-icon' />
			</div>
		</div> 
		)
	)

}