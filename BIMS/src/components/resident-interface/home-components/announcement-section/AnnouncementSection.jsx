import { useNavigate } from 'react-router-dom';

import ButtonDefault from '../../basic-components/ButtonDefault.jsx';
import AnnouncementCard from '../../basic-components/AnnouncementCard.jsx';

import { ARTICLES } from "../../../../util/resident-interface/BarangayArticles.js";

export default function AnnouncementSection() {

    const navigate = useNavigate();
    const articles = ARTICLES();
    
    return <section id='NewsUpdateSection' 
                className="flex lg:flex-row flex-col
                        py-20 sm:px-8 md:px-12 lg:px-0 lg:pl-24 
                        lg:gap-15 gap-10" >

        <div className="lg:w-2/5 my-auto 
                    font-inter text-darkestBlue 
                    text-start text-wrap ">

            <h3 className="font-semibold text-3xl text-balance">
                Upcoming Events & Recent Updates
            </h3>

            <p className="font-light py-10 leading-8">
                Stay informed about the latest happenings in our barangay. 
                Explore upcoming events and recent announcements below, 
                and click the button for more news and updates.
            </p>

            <ButtonDefault
                type="home"
                className="bg-mediumBlue"
                onClick={() => navigate("announcement", { relative: 'path' })}>
                Explore News and Updates
            </ButtonDefault>

        </div>

        <div className="flex flex-nowrap justify-around lg:w-3/5 
                    overflow-hidden hide-scroll overflow-x-auto">
        {articles.slice(0,5).map((article) => (
            <AnnouncementCard 
                key={article.id}
                article={article}
                color="bg-lightGray" 
            />
        ))}
        </div>

    </section>
}

