import { useState } from 'react';

import { Input } from '@material-tailwind/react';
import AnnouncementCard from '../basic-components/AnnouncementCard.jsx';
import PaginationDefault from './PaginationDefault.jsx'; 
import ButtonDefault from '../basic-components/ButtonDefault.jsx';

import searchIcon from '../../../assets/resident-interface/icons/input/search.svg';
import sortAscIcon from '../../../assets/resident-interface/icons/card/sortAsc.svg';
import sortDescIcon from '../../../assets/resident-interface/icons/card/sortDesc.svg';

import { ARTICLES } from '../../../util/resident-interface/BarangayArticles.js';

const ITEMS_PER_PAGE = 12;

export default function Announcement() {
    const articles = ARTICLES();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    const filteredArticles = articles.filter(article => {
        const title = article.title ? article.title.toLowerCase() : '';
        const description = article.desc ? article.desc.toLowerCase() : '';
        const query = searchQuery.toLowerCase();
        return title.includes(query) || description.includes(query);
    });
    
    const sortedArticles = sortOrder === 'asc'
        ? filteredArticles.sort((a, b) => a.title.localeCompare(b.title))
        : filteredArticles.sort((a, b) => b.title.localeCompare(a.title)); 
    const totalPages = Math.ceil(sortedArticles.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentArticles = sortedArticles.slice(startIndex, endIndex);
    
    function handlePageChange(page) {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({
                top: 0,           
                behavior: 'smooth' 
            });    
        }
    };

    function handleSearch(event) {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    function handleSortChange() {setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')};

    return (
        <section id="AnnouncementPage" 
            className="min-h-screen flex flex-col bg-lightGray px-8 pt-40 md:px-12 lg:px-24">

            <div className="flex flex-col text-wrap">
                <h3 className="font-semibold text-4xl text-balance">
                    Barangay Announcement
                </h3>
                <p className="py-5 font-light">
                    Stay connected and informed with the latest developments in our community. 
                    Discover upcoming events and catch up on recent announcements to stay engaged with the heartbeat of our barangay.
                </p>
            </div>

            <div className="flex justify-between py-20 gap-5">

                <ButtonDefault
                    type="forms"
                    className="flex items-center w-44 h-10 justify-around 
                        text-lowBlue bg-snow border-none shadow-none my-auto" 
                    onClick={handleSortChange} 
                    >
                    <img 
                        key={sortOrder} 
                        src={sortOrder === 'asc' ? sortAscIcon : sortDescIcon} /> 
                    <span> {sortOrder === 'asc' ? 'Ascending' : 'Descending'} </span>
                </ButtonDefault>

                <div className="w-72">
                    <Input 
                        color="blue-gray"
                        label="Search Articles" 
                        icon={            
                            <img src={searchIcon} alt="Search" 
                                className="cursor-pointer" 
                            />
                        }
                        value={searchQuery}
                        onChange={(e) => handleSearch(e)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleIconClick();
                            }
                            handleSearch(e);
                        }}
                    /> 
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div className="flex flex-wrap justify-center w-full">
                    {currentArticles.length > 0 ? (
                        currentArticles.map((article, index) => (
                            <AnnouncementCard
                                key={index}
                                article={article}
                                color="bg-white"
                            />
                        ))
                    ) : (
                        <p className="text-lg font-light text-gray-500">
                            No announcements found.
                        </p>
                    )}
                </div>
            </div>

            <div className="flex mx-auto py-32">
                <PaginationDefault
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

        </section>
    );
}