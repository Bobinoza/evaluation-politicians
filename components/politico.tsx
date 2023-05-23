import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type User = {
  id: number;
  urlFoto: string;
  nome: string;
  siglaPartido: string;
};

const UserComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20); // Change this to your desired items per page
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPageSet, setCurrentPageSet] = useState(0);
  const maxPagesVisible = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados');
        setUsers(response.data.dados);
        setFilteredUsers(response.data.dados);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  useEffect(() => {
    // This adjusts the page set whenever the currentPage changes
    const newPageSet = Math.floor((currentPage - 1) / maxPagesVisible) * maxPagesVisible;
    setCurrentPageSet(newPageSet);
  }, [currentPage]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Wait for the state to update, then check if we need to move to the next set
    setTimeout(() => {
      if (pageNumber === currentPageSet + maxPagesVisible) {
        setCurrentPageSet(currentPageSet + maxPagesVisible);
      }
    }, 0);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevSet = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (currentPage - 1 < currentPageSet) {
        setCurrentPageSet(currentPageSet - maxPagesVisible);
      }
    }
  }

  const nextSet = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > currentPageSet + maxPagesVisible) {
        setCurrentPageSet(currentPageSet + maxPagesVisible);
      }
    }
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center grow pt-2'>
        {/* SEARCH */}
        <div className='pl-6'>
          <h2 className='text-2xl font-bold mb-4'>Deputados Federaiss</h2>
          <input
            type="text"
            placeholder="Filtrar por nome"
            onChange={event => setSearchTerm(event.target.value)}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
        </div>

        {/* POLITICIANS */}
        <div className='grid grid-cols-4 gap-2 pl-6 pr-6'>
          {currentUsers.map((user) => (
            <div key={user.nome} className="p-4 border border-gray-200 rounded shadow-sm flex items-center bg-white">
              <img src={user.urlFoto} alt={user.nome} className="w-14 h-14 rounded-full mr-4" />
              <div>
                <h2 className="text-base font-bold">{user.nome}</h2>
                <p className="text-sm text-gray-600">{user.siglaPartido}</p>
                <p>{user.id}</p>
              </div>
            </div>
          ))}
        </div>


        {/* PAGINATION */}
        <div className="flex justify-center space-x-2 mt-40">
          <button onClick={prevSet} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {"<"}
          </button>
          {pageNumbers
            .slice(currentPageSet, currentPageSet + maxPagesVisible)
            .map(number => (
              <button key={number} onClick={() => paginate(number)} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentPage === number ? 'bg-blue-700' : ''}`}>
                {number}
              </button>
            ))}
          <button onClick={nextSet} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );

}

export default UserComponent;
